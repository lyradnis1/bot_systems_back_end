import inputSelectors from "../../utility/inputs.js";
import analyticsQA from "../../utility/analytics_qa_method.js";
//import design_urls from "../../utility/page_design_urls.js";
import asyncMethods from "../../utility/async_disposer_methods.js";
import bluebird from "bluebird";


//var urls = design_urls.US.Mobile.QuickenloansLightWeight.URLS;
var urls = ["https://www.fisherinvestments.com/en-us/campaigns/fmr/ld?utm_campaign=qa&PC=PLACEMENTX&CC=XXXX", "https://www.fisherinvestments.com/en-us/campaigns/ai/lb?utm_campaign=qa&PC=PLACEMENTX&CC=XXXX", "https://www.fisherinvestments.com/en-us/campaigns/smo/lf?utm_campaign=qa&PC=PLACEMENTX&CC=XXXX"];

const service = async (country) => {
    let results = await asyncMethods.withBrowser(async (browser) => {
        return bluebird.map(urls, async (url) => {
            return asyncMethods.withPage(async (page) => {
                console.log("Started QAing:", url);
                await page.goto(url);

                let splashExecutionContext = await page.mainFrame().executionContext();
                await splashExecutionContext.evaluate(analyticsQA);

                //Click through splash page
                await Promise.all([
                    page.waitForNavigation(), // The promise resolves after navigation has finished
                    page.click('#fb-container > div > div.lightsaber-letter > div > div.brochure-cta > a.btn-text.btn-GetStarted.center-block.hidden-sm.hidden-md.hidden-lg'),

                ]);

                //Firstname + lastname: 
                await page.waitForSelector(inputSelectors.page_designs.lendingtree.desktop.firstName);
                await page.type(inputSelectors.page_designs.lendingtree.desktop.firstName, "BradTest");
                await page.type(inputSelectors.page_designs.lendingtree.desktop.lastName, "BradTest");
                //Analytics Scraper
                let form1ExecutionContext = await page.mainFrame().executionContext();
                await form1ExecutionContext.evaluate(analyticsQA);
                await page.waitForSelector("#fb-container > div:nth-child(1) > div > div > form > div > div > div > div:nth-child(2) > div > div:nth-child(1) > button");
                await page.click("#fb-container > div:nth-child(1) > div > div > form > div > div > div > div:nth-child(2) > div > div:nth-child(1) > button");


                //Click through email page
                await page.waitForSelector(inputSelectors.page_designs.lendingtree.desktop.email);
                await page.type(inputSelectors.page_designs.lendingtree.desktop.email, "BradTest@fi.com");
                let form2ExecutionContext = await page.mainFrame().executionContext();
                await form2ExecutionContext.evaluate(analyticsQA);
                await page.waitForSelector("#singlepageapp-body1 > form > div > div > div > div:nth-child(2) > div > div:nth-child(2) > button");
                await page.click("#singlepageapp-body1 > form > div > div > div > div:nth-child(2) > div > div:nth-child(2) > button");



                //Emoji Selection 1
                // Wait for emoji selection to appear
                await page.waitForTimeout(1000);
                await page.waitForSelector("#singlepageapp-body2 > form > div > div > div > div:nth-child(1) > div:nth-child(7) > div > div > div > div:nth-child(4) > div > label");
                //Click on emoji
                await page.click("#singlepageapp-body2 > form > div > div > div > div:nth-child(1) > div:nth-child(7) > div > div > div > div:nth-child(4) > div > label");
                let form3ExecutionContext = await page.mainFrame().executionContext();
                await form3ExecutionContext.evaluate(analyticsQA);
                //Click continue button
                await page.click("#singlepageapp-body2 > form > div > div > div > div:nth-child(2) > div > div:nth-child(2) > button");
                //#singlepageapp-body2 > form > div > div > div > div:nth-child(2) > div > div:nth-child(2) > button



                //Emoji Selection 2
                // Wait for emoji selection to appear
                await page.waitForTimeout(1000);
                await page.waitForSelector("#singlepageapp-body3 > form > div > div > div > div:nth-child(1) > div:nth-child(7) > div > div > div > div:nth-child(4) > div > label");
                //Click on emoji
                await page.click("#singlepageapp-body3 > form > div > div > div > div:nth-child(1) > div:nth-child(7) > div > div > div > div:nth-child(4) > div > label");
                let form4ExecutionContext = await page.mainFrame().executionContext();
                await form4ExecutionContext.evaluate(analyticsQA);
                //Click continue button
                await page.click("#singlepageapp-body3 > form > div > div > div > div:nth-child(2) > div > div:nth-child(2) > button");


                //Emoji Selection 3
                //Wait for emoji selection to appear
                await page.waitForTimeout(1000);
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
                await page.waitForTimeout(1000);
                await page.waitForSelector("#singlepageapp-body5 > form > div > div > div > div:nth-child(1) > div:nth-child(7) > div > div > div > div:nth-child(2) > div > label");
                //Click on emoji
                await page.click("#singlepageapp-body5 > form > div > div > div > div:nth-child(1) > div:nth-child(7) > div > div > div > div:nth-child(2) > div > label");
                let form6ExecutionContext = await page.mainFrame().executionContext();
                await form6ExecutionContext.evaluate(analyticsQA);
                // //Click continue button
                await page.click("#singlepageapp-body5 > form > div > div > div > div:nth-child(2) > div > div:nth-child(2) > button");
                await page.waitForTimeout(1000);

                //Asset Selection here
                let form7ExecutionContext = await page.mainFrame().executionContext();
                await form7ExecutionContext.evaluate(analyticsQA);
                await page.click("#singlepageapp-body6 > form > div > div > div > div:nth-child(2) > div > div:nth-child(2) > button");


                //Autocomplete addrress 
                //--------------------
                let form8ExecutionContext = await page.mainFrame().executionContext();
                await form8ExecutionContext.evaluate(analyticsQA);
                await page.waitForSelector(inputSelectors.page_designs.lendingtree.desktop.address);
                await page.type(inputSelectors.page_designs.lendingtree.desktop.address, '1450 fashion island', { delay: 100 });
                await page.waitForTimeout(500);
                await page.keyboard.press("ArrowDown");
                await page.keyboard.press("Enter");
                await page.waitForTimeout(500);
                //#singlepageapp-body7 > form > div > div > div > div:nth-child(2) > div > div:nth-child(2) > button
                await page.waitForSelector("#singlepageapp-body7 > form > div > div > div > div:nth-child(2) > div > div:nth-child(2) > button");
                await page.click('#singlepageapp-body7 > form > div > div > div > div:nth-child(2) > div > div:nth-child(2) > button', { delay: 100 });


                //-------------
                //phone number
                await page.waitForSelector(inputSelectors.page_designs.lendingtree.desktop.phoneNumber);
                await page.type(inputSelectors.page_designs.lendingtree.desktop.phoneNumber, '9096075138', { delay: 200 });
                let form9ExecutionContext = await page.mainFrame().executionContext();
                await form9ExecutionContext.evaluate(analyticsQA);
                // click continue
                await page.waitForSelector("#singlepageapp-body8 > form > div > div > div > div:nth-child(2) > div > div:nth-child(2) > button");
                await page.click("#singlepageapp-body8 > form > div > div > div > div:nth-child(2) > div > div:nth-child(2) > button");

                // Thank You page
                //Analytics Scraper; Give enough time for async functions to trigger
                await page.waitForTimeout(5000);
                // response quality should be trigered here, sleep??
                let thankYouExecutionContext = await page.mainFrame().executionContext();
                let thankYouResult = await thankYouExecutionContext.evaluate(analyticsQA);

                //test code
                console.log("Finished QAing:", url);

                return thankYouResult;
            }, browser, "mobile", country);
        }, {
            concurrency: 3
        });
    });

    return results;
};


export default service;
