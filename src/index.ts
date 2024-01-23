// import

import { automate } from "./automate";
import { runAutomation } from "./utils";

// run

const result = await runAutomation(automate);
console.log(result);
