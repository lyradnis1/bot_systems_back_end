import inputSelectors from "../../utility/inputs.js";
import analyticsQA from "../../utility/analytics_qa_method.js";
import design_urls from "../../utility/page_design_urls.js";
import asyncMethods from "../../utility/async_disposer_methods.js";
import global_parameters from "../../utility/global_parameters.js";
import bluebird from "bluebird";
import swapDomains from "../../utility/domain_swapper.js";



//var urlsTest = ["https://www.fisherinvestments.com/en-us/campaigns/dgri/lc?PC=PLACEMENTX&CC=XXXX&utm_campaign=qa", "https://www.fisherinvestments.com/en-us/campaigns/fmr/ld?PC=PLACEMENTX&CC=XXXX&utm_campaign=qa"];
//design_urls.US.Mobile.QuickenloansLightWeight.URLS

/**
 * 
 * @param {Array} urls: Used to tell puppeteer which urls to scrape 
 * @returns Scraped analytics results from all traversed pages of all given urls 
 */
const service = async (urls = design_urls.US.Mobile.QuickenloansLightWeight.URLS) => {

    urls = swapDomains(urls);
    // store the results of analytics qa scraper on every page of every url
    let results = await asyncMethods.withBrowser(async (browser) => {
        // Use bluebird.map to asynchonously surface each url inside the browser context
        return bluebird.map(urls, async (url) => {
            // surfacing url in the tab in context of the browser call
            return asyncMethods.withPage(async (page) => {
                //Wait for idle network since not having this causes mobile to fail
                await page.goto(url, { waitUntil: 'networkidle2' });
                console.log("Starting to qa ", url);
                //Must trigger QA log start here since the URL doesn't get formed till the previous step
                await page.waitForTimeout(global_parameters.timeout);
                let splashExecutionContext = await page.mainFrame().executionContext();
                await splashExecutionContext.evaluate(analyticsQA);
                await page.waitForTimeout(global_parameters.timeout);

                //Click through splash page
                await Promise.all([
                    page.waitForNavigation(), // The promise resolves after navigation has finished
                    page.click('#fb-container > div > div.lightsaber-letter > div > div.brochure-cta > a.btn-text.btn-GetStarted.center-block.hidden-sm.hidden-md.hidden-lg'),
                ]);

                //Firstname + lastname: 
                await page.waitForSelector(inputSelectors.page_designs.lendingtree.desktop.firstName);
                await page.type(inputSelectors.page_designs.lendingtree.desktop.firstName, "BradTest");
                await page.waitForTimeout(global_parameters.timeout);
                await page.type(inputSelectors.page_designs.lendingtree.desktop.lastName, "BradTest");
                //Analytics Scraper
                await page.waitForTimeout(global_parameters.timeout);
                let form1ExecutionContext = await page.mainFrame().executionContext();
                await form1ExecutionContext.evaluate(analyticsQA);
                await page.waitForSelector("#fb-container > div:nth-child(1) > div > div > form > div > div > div > div:nth-child(2) > div > div:nth-child(1) > button");
                await page.click("#fb-container > div:nth-child(1) > div > div > form > div > div > div > div:nth-child(2) > div > div:nth-child(1) > button");
                await page.waitForTimeout(global_parameters.timeout);

                //Click through email page
                await page.waitForSelector(inputSelectors.page_designs.lendingtree.desktop.email);
                await page.type(inputSelectors.page_designs.lendingtree.desktop.email, "BradTest@fi.com");
                await page.waitForTimeout(global_parameters.timeout);
                let form2ExecutionContext = await page.mainFrame().executionContext();
                await form2ExecutionContext.evaluate(analyticsQA);
                await page.waitForSelector("#singlepageapp-body1 > form > div > div > div > div:nth-child(2) > div > div:nth-child(2) > button");
                await page.click("#singlepageapp-body1 > form > div > div > div > div:nth-child(2) > div > div:nth-child(2) > button");



                //Emoji Selection 1
                // Wait for emoji selection to appear
                await page.waitForSelector("#singlepageapp-body2 > form > div > div > div > div:nth-child(1) > div:nth-child(7) > div > div > div > div:nth-child(4) > div > label");

                await page.click("#singlepageapp-body2 > form > div > div > div > div:nth-child(1) > div:nth-child(7) > div > div > div > div:nth-child(4) > div > label");
                let form3ExecutionContext = await page.mainFrame().executionContext();
                await form3ExecutionContext.evaluate(analyticsQA);
                //Click continue button
                await page.click("#singlepageapp-body2 > form > div > div > div > div:nth-child(2) > div > div:nth-child(2) > button");
                //#singlepageapp-body2 > form > div > div > div > div:nth-child(2) > div > div:nth-child(2) > button



                //Emoji Selection 2
                // Wait for emoji selection to appear
                await page.waitForTimeout(global_parameters.timeout);
                await page.waitForSelector("#singlepageapp-body3 > form > div > div > div > div:nth-child(1) > div:nth-child(7) > div > div > div > div:nth-child(4) > div > label");
                //Click on emoji
                await page.click("#singlepageapp-body3 > form > div > div > div > div:nth-child(1) > div:nth-child(7) > div > div > div > div:nth-child(4) > div > label");
                await page.waitForTimeout(global_parameters.timeout);
                let form4ExecutionContext = await page.mainFrame().executionContext();
                await form4ExecutionContext.evaluate(analyticsQA);
                //Click continue button
                await page.click("#singlepageapp-body3 > form > div > div > div > div:nth-child(2) > div > div:nth-child(2) > button");


                //Emoji Selection 3
                //Wait for emoji selection to appear
                await page.waitForSelector("#singlepageapp-body4 > form > div > div > div > div:nth-child(1) > div:nth-child(7) > div > div > div > div:nth-child(2) > div > label");
                //Click on emoji
                await page.click("#singlepageapp-body4 > form > div > div > div > div:nth-child(1) > div:nth-child(7) > div > div > div > div:nth-child(2) > div > label");
                let form5ExecutionContext = await page.mainFrame().executionContext();
                await form5ExecutionContext.evaluate(analyticsQA);
                //Click continue button
                //#singlepageapp-body4 > form > div > div > div > div:nth-child(2) > div > div:nth-child(2) > button
                await page.click("#singlepageapp-body4 > form > div > div > div > div:nth-child(2) > div > div:nth-child(2) > button");

                //Emoji Selection 4
                // Wait for emoji selection to appear
                await page.waitForTimeout(global_parameters.timeout);
                await page.waitForSelector("#singlepageapp-body5 > form > div > div > div > div:nth-child(1) > div:nth-child(7) > div > div > div > div:nth-child(2) > div > label");
                //Click on emoji
                await page.click("#singlepageapp-body5 > form > div > div > div > div:nth-child(1) > div:nth-child(7) > div > div > div > div:nth-child(2) > div > label");
                let form6ExecutionContext = await page.mainFrame().executionContext();
                await form6ExecutionContext.evaluate(analyticsQA);
                // //Click continue button
                await page.click("#singlepageapp-body5 > form > div > div > div > div:nth-child(2) > div > div:nth-child(2) > button");

                //Asset Selection here
                let form7ExecutionContext = await page.mainFrame().executionContext();
                await form7ExecutionContext.evaluate(analyticsQA);
                await page.waitForTimeout(global_parameters.timeout);
                await page.waitForSelector("#singlepageapp-body6 > form > div > div > div > div:nth-child(2) > div > div:nth-child(2) > button");
                await page.click("#singlepageapp-body6 > form > div > div > div > div:nth-child(2) > div > div:nth-child(2) > button");


                //Autocomplete addrress 
                //--------------------
                await page.waitForTimeout(global_parameters.timeout);
                let form8ExecutionContext = await page.mainFrame().executionContext();
                await form8ExecutionContext.evaluate(analyticsQA);
                await page.waitForTimeout(global_parameters.timeout);
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
                let form9ExecutionContext = await page.mainFrame().executionContext();
                await form9ExecutionContext.evaluate(analyticsQA);
                // click continue
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
                console.log("Finished QAing:", url);

                return thankYouResult;
            }, browser, "mobile");
        }, { concurrency: global_parameters.concurrency });
    });

    console.log("Success object here", results);
    return results;
};


export default service;
