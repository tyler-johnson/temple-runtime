import babel from "rollup-plugin-babel";
import json from "rollup-plugin-json";
import resolve from "./resolve";

export default {
	onwarn: ()=>{},
	format: "cjs",
	plugins: [
		resolve(),
		json(),
		babel({
			exclude: [ "node_modules/**" ],
			include: [ "src/**" ],
			plugins: [
				"external-helpers",
				"transform-es2015-destructuring",
				"transform-es2015-parameters",
				"transform-async-to-generator",
				"transform-object-rest-spread"
			]
		})
	]
};
