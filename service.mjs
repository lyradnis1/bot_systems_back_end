//import quickenloans_lightweight from "./testing_suite/desktop/quickenloans_lightweight.js";
//import quickenloans_lightweight_desktop_test from "./testing_suite/desktop/quickenloans_lightweight_desktop.js";
//import quickenloans_lendingtree_PF from "./testing_suite/desktop/quickenloans_lendingtree_PF.js";
import quickenloans_lendingtree_PF from "./testing_suite/desktop/quickenloans_lendingtree_PF_subline.js";

import design_urls from "./utility/page_design_urls.js";
//import bluebird_mobile_eqr_test from "./testing_suite/mobile/quickenloans_lightweight.js";



//Express back end here


//Blue bird implementation desktop 10/10: Browser Test: 4:28.603 (m:ss.mmm) with 3 concurrent workers, Browser Test: 2:44.805 (m:ss.mmm) (m:ss.mmm) with 7 concurrent works
var data = await quickenloans_lendingtree_PF(design_urls.US.Desktop.quickenloans_lendingtree_PF_subline.URLS);
console.log(data);

//---------------------------------------------------------------------------------------------

//Bluebird mobile test: 10/10  Browser Test: 6:17.434 (m:ss.mmm) with 3 concurrency, Browser Test: 3:23.401 (m:ss.mmm) with 7 concurrent , Browser Test: 3:34.369 (m:ss.mmm) with 11 concurrent workers
// var val = await bluebird_mobile_eqr_test(design_urls.US.Mobile.quickenloans_lightWeight.URLS);
// console.log(val);

//promiseAllSettled is faster execution, but bluebird saves more often?