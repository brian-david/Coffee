function Ingredient(ingridient){
	var ingredients = {
		shot: {price: 0.75, maxPortion: 4},
		milk: {price: 0.50, maxPortion: 1},
		cream: {price: 1.00, maxPortion: 1},
		sugar: {price: 0.20, maxPortion: 2},
		hazelnutSyrup: {price: 5.00, maxPortion: 1},
		caramelSyrup: {price: 5.00, maxPortion: 1}
	};

	this.ingridient = ingridient;

	this.getPrice = function(){
		return (ingredients[this.ingridient].price);
	};

	this.getName = function(){
		if (this.ingridient == "shot"){
			return "espresso shot";
		}else{
			return this.ingridient;
		}
	};
};