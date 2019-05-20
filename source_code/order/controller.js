function refresh() {
	// Emptying your form
	// Displaying the model (all the coffees ordered so far)
}

$(function(){

	
	
	//funtion that gets all the stuff from the form
	$("#submit").click(function() {
		var size = parseInt($('input[name=size]:checked').val());
		var style = parseInt($('input[name=style]:checked').val());
		var extras = [];

		var extraEspressoShots = parseInt( $('#extraEspresso').val() );
		for (var i = 0; i < extraEspressoShots; i++){
			extras.push(new Ingredient("shot"));
		};

		var sugar = parseInt($('#sugarSelect').val());
		if(sugar != 0){
			for (var x = 0; x < sugar; x++){
				extras.push(new Ingredient("sugar"));
			}
		};

		if (parseInt($('#creamSelect').val()) != 0){
			extras.push(new Ingredient("cream"));
		};

		if(parseInt($('#milkSelect').val()) != 0){
			extras.push(new Ingredient("milk"));
		};

		if($('#syrupSelect').val() != 0){
			switch(parseInt($('#syrupSelect').val())){
				case 1: extras.push(new Ingredient("caramelSyrup"));
						break;
				case 2: extras.push(new Ingredient("hazelnutSyrup"));
						break;
			};
		};

		//alert("size : " + size + " - style : " + style);
		
		coffeeOrder.addToOrder(new Coffee(size, style, extras));

		$('#order').trigger('reset');

		//display order
		for (var z = 0; z < coffeeOrder.length(); z++){
			$('#userOrderDiv').append(coffeeOrder.showCoffee(z));
		};

		alert(coffeeOrder.getPrice());


		
	});

	//form 'validation' of extra espressos according to the size of the cup
	$("input:radio[name = 'size']").change(function(){
		switch( parseInt($("input[name='size']:checked").val()) ){
			case 0: $("#extraEspresso option[value = '2']").prop("disabled", false);
					$("#extraEspresso option[value = '3']").prop("disabled", false);
					break;
			case 1: $("#extraEspresso option[value = '2']").prop("disabled", false);
					$("#extraEspresso option[value = '3']").prop("disabled", true);
					break;
			case 2: $("#extraEspresso option[value = '2']").prop("disabled", true);
					$("#extraEspresso option[value = '3']").prop("disabled", true);
					break;
		};
	});

	//disabling the cream/milk selector according to style
	$("input:radio[name='style']").change(function(){
		switch(parseInt($("input[name='style']:checked").val())){
			case 0: $("#creamSelect").prop("disabled", false);
					$("#milkSelect").prop("disabled", false);
					break;
			case 1: $("#creamSelect").prop("disabled", true);
					$("#milkSelect").prop("disabled", false);
					break;
			case 2: $("#milkSelect").prop("disabled", true);
					$("#creamSelect").prop("disabled", false);
					break;
		};
	});
});

// Create a new coffee object
// Add the object to the order
// refresh()

//npm carasoule 


