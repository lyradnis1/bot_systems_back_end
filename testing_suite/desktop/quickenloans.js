import inputSelectors from "../../utility/inputs.js";
import analyticsQA from "../../utility/analytics_qa_method.js";
import design_urls from "../../utility/page_design_urls.js";
import asyncMethods from "../../utility/async_disposer_methods.js";
import global_parameters from "../../utility/global_parameters.js";
import bluebird from "bluebird";


//var urls = design_urls.US.Desktop.QuickenloansLightWeight.URLS;
//Test URLS
//var urls = ["https://www.fisherinvestments.com/en-us/campaigns/dgri/lc?PC=PLACEMENTX&CC=XXXX&utm_campaign=qa"];


/**
 * 
 * @param {Array} urls: Used to tell puppeteer which urls to scrape 
 * @returns Scraped analytics results from all traversed pages of all given urls 
 */
const service = async (urls) => {
    // store the results of analytics qa scraper on every page of every url
    let results = await asyncMethods.withBrowser(async (browser) => {
        // Use bluebird.map to asynchonously surface each url inside the browser context
        return bluebird.map(urls, async (url) => {
            // surfacing url in the tab in context of the browser call
            return asyncMethods.withPage(async (page) => {
                //Actual page traversal of page-tab start here
                await page.goto(url, { waitUntil: "domcontentloaded" });
                //Must trigger QA log start here since the URL doesn't get formed till the previous step
                console.log("Starting to qa ", url);
                await page.waitForTimeout(global_parameters.timeout);
                //Retrieve (front end) context of current page of current tab of current browser
                let splashExecutionContext = await page.mainFrame().executionContext();
                // Pseudo pause until analyticsQA finishes running in splash page context
                await splashExecutionContext.evaluate(analyticsQA);
                await page.waitForTimeout(global_parameters.timeout);

                //Since we change URL we must use wait for navigation with promise.all as shown by docs
                await Promise.all([
                    page.waitForNavigation(), // The promise resolves after navigation has finished
                    page.click('#fb-container > div > div.lightsaber-letter > div > div.brochure-cta > a.btn-text.btn-GetStarted.center-block.hidden-xs'),
                ]);

                //Psuedo pause until the page returns the results of the element chosen by selector
                await page.waitForSelector(inputSelectors.page_designs.lendingtree.desktop.email);
                //pseudo pause until page finishes typing in email
                page.type(inputSelectors.page_designs.lendingtree.desktop.email, "BradTest@fi.com");
                //Wait 2 seconds to give AnalyticsQA space to run
                await page.waitForTimeout(global_parameters.timeout);
                //Grabs form1 browser context
                let form1ExecutionContext = await page.mainFrame().executionContext();
                await page.waitForTimeout(global_parameters.timeout);
                //Executes analytics scraper in form1 browser context
                await form1ExecutionContext.evaluate(analyticsQA);

                await page.waitForTimeout(global_parameters.timeout);
                await page.waitForSelector("#fb-container > div:nth-child(1) > div > div > form > div > div > div > div:nth-child(2) > div > div:nth-child(1) > button");
                await page.click("#fb-container > div:nth-child(1) > div > div > form > div > div > div > div:nth-child(2) > div > div:nth-child(1) > button");

                //First / Lastname
                //First name 

                await page.waitForTimeout(global_parameters.timeout);
                await page.waitForSelector(inputSelectors.page_designs.lendingtree.desktop.firstName, { timeout: 12000 });
                await page.type(inputSelectors.page_designs.lendingtree.desktop.firstName, "BradTest");
                await page.waitForTimeout(global_parameters.timeout);
                await page.type(inputSelectors.page_designs.lendingtree.desktop.lastName, "BradTest");
                await page.waitForTimeout(global_parameters.timeout);
                //Analytics Scraper
                let form2ExecutionContext = await page.mainFrame().executionContext();
                await form2ExecutionContext.evaluate(analyticsQA);
                await page.waitForTimeout(global_parameters.timeout);
                //click on continue button
                await page.waitForSelector("#singlepageapp-body1 > form > div > div > div > div:nth-child(2) > div > div:nth-child(2) > button");
                await page.click("#singlepageapp-body1 > form > div > div > div > div:nth-child(2) > div > div:nth-child(2) > button");

                //Autocomplete addrress 
                //----------------------
                //Analytics Scraper
                await page.waitForTimeout(global_parameters.timeout);
                let form3ExecutionContext = await page.mainFrame().executionContext();
                await form3ExecutionContext.evaluate(analyticsQA);
                await page.waitForSelector(inputSelectors.page_designs.lendingtree.desktop.address);
                await page.type(inputSelectors.page_designs.lendingtree.desktop.address, '1450 fashion island', { delay: 100 });
                await page.waitForTimeout(global_parameters.timeout);
                await page.keyboard.press("ArrowDown");
                await page.keyboard.press("Enter");
                await page.waitForTimeout(global_parameters.timeout);

                await page.waitForSelector("#singlepageapp-body2 > form > div > div > div > div:nth-child(2) > div > div:nth-child(2) > button");
                await page.click('#singlepageapp-body2 > form > div > div > div > div:nth-child(2) > div > div:nth-child(2) > button', { delay: 100 });


                //-------------
                await page.waitForTimeout(global_parameters.timeout);
                await page.waitForSelector(inputSelectors.page_designs.lendingtree.desktop.phoneNumber);
                await page.type(inputSelectors.page_designs.lendingtree.desktop.phoneNumber, '9096075138', { delay: 200 });
                //analytics qa
                let form4ExecutionContext = await page.mainFrame().executionContext();
                await form4ExecutionContext.evaluate(analyticsQA);
                // click continue
                await page.waitForSelector("#singlepageapp-body3 > form > div > div > div > div:nth-child(2) > div > div:nth-child(2) > button");
                await page.click("#singlepageapp-body3 > form > div > div > div > div:nth-child(2) > div > div:nth-child(2) > button");

                //Assets
                // click assets
                await page.waitForSelector("#singlepageapp-body4 > form > div > div > div > div:nth-child(1) > div:nth-child(8) > div > div > div:nth-child(5) > label");
                await page.click("#singlepageapp-body4 > form > div > div > div > div:nth-child(1) > div:nth-child(8) > div > div > div:nth-child(5) > label");
                //Analytics Scraper
                await page.waitForTimeout(global_parameters.timeout);
                let form5ExecutionContext = await page.mainFrame().executionContext();
                await form5ExecutionContext.evaluate(analyticsQA);
                // click question
                await page.click("#singlepageapp-body4 > form > div > div > div > div:nth-child(2) > div > div:nth-child(2) > button");

                //Analytics Scraper; Give enough time for async functions to trigger
                await page.waitForTimeout(global_parameters.timeout);
                // response quality should be trigered here, sleep??
                let thankYouExecutionContext = await page.mainFrame().executionContext();
                await page.waitForTimeout(global_parameters.timeout);
                let thankYouResult = await thankYouExecutionContext.evaluate(analyticsQA);

                //test code
                console.log("Finishing ", url);
                //setting url here so we can surface it outside of async scope
                thankYouResult.url = url;

                //Throw error here?
                return thankYouResult;
            }, browser, "desktop");
        }, { concurrency: global_parameters.concurrency });
    });


    return results;
};


export default service;
