
import Desktop_EQR_Test from "./testing_suite/desktop/QuickenloansV2.js";

import Mobile_EQR_Test from "./testing_suite/mobile/QuickenloansLightweight.js";
let data = await Mobile_EQR_Test();
console.log("Returned values from URLS", data);
