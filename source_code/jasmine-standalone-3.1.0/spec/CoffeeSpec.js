describe("Get coffee name", function(){
	it("It should return the correct name", function(){
		var extras = ["shot"];
		var coffee = new Coffee(1, 0, extras);
		expect(coffee.getName()).toEqual("redeye black tall Americano");
	})
})