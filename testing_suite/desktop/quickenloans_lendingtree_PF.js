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
                //Actual page traversal of page-tab start here
                await page.goto(url, { waitUntil: "domcontentloaded" });
                //await page.evaluate(() => localStorage.clear());

                //Must trigger QA log start here since the URL doesn't get formed till the previous step
                console.log("Starting to qa ", url);
                await page.waitForTimeout(global_parameters.timeout);
                let splashExecutionContext = await page.mainFrame().executionContext();
                await page.waitForTimeout(global_parameters.timeout);
                //Retrieve (front end) context of current page of current tab of current browser
                await splashExecutionContext.evaluate(analyticsQA);
                // Pseudo pause until analyticsQA finishes running in splash page context

                await page.waitForTimeout(global_parameters.timeout);


                //Evaluating element by xpath
                const b = (await page.$x("\/\/*[@id='fb-container']/div/div[1]/div/div[2]/a[2]"))[0];
                //"\/\/*[@id='fb-container']/div/div[1]/div/div[2]/a[2]";
                //Click element once found
                b.click();
                await page.waitForTimeout(global_parameters.timeout);
                await page.evaluate(analyticsQAv2);

                await page.waitForSelector(inputSelectors.page_designs.lendingtree.desktop.firstName, { timeout: 12000 });
                await page.type(inputSelectors.page_designs.lendingtree.desktop.firstName, "BradTest");
                await page.waitForTimeout(global_parameters.timeout);
                await page.type(inputSelectors.page_designs.lendingtree.desktop.lastName, "BradTest");


                //Analytics Scraper


                await page.waitForSelector("#fb-container > div:nth-child(1) > div > div > form > div > div > div > div:nth-child(2) > div > div:nth-child(1) > button");
                await page.click("#fb-container > div:nth-child(1) > div > div > form > div > div > div > div:nth-child(2) > div > div:nth-child(1) > button");
                await page.waitForTimeout(global_parameters.timeout);




                //Psuedo pause until the page returns the results of the element chosen by selector
                await page.waitForSelector(inputSelectors.page_designs.lendingtree.desktop.email);
                //pseudo pause until page finishes typing in email
                await page.type(inputSelectors.page_designs.lendingtree.desktop.email, "BradTest@fi.com");
                //Wait 2 seconds to give AnalyticsQA space to run
                await page.waitForTimeout(global_parameters.timeout);

                await page.waitForSelector("#singlepageapp-body1 > form > div > div > div > div:nth-child(2) > div > div:nth-child(2) > button");
                await page.click("#singlepageapp-body1 > form > div > div > div > div:nth-child(2) > div > div:nth-child(2) > button");

                //emoji1 here
                await page.waitForTimeout(global_parameters.timeout);
                await page.waitForSelector("#singlepageapp-body2 > form > div > div > div > div:nth-child(1) > div:nth-child(7) > div > div > div > div:nth-child(1) > div > label");
                await page.waitForTimeout(global_parameters.timeout);
                await page.click("#singlepageapp-body2 > form > div > div > div > div:nth-child(1) > div:nth-child(7) > div > div > div > div:nth-child(1) > div > label");
                // await page.waitForTimeout(global_parameters.timeout);
                // let form3ExecutionContext = await page.mainFrame().executionContext();
                // await page.waitForTimeout(global_parameters.timeout);
                // await form3ExecutionContext.evaluate(analyticsQA);
                await page.waitForTimeout(global_parameters.timeout);
                await page.click('#singlepageapp-body2 > form > div > div > div > div:nth-child(2) > div > div:nth-child(2) > button', { delay: 100 });

                //emoji2 here
                await page.waitForTimeout(global_parameters.timeout);
                await page.waitForSelector("#singlepageapp-body3 > form > div > div > div > div:nth-child(1) > div:nth-child(7) > div > div > div > div:nth-child(4) > div > label");
                await page.click("#singlepageapp-body3 > form > div > div > div > div:nth-child(1) > div:nth-child(7) > div > div > div > div:nth-child(4) > div > label");
                // await page.waitForTimeout(global_parameters.timeout);
                // let form4ExecutionContext = await page.mainFrame().executionContext();
                // await page.waitForTimeout(global_parameters.timeout);
                // await form4ExecutionContext.evaluate(analyticsQA);
                await page.waitForTimeout(global_parameters.timeout);
                await page.click('#singlepageapp-body3 > form > div > div > div > div:nth-child(2) > div > div:nth-child(2) > button', { delay: 100 });


                //emoji3 here
                await page.waitForTimeout(global_parameters.timeout);
                //await page.waitForSelector("#singlepageapp-body4 > form > div > div > div > div:nth-child(1) > div:nth-child(7) > div > div > div > div:nth-child(4) > div > label");
                await page.click("#singlepageapp-body4 > form > div > div > div > div:nth-child(1) > div:nth-child(7) > div > div > div > div:nth-child(4) > div > label");
                // await page.waitForTimeout(global_parameters.timeout);
                // let form5ExecutionContext = await page.mainFrame().executionContext();
                // await page.waitForTimeout(global_parameters.timeout);
                // await form5ExecutionContext.evaluate(analyticsQA);
                await page.waitForTimeout(global_parameters.timeout);
                await page.click('#singlepageapp-body4 > form > div > div > div > div:nth-child(2) > div > div:nth-child(2) > button', { delay: 100 });


                //emoji4 here
                await page.waitForTimeout(global_parameters.timeout);
                await page.waitForSelector("#singlepageapp-body5 > form > div > div > div > div:nth-child(1) > div:nth-child(7) > div > div > div > div:nth-child(4) > div > label");
                await page.click("#singlepageapp-body5 > form > div > div > div > div:nth-child(1) > div:nth-child(7) > div > div > div > div:nth-child(4) > div > label");
                // await page.waitForTimeout(global_parameters.timeout);
                // let form6ExecutionContext = await page.mainFrame().executionContext();
                // await page.waitForTimeout(global_parameters.timeout);
                // await form6ExecutionContext.evaluate(analyticsQA);
                await page.waitForTimeout(global_parameters.timeout);
                await page.click('#singlepageapp-body5 > form > div > div > div > div:nth-child(2) > div > div:nth-child(2) > button', { delay: 100 });




                // Asset
                // click assets
                await page.waitForTimeout(global_parameters.timeout);
                // let form7ExecutionContext = await page.mainFrame().executionContext();
                // await page.waitForTimeout(global_parameters.timeout);
                // await form7ExecutionContext.evaluate(analyticsQA);
                // await page.waitForTimeout(global_parameters.timeout);

                await page.waitForSelector("#singlepageapp-body6 > form > div > div > div > div:nth-child(2) > div > div:nth-child(2) > button");
                await page.click('#singlepageapp-body6 > form > div > div > div > div:nth-child(2) > div > div:nth-child(2) > button', { delay: 100 });





                //Autocomplete addrress 
                //----------------------
                //Analytics Scraper
                await page.waitForTimeout(global_parameters.timeout);
                // let form8ExecutionContext = await page.mainFrame().executionContext();
                // await page.waitForTimeout(global_parameters.timeout);
                // await form8ExecutionContext.evaluate(analyticsQA);
                // await page.waitForTimeout(global_parameters.timeout);
                await page.waitForSelector(inputSelectors.page_designs.lendingtree.desktop.address);
                await page.type(inputSelectors.page_designs.lendingtree.desktop.address, '1450 fashion island', { delay: 100 });
                await page.waitForTimeout(global_parameters.timeout);
                await page.keyboard.press("ArrowDown");
                await page.keyboard.press("Enter");
                await page.waitForTimeout(global_parameters.timeout);

                await page.waitForSelector("#singlepageapp-body7 > form > div > div > div > div:nth-child(2) > div > div:nth-child(2) > button");
                await page.click('#singlepageapp-body7 > form > div > div > div > div:nth-child(2) > div > div:nth-child(2) > button', { delay: 100 });


                //------------- Phone number
                await page.waitForSelector(inputSelectors.page_designs.lendingtree.desktop.phoneNumber);
                await page.type(inputSelectors.page_designs.lendingtree.desktop.phoneNumber, '9096075138', { delay: 200 });
                await page.waitForTimeout(global_parameters.timeout);

                let formData = await page.evaluate(function () {
                    return window.collection;
                });
                await page.waitForTimeout(global_parameters.timeout);

                // click continue -------------------------------------------------------------------------------------------------------------------------
                // Next click will change URL to append TY
                // await page.waitForSelector("#singlepageapp-body8 > form > div > div > div > div:nth-child(2) > div > div:nth-child(2) > button");
                // await page.click("#singlepageapp-body8 > form > div > div > div > div:nth-child(2) > div > div:nth-child(2) > button");


                await Promise.all([
                    page.waitForNavigation(), // The promise resolves after navigation has finished
                    page.click('#singlepageapp-body8 > form > div > div > div > div:nth-child(2) > div > div:nth-child(2) > button'),
                ]);
                //Analytics Scraper; Give enough time for async functions to trigger
                // response quality should be trigered here, sleep??
                await page.waitForTimeout(global_parameters.timeout);
                let thankYouExecutionContext = await page.mainFrame().executionContext();
                let thankYouResult = await thankYouExecutionContext.evaluate(analyticsQA);
                //let thankYouResult = await thankYouExecutionContext.evaluate(analyticsQA);
                await page.waitForTimeout(global_parameters.timeout);

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


                console.log("Finishing ", url);
                //Throw error here?
                return processData;
            }, browser, "desktop");
        }, { concurrency: global_parameters.concurrency });
    });


    return results;
};


export default service;
