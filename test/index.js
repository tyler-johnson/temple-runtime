import test from "tape";
import Temple from "templejs-runtime";

test("loads", (t) => {
	t.plan(1);
	console.log(Temple);
	t.pass("ok");
});
