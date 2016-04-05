import * as idom from "./idom.js";
import * as utils from "./utils.js";
import Trackr from "trackr";
import Scope from "./scope.js";
import {version as VERSION} from "../package.json";

import * as plugins from "./plugins/index.js";
import * as decorators from "./plugins/decorators.js";
import * as actions from "./plugins/actions.js";

export { Map, List, Variable, trackProperty } from "trackr-objects";
export * from "./templates.js";
export * from "./builtins.js";

export {
	VERSION,
	Trackr, Scope, idom, utils,
	plugins, decorators, actions
};
