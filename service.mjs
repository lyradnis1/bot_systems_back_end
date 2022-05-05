
import Desktop_EQR_Test from "./testing_suite/desktop/QuickenloansLightweight_desktop.js";
import bluebird_Desktop_Test from "./testing_suite/desktop/bluebirdtest_desktop.js";
import design_urls from "./utility/page_design_urls.js";
import Mobile_EQR_Test from "./testing_suite/mobile/QuickenloansLightweight.js";
import bluebird_mobile_eqr_test from "./testing_suite/mobile/bluebirdtest.js";



//Express back end here


//Blue bird implementation desktop 10/10: Browser Test: 4:28.603 (m:ss.mmm) with 3 concurrent workers, Browser Test: 3:47.813 (m:ss.mmm) with 7 concurrent works
// var data = await bluebird_Desktop_Test(design_urls.US.Desktop.QuickenloansLightWeight.URLS);
// console.log(data);

//PROMISE ALL SETTLED IMPLEMENTATION 7/10 on avg Browser Test: 2:57.141 (m:ss.mmm) (m:ss.mmm)
// var Desktop_data = await Desktop_EQR_Test(design_urls.US.Desktop.QuickenloansLightWeight.URLS);
// console.log(Desktop_data);

//---------------------------------------------------------------------------------------------

//Bluebird mobile test: 10/10  Browser Test: 6:17.434 (m:ss.mmm) with 3 concurrency, Browser Test: 3:23.401 (m:ss.mmm) with 7 concurrent , Browser Test: 3:34.369 (m:ss.mmm) with 11 concurrent workers
// var val = await bluebird_mobile_eqr_test(design_urls.US.Desktop.QuickenloansLightWeight.URLS);
// console.log(val);

//PromiseAllSettled mobile test 10/10 : Browser Test: 2:19.693 (m:ss.mmm)
// const Mobile_Data = await Mobile_EQR_Test(design_urls.US.Desktop.QuickenloansLightWeight.URLS);
// console.log(Mobile_Data);

//promiseAllSettled is faster execution, but bluebird saves more often?