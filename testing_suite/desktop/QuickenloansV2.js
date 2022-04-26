import inputSelectors from "../../utility/inputs.js";
import analyticsQA from "../../utility/analyticsQA.js";
//import design_urls from "../../utility/page_design_urls.js";
import asyncMethods from "../../utility/async_disposer_methods.js";
import bluebird from "bluebird";

//var urls = design_urls.US.Desktop.QuickenloansLightWeight.URLS;
var urls = ["https://www.fisherinvestments.com/en-us/campaigns/dgri/lc?PC=PLACEMENTX&CC=XXXX", "https://www.fisherinvestments.com/en-us/campaigns/fmr/ld?PC=PLACEMENTX&CC=XXXX"];

const service = async () => {
    let results = await asyncMethods.withBrowser(async (browser) => {
        return bluebird.map(urls, async (url) => {
            return asyncMethods.withPage(async (page) => {
                await page.goto(url);

                let splashExecutionContext = await page.mainFrame().executionContext();
                await splashExecutionContext.evaluate(analyticsQA);

                //Click through splash page
                await Promise.all([
                    page.waitForNavigation(), // The promise resolves after navigation has finished
                    page.click('#fb-container > div > div.lightsaber-letter > div > div.brochure-cta > a.btn-text.btn-GetStarted.center-block.hidden-xs'),
                ]);

                //await page.click('#fb-container > div > div.lightsaber-letter > div > div.brochure-cta > a.btn-text.btn-GetStarted.center-block.hidden-xs');

                //Click through email page
                await page.waitForSelector(inputSelectors.page_designs.lendingtree.desktop.email);
                await page.type(inputSelectors.page_designs.lendingtree.desktop.email, "BradTest@fi.com");

                let form1ExecutionContext = await page.mainFrame().executionContext();
                await form1ExecutionContext.evaluate(analyticsQA);

                await page.waitForSelector("#fb-container > div:nth-child(1) > div > div > form > div > div > div > div:nth-child(2) > div > div:nth-child(1) > button");
                await page.click("#fb-container > div:nth-child(1) > div > div > form > div > div > div > div:nth-child(2) > div > div:nth-child(1) > button");

                //First / Lastname
                //First name 
                await page.waitForSelector(inputSelectors.page_designs.lendingtree.desktop.firstName);
                await page.type(inputSelectors.page_designs.lendingtree.desktop.firstName, "BradTest");
                //last name
                await page.type(inputSelectors.page_designs.lendingtree.desktop.lastName, "BradTest");
                //Analytics Scraper
                let form2ExecutionContext = await page.mainFrame().executionContext();
                await form2ExecutionContext.evaluate(analyticsQA);
                //click on continue button
                await page.waitForSelector("#singlepageapp-body1 > form > div > div > div > div:nth-child(2) > div > div:nth-child(2) > button");
                await page.click("#singlepageapp-body1 > form > div > div > div > div:nth-child(2) > div > div:nth-child(2) > button");

                //Autocomplete addrress 
                //----------------------
                //Analytics Scraper
                let form3ExecutionContext = await page.mainFrame().executionContext();
                await form3ExecutionContext.evaluate(analyticsQA);
                await page.waitForSelector(inputSelectors.page_designs.lendingtree.desktop.address);
                await page.type(inputSelectors.page_designs.lendingtree.desktop.address, '1450 fashion island', { delay: 100 });
                await page.waitForTimeout(500);
                await page.keyboard.press("ArrowDown");
                await page.keyboard.press("Enter");
                await page.waitForTimeout(500);

                await page.waitForSelector("#singlepageapp-body2 > form > div > div > div > div:nth-child(2) > div > div:nth-child(2) > button");
                await page.click('#singlepageapp-body2 > form > div > div > div > div:nth-child(2) > div > div:nth-child(2) > button', { delay: 100 });


                //-------------

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
                let form5ExecutionContext = await page.mainFrame().executionContext();
                await form5ExecutionContext.evaluate(analyticsQA);
                // click question
                await page.click("#singlepageapp-body4 > form > div > div > div > div:nth-child(2) > div > div:nth-child(2) > button");

                //Analytics Scraper; Give enough time for async functions to trigger
                await page.waitForTimeout(5000);
                // response quality should be trigered here, sleep??
                let thankYouExecutionContext = await page.mainFrame().executionContext();
                let thankYouResult = await thankYouExecutionContext.evaluate(analyticsQA);

                //test code


                return thankYouResult;
            }, browser);
        }, {
            concurrency: 2
        });
    });

    return results;
};


export default service;
