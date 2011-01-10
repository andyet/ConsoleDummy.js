test("Make sure log console functions created", function() {
	ok(console);
	ok(console.log, "log");
    console.log("log");	
})