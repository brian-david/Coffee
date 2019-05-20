function Coffee(size, style, extras){
	var sizes = {
		short: {price: 12.00, init: 1},
		tall: {price: 14.00, init: 2},
		grande: {price: 16.00, init: 3}
	};

	this.size;
	this.style;
	this.ingredients = [];

	//establishing initial ingredients based on size
	switch(size){
		case 0: this.size = "short";
				break;
		case 1: this.size = "tall";
				break;
		case 2: this.size = "grande";
				break;
	};

	this.ingridientCount = function(ing){
		var count = 0;
		for (var x=0; x < this.ingredients.length; x++){
			if (this.ingredients[x].ingridient == ing){
				count++;
			}
		};
		return count;
	}

	//initial shots
	for (var x = 0; x < size+1; x++){
		this.ingredients.push(new Ingredient("shot"));
	};

	//adding the extra ingredients to the array
	if (extras != undefined){
		for (var x=0; x<extras.length; x++){
			this.ingredients.push(new Ingredient(extras[x].ingridient));
		}
	}

	//establish initial ingredients based on style
	switch(style){
		case 0: this.style = "Americano";
				break;
		case 1: this.style = "Cappuccino";
				this.ingredients.push(new Ingredient("cream"));
				break;
		case 2: this.style = "Latte";
				this.ingredients.push(new Ingredient("milk"));
				break;
	}

	// GET PRICE ========================================================================
	this.getPrice = function(){
		var total = 0;
		
		for (var x=0; x < this.ingredients.length; x++){
			total += this.ingredients[x].getPrice();
		}
		
		switch(this.size){
			case "short": 	total += 12.00;
							break;
			case "tall" : 	total += 14.00
							break;
			case "grande": 	total += 16.00
							break;
		}
		return total;
	};


	// GET NAME =========================================================================
	this.getName = function(){
		var name = '';
		//REDEYE
		if (this.ingridientCount("shot") > sizes[this.size].init){
			if (name != ''){
				name += " ";
			}
			name += "redeye";
		}
		//BLACK
		if (this.ingridientCount("milk") == 0 && this.ingridientCount("cream") == 0 && this.style == "Americano"){
			if (name != ''){
				name += " ";
			}
			name += "black";
		}

		//SIZE
		name += " " + this.size + " ";

		//SWEET
		if (this.ingridientCount("sugar") != 0){
			if (name != ''){
				name += " ";
			}
			name += "sweet";
		}
		//SYRUP
		if (this.ingridientCount("hazelnutSyrup") != 0){
			if (name != ''){
				name += " ";
			}
			name += "hazelnut";
		}
		//SYRUP
		if (this.ingridientCount("caramelSyrup") != 0){
			if (name != ''){
				name += " ";
			}
			name += "caramel";
		}

		//STYLE
		name +=  " " + this.style + " ";
		
		//the logic for the extra ingredients
		if (this.style == "Americano" && (this.ingridientCount("cream") != 0 || this.ingridientCount("milk") != 0)){
			var ampCheck = 0;
			name += " with";
			if (this.ingridientCount("cream")!=0){
				name += " cream";
				ampCheck = 1;
			}
			if (this.ingridientCount("milk")!=0){
				if (ampCheck != 0){
					name += " and"
				}
				name += " milk";
			}
		}

		if (this.style == "Cappuccino" && this.ingridientCount("milk")){
			name += " with milk";
		}

		if (this.style == "Latte" && this.ingridientCount("cream")){
			name += " with cream";
		}

		return name;
	}
	
};