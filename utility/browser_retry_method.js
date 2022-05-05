
// Retry method
// function combineResults(results1, results2) {
//     // goal is to override results from 1st pass with results from second pass
//     for (let key in results1) {
//         if (results1[key] == "rejected" && results2[key] == "success") {
//             results1[key] = "success";
//         }
//     }
//     return results1;
// }
// if (Desktop_data.rejected.length > 0) {
//     //Retrying browser context
//     var browserRetry1 = await Desktop_EQR_Test(Desktop_data.rejected);
//     //Set url status to comine with data from first browser retry
//     urlStatuses = combineResults(urlStatuses, browserRetry1.promiseStatuses);
//     console.log("Url status after retry", urlStatuses);
// }

// if (browserRetry1.rejected.length > 0) {
//     //Retrying browser context
//     var browserRetry2 = await Desktop_EQR_Test(browserRetry1.rejected);
//     //Set url status to comine with data from first browser retry
//     urlStatuses = combineResults(urlStatuses, browserRetry2.promiseStatuses);
//     console.log("Url status after retry", urlStatuses);
// }