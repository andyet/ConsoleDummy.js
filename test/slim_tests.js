test("Make sure all console functions created", function() {
	ok(console);
	ok(console.error, "error");
	ok(console.info, "info");
	ok(console.log, "log");
	ok(console.warn, "warn");
});

test("Call them all", function () {
    console.error("error");
    console.info("info");
    console.log("log");
    console.warn("warn");
})