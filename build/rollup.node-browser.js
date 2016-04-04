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
			presets: [ "es2015-rollup" ],
			plugins: [
				"transform-object-rest-spread",
				"lodash"
			]
		})
	]
};
