import Puppeteer from 'puppeteer';
import inputSelectors from "../../../utility/inputs.js";
import analyticsQA from "../../../scripts/analyticsQA.js";



const service = async (country) => {

    // Set Browser viewport to maximum for desktop
    try {
        var browser = await Puppeteer.launch({
            headless: false,
            args: [
                '--start-maximized' // you can also use '--start-fullscreen'
            ]
        });
        // Use page that initial puppeteer launch creates
        var pages = await browser.pages();
        var page = pages[0];
        //Ensures the page viewport is set to maximum
        await page.setViewport({
            width: 0,
            height: 0,
        });
        //Set user agent as BRAD so we don't get blocked by IT
        page.setUserAgent("FishBot-BRAD");


        //Start stepping through
        await page.goto('https://www.fisherinvestments.com/en-us/campaigns/dgri/lc?PC=PLACEMENTX&CC=XXXX');
        //Analytics check, must trigger every page step to ensure all page steps are saved in local storage
        const splashExecutionContext = await page.mainFrame().executionContext();
        await splashExecutionContext.evaluate(analyticsQA);




        //Click through splash page
        await page.click("#fb-container > div > div.lightsaber-letter > div > div.brochure-cta > a.btn-text.btn-GetStarted.center-block.hidden-xs");

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
        //key in values 
        await page.waitForSelector(inputSelectors.page_designs.lendingtree.desktop.address);
        await page.type(inputSelectors.page_designs.lendingtree.desktop.address, '1450 fas', { delay: 300 });
        //keyboard down error here
        await page.keyboard.press("ArrowDown", { delay: 300 });
        // click enter
        await page.keyboard.press("Enter", { delay: 300 });
        //Analytics Scraper
        let form3ExecutionContext = await page.mainFrame().executionContext();
        await form3ExecutionContext.evaluate(analyticsQA);
        // click continue
        await page.waitForSelector("#singlepageapp-body2 > form > div > div > div > div:nth-child(2) > div > div:nth-child(2) > button");
        await page.click("#singlepageapp-body2 > form > div > div > div > div:nth-child(2) > div > div:nth-child(2) > button");


        //Phone number
        //fill phone number
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

        // browser.close();

        console.log(thankYouResult);
        return thankYouResult;
    } catch (e) {
        console.error("Error in Browser step through:", e);
    }




};

export default service;
