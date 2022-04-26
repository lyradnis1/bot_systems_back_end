
import EQR_Test from "./testing_suite/desktop/QuickenloansV2.js";

let data = await EQR_Test();
console.log("Returned values from URLS", data.length);
