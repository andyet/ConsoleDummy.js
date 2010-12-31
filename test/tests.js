test("Make sure all console functions created", function() {
	expect(20);
	ok(console);
	ok(console.assert, "assert");
	ok(console.count, "count");
	ok(console.debug, "debug");
	ok(console.dir, "dir");
	ok(console.dirxml, "dirxml");
	ok(console.error, "error");
	ok(console.exception, "exception");
	ok(console.group, "group");
	ok(console.groupCollapsed, "groupCollapsed");
	ok(console.groupEnd, "groupEnd");
	ok(console.info, "info");
	ok(console.log, "log");
	ok(console.markTimeline, "markTimeline");
	ok(console.profile, "profile");
	ok(console.profileEnd, "profileEnd");
	ok(console.time, "time");
	ok(console.timeEnd, "timeEnd");
	ok(console.trace, "trace");
	ok(console.warn, "warn");
});

test("Call them all", function () {
    console.assert();
    console.count();
    console.debug("debug");
    console.dir("dir");
    console.dirxml("<dirxml/>");
    console.error("error");
    console.exception("exception");
    console.group("group");
    console.groupCollapsed("groupCollapsed");
    console.groupEnd("groupEnd");
    console.info("info");
    console.log("log");
    console.markTimeline("markTimeline");
    console.profile("profile");
    console.profileEnd("profileEnd");
    console.time("time");
    console.timeEnd("timeEnd");
    console.trace("trace");
    console.warn("warn");
})