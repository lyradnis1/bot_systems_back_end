import inputSelectors from "../../utility/inputs.js";
import analyticsQA from "../../utility/analytics/analytics_qa_method.js";
import design_urls from "../../utility/page_design_urls.js";
import asyncMethods from "../../utility/async_disposer_methods.js";
import analyticsQAv2 from "../../utility/analytics/analytics_qa_method_v2.js";
import formatDataToStandard from "../../utility/analytics/data_manipulation.js";
import combineSets from "../../utility/analytics/combine_data_sets.js";
import global_parameters from "../../utility/global_parameters.js";
import bluebird from "bluebird";
import swapDomains from "../../utility/domain_swapper.js";

/**
 * 
 * @param {Array} urls: Used to tell puppeteer which urls to scrape 
 * @returns Scraped analytics results from all traversed pages of all given urls 
 */
const service = async (urls) => {
    //Changing subdomain according to global parameters to preview/uat
    urls = swapDomains(urls);
    console.log(urls);
    // store the results of analytics qa scraper on every page of every url
    let results = await asyncMethods.withBrowser(async (browser) => {
        // Use bluebird.map to asynchonously surface each url inside the browser context
        return bluebird.map(urls, async (url) => {
            // surfacing url in the tab in context of the browser call
            return asyncMethods.withPage(async (page) => {
                //Wait for idle network since not having this causes mobile to fail
                await page.goto(url, { waitUntil: 'domcontentloaded' });
                console.log("Starting to qa ", url);
                //Must trigger QA log start here since the URL doesn't get formed till the previous step
                await page.waitForTimeout(global_parameters.timeout);
                let splashExecutionContext = await page.mainFrame().executionContext();
                await splashExecutionContext.evaluate(analyticsQA);
                await page.waitForTimeout(global_parameters.timeout);

                //Click through splash page
                // const b = (await page.$x("\/\/*[@id='fb-container']/div/div[1]/div/div[2]/a"))[0];
                // //Click element once found
                // b.click();

                await page.waitForTimeout(global_parameters.timeout);
                await page.waitForSelector('.btn-text.btn-GetStarted.center-block');
                await page.waitForTimeout(global_parameters.timeout);
                await page.click(".btn-text.btn-GetStarted.center-block");
                await page.waitForTimeout(global_parameters.timeout);
                await page.evaluate(analyticsQAv2);
                //Firstname + lastname: 
                await page.waitForSelector(inputSelectors.page_designs.lendingtree.desktop.firstName);
                await page.type(inputSelectors.page_designs.lendingtree.desktop.firstName, "BradTest");
                await page.waitForTimeout(global_parameters.timeout);
                await page.type(inputSelectors.page_designs.lendingtree.desktop.lastName, "BradTest");
                //Analytics Scraper
                // await page.waitForTimeout(global_parameters.timeout);
                // let form1ExecutionContext = await page.mainFrame().executionContext();
                // await form1ExecutionContext.evaluate(analyticsQA);
                await page.waitForSelector("#fb-container > div:nth-child(1) > div > div > form > div > div > div > div:nth-child(2) > div > div:nth-child(1) > button");
                await page.click("#fb-container > div:nth-child(1) > div > div > form > div > div > div > div:nth-child(2) > div > div:nth-child(1) > button");
                await page.waitForTimeout(global_parameters.timeout);

                //Click through email page
                await page.waitForSelector(inputSelectors.page_designs.lendingtree.desktop.email);
                await page.type(inputSelectors.page_designs.lendingtree.desktop.email, "BradTest@fi.com");
                await page.waitForTimeout(global_parameters.timeout);
                // let form2ExecutionContext = await page.mainFrame().executionContext();
                // await form2ExecutionContext.evaluate(analyticsQA);
                await page.waitForSelector("#singlepageapp-body1 > form > div > div > div > div:nth-child(2) > div > div:nth-child(2) > button");
                await page.click("#singlepageapp-body1 > form > div > div > div > div:nth-child(2) > div > div:nth-child(2) > button");


                await page.waitForTimeout(global_parameters.timeout);
                //Emoji Selection 1
                // Wait for emoji selection to appear
                await page.waitForSelector("#singlepageapp-body2 > form > div > div > div > div:nth-child(1) > div:nth-child(7) > div > div > div > div:nth-child(4) > div > label");
                await page.waitForTimeout(global_parameters.timeout);
                await page.click("#singlepageapp-body2 > form > div > div > div > div:nth-child(1) > div:nth-child(7) > div > div > div > div:nth-child(4) > div > label");
                // let form3ExecutionContext = await page.mainFrame().executionContext();
                // await form3ExecutionContext.evaluate(analyticsQA);
                //Click continue button
                await page.waitForTimeout(global_parameters.timeout);
                await page.click("#singlepageapp-body2 > form > div > div > div > div:nth-child(2) > div > div:nth-child(2) > button");
                //#singlepageapp-body2 > form > div > div > div > div:nth-child(2) > div > div:nth-child(2) > button



                //Emoji Selection 2
                // Wait for emoji selection to appear
                await page.waitForTimeout(global_parameters.timeout);
                await page.waitForSelector("#singlepageapp-body3 > form > div > div > div > div:nth-child(1) > div:nth-child(7) > div > div > div > div:nth-child(4) > div > label");
                //Click on emoji
                await page.click("#singlepageapp-body3 > form > div > div > div > div:nth-child(1) > div:nth-child(7) > div > div > div > div:nth-child(4) > div > label");
                await page.waitForTimeout(global_parameters.timeout);
                // let form4ExecutionContext = await page.mainFrame().executionContext();
                // await form4ExecutionContext.evaluate(analyticsQA);
                //Click continue button
                await page.waitForTimeout(global_parameters.timeout);
                await page.click("#singlepageapp-body3 > form > div > div > div > div:nth-child(2) > div > div:nth-child(2) > button");
                await page.waitForTimeout(global_parameters.timeout);

                //Emoji Selection 3
                //Wait for emoji selection to appear
                await page.waitForTimeout(global_parameters.timeout);
                await page.waitForSelector("#singlepageapp-body4 > form > div > div > div > div:nth-child(1) > div:nth-child(7) > div > div > div > div:nth-child(2) > div > label");
                await page.waitForTimeout(global_parameters.timeout);
                //Click on emoji
                await page.click("#singlepageapp-body4 > form > div > div > div > div:nth-child(1) > div:nth-child(7) > div > div > div > div:nth-child(2) > div > label");
                // let form5ExecutionContext = await page.mainFrame().executionContext();
                // await form5ExecutionContext.evaluate(analyticsQA);
                //Click continue button
                await page.waitForTimeout(global_parameters.timeout);
                //#singlepageapp-body4 > form > div > div > div > div:nth-child(2) > div > div:nth-child(2) > button
                await page.click("#singlepageapp-body4 > form > div > div > div > div:nth-child(2) > div > div:nth-child(2) > button");

                //Emoji Selection 4
                // Wait for emoji selection to appear
                await page.waitForTimeout(global_parameters.timeout);
                await page.waitForSelector("#singlepageapp-body5 > form > div > div > div > div:nth-child(1) > div:nth-child(7) > div > div > div > div:nth-child(2) > div > label");
                //Click on emoji
                await page.click("#singlepageapp-body5 > form > div > div > div > div:nth-child(1) > div:nth-child(7) > div > div > div > div:nth-child(2) > div > label");
                // let form6ExecutionContext = await page.mainFrame().executionContext();
                // await form6ExecutionContext.evaluate(analyticsQA);
                await page.waitForTimeout(global_parameters.timeout);
                // //Click continue button
                await page.click("#singlepageapp-body5 > form > div > div > div > div:nth-child(2) > div > div:nth-child(2) > button");

                //Asset Selection here
                // let form7ExecutionContext = await page.mainFrame().executionContext();
                // await form7ExecutionContext.evaluate(analyticsQA);
                await page.waitForTimeout(global_parameters.timeout);
                await page.waitForSelector("#singlepageapp-body6 > form > div > div > div > div:nth-child(2) > div > div:nth-child(2) > button");
                await page.click("#singlepageapp-body6 > form > div > div > div > div:nth-child(2) > div > div:nth-child(2) > button");


                //Autocomplete addrress 
                //--------------------
                await page.waitForTimeout(global_parameters.timeout);
                // let form8ExecutionContext = await page.mainFrame().executionContext();
                // await form8ExecutionContext.evaluate(analyticsQA);
                // await page.waitForTimeout(global_parameters.timeout);
                await page.waitForSelector(inputSelectors.page_designs.lendingtree.desktop.address);
                await page.type(inputSelectors.page_designs.lendingtree.desktop.address, '1450 fashion island', { delay: 100 });
                await page.waitForTimeout(global_parameters.timeout);
                await page.keyboard.press("ArrowDown");
                await page.keyboard.press("Enter");
                await page.waitForTimeout(global_parameters.timeout);
                //#singlepageapp-body7 > form > div > div > div > div:nth-child(2) > div > div:nth-child(2) > button
                await page.waitForSelector("#singlepageapp-body7 > form > div > div > div > div:nth-child(2) > div > div:nth-child(2) > button");
                await page.click('#singlepageapp-body7 > form > div > div > div > div:nth-child(2) > div > div:nth-child(2) > button', { delay: 100 });


                //-------------
                //phone number

                await page.waitForSelector(inputSelectors.page_designs.lendingtree.desktop.phoneNumber);
                await page.type(inputSelectors.page_designs.lendingtree.desktop.phoneNumber, '9096075138', { delay: 200 });
                await page.waitForTimeout(global_parameters.timeout);
                // let form9ExecutionContext = await page.mainFrame().executionContext();
                // await form9ExecutionContext.evaluate(analyticsQA);
                // click continue
                let formData = await page.evaluate(function () {
                    return window.collection;
                });
                await page.waitForTimeout(global_parameters.timeout);

                await Promise.all([
                    page.waitForNavigation(), // The promise resolves after navigation has finished
                    page.click('#singlepageapp-body8 > form > div > div > div > div:nth-child(2) > div > div:nth-child(2) > button'),
                ]);

                // Thank You page
                //Analytics Scraper; Give enough time for async functions to trigger
                await page.waitForTimeout(global_parameters.timeout);
                let thankYouExecutionContext = await page.mainFrame().executionContext();
                let thankYouResult = await thankYouExecutionContext.evaluate(analyticsQA);
                await page.waitForTimeout(global_parameters.timeout);
                //test code
                var today = new Date();
                var dd = String(today.getDate()).padStart(2, '0');
                var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
                var yyyy = today.getFullYear();

                today = mm + '/' + dd + '/' + yyyy;
                thankYouResult.url = url;
                thankYouResult.time_stamp = today;
                thankYouResult.performanceObserverData = { "single_page_application_data_flow": formatDataToStandard(formData) };
                var processData = combineSets(thankYouResult);
                console.log("Finished QAing:", url);
                return processData;
            }, browser, "mobile");
        }, { concurrency: global_parameters.concurrency });
    });

    return results;
};


export default service;
