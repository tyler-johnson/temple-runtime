import json from "rollup-plugin-json";
import resolve from "./resolve";

export default {
	onwarn: ()=>{},
	format: "es6",
	plugins: [
		resolve(),
		json()
	]
};
