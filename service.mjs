
import Desktop_EQR_Test from "./testing_suite/desktop/QuickenloansLightweight_desktop.js";

import Mobile_EQR_Test from "./testing_suite/mobile/QuickenloansLightweight.js";


const Desktop_data = await Desktop_EQR_Test();
//const Mobile_Data = await Mobile_EQR_Test();
console.log("Returned values from desktop", Desktop_data);
//console.log("Returned values from mobile", Mobile_Data);

//What does an example get request look like?
