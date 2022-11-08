import inputSelectors from "../../utility/inputs.js";
import analyticsQA from "../../utility/analytics/analytics_qa_method.js";
import analyticsQAv2 from "../../utility/analytics/analytics_qa_method_v2.js";
import formatDataToStandard from "../../utility/analytics/data_manipulation.js";
import combineSets from "../../utility/analytics/combine_data_sets.js";
import design_urls from "../../utility/page_design_urls.js";
import asyncMethods from "../../utility/async_disposer_methods.js";
import global_parameters from "../../utility/global_parameters.js";
import bluebird from "bluebird";
import swapDomains from "../../utility/domain_swapper.js";
import interactions from "../../utility/pageMethods/interactions.js";
import navigation from "../../utility/pageMethods/navigation.js";


/**
 * 
 * @param {Array} urls: Used to tell puppeteer which urls to create a tab in a browser with 
 * @returns Scraped analytics results from all traversed pages of all given urls 
 */
const service = async (urls) => {
    //Changing subdomain according to global parameters
    urls = swapDomains(urls);
    console.log(urls);

    // store the results of analytics qa scraper on every page of every url
    let results = await asyncMethods.withBrowser(async (browser) => {
        // Use bluebird.map to asynchonously surface each url inside the browser context
        return bluebird.map(urls, async (url) => {
            // surfacing url in the tab in context of the browser call
            return asyncMethods.withPage(async (page) => {


                //Click through splash page
                await interactions.clickThroughSplash(page, url);
                await navigation.standardWebContinueButton(page);

                await page.waitForTimeout(1860000);
                //Input first and last name

                await interactions.inputFirstAndLastName(page);
                await navigation.SPAcontinueButton(page);


                //Input email
                await interactions.inputEmail(page);
                await navigation.SPAcontinueButton(page);




                //emoji1 here
                await interactions.inputEmoji(page, 1);
                await navigation.SPAcontinueButton(page);



                //emoji2 here
                await interactions.inputEmoji(page, 2);
                await navigation.SPAcontinueButton(page);



                //emoji3 here
                await interactions.inputEmoji(page, 3);
                await navigation.SPAcontinueButton(page);



                //emoji4 here
                await interactions.inputEmoji(page, 4);
                await navigation.SPAcontinueButton(page);



                // Asset: no special method for assets since we just click through to next page

                await navigation.SPAcontinueButton(page);


                //Autocomplete addrress 
                //await interactions.inputAddress(page);
                await interactions.inputZipCode(page);
                await navigation.SPAcontinueButton(page);
                //Address is now only zip code


                // Input phone number
                await interactions.inputPhoneNumber(page);
                //Gather data from analytics v2
                let formData = await page.evaluate(function () {
                    return window.collection;
                });
                await page.waitForTimeout(global_parameters.timeout);
                await navigation.SPAcontinueButton(page);


                const thankYouResult = await interactions.thankYouClickThrough(page);



                //test code
                //setting url here so we can surface it outside of async scope
                var today = new Date();
                var dd = String(today.getDate()).padStart(2, '0');
                var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
                var yyyy = today.getFullYear();


                today = mm + '/' + dd + '/' + yyyy;
                thankYouResult.url = url;
                thankYouResult.time_stamp = today;
                //Splash Data uses V1 analytics script
                // Form Data uses v2 which is reproduced in a different format, formatDataToStandard formats in V1's style
                //Thank you result is from V1 analytics
                // We already have TY results
                //Store value here to look at SPA data if needed
                thankYouResult.performanceObserverData = { "single_page_application_data_flow": formatDataToStandard(formData) };
                var processData = combineSets(thankYouResult);

                //Throw error here?
                return processData;
            }, browser, "desktop");
        }, { concurrency: global_parameters.concurrency });
    });


    return results;
};


export default service;
