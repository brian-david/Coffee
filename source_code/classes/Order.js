function Order(){
	this.coffees = [];
};

Order.prototype.getPrice = function(){
	var total = 0;
	for (var x=0; x<this.coffees.length; x++){
		total += this.coffees[x].getPrice();
	}
	console.log(total.toFixed(2));
	return total;
};

Order.prototype.length = function(){
	return this.coffees.length;
};

Order.prototype.showCoffee = function(index){
	return (this.coffees[index].getName() + " : " + this.coffees[index].getPrice());
}

Order.prototype.addToOrder = function(newCoffee){
	this.coffees.push(newCoffee);
};

function EmployeeOrder(){
	Order.call();
};

EmployeeOrder.prototype = Object.create(Order.prototype);

EmployeeOrder.prototype.getPrice = function(){
	// Order.call(this)
	return (Order.prototype.getPrice.call(this) * 0.25);
}