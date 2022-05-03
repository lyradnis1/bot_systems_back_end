import Puppeteer from "puppeteer";

//Used for retry feature
const wait = (ms) => new Promise((res) => setTimeout(res, ms));

//Builds browser with config
const withBrowser = async function (fn) {
    // Sets browser config here
    var browser = await Puppeteer.launch({
        headless: true,
        defaultViewport: null,
        slowMo: 100,
        args: [
            '--start-maximized',
            "--proxy-server='direct://'",
            '--proxy-bypass-list=*'
        ]
    });
    try {
        return await fn(browser);
    } catch (e) {
        //Why is there an error in the browser?
        console.log("error in browser!", e);
        return;

    } finally {
        await browser.close();
    }
};
//function automatically retries url if catch block gets triggered
const withPage = async function (fn, browser, device, depth = 0) {
    // Setting device as specified
    var page = await browser.newPage();
    if (device === "desktop") {

        await page.setViewport({
            width: 0,
            height: 0,
        });
        await page.waitForTimeout(1000);
    } else if (device === "mobile") {
        //let page = await browser.newPage();
        // const mobile = Puppeteer.devices['iPhone X'];
        // await page.emulate(mobile);
        await page.setViewport({
            width: 414,
            height: 896,
        });
    }
    //Defaults navigation timeout to unlimited so wifi bandwidth doesnt block us 
    await page.setDefaultNavigationTimeout(0);
    //Set user agent as BRAD so we don't get blocked by IT
    await page.setUserAgent("FishBot-BRAD");
    //trigger cb function 
    try {
        return await fn(page);
    } catch (e) {
        let url = await page.url();
        //If retry amount(alias: depth) amount is greater than x; trigger manual review alarm
        if (depth > 7) {
            console.log(url, " has failed several times, please check ", url, " for manual review");
            //what should we return if fails??
            return null;

        }
        // Triggers a async timeout that is exponetiallty larger each failed iteration to ensure requested resource is not overloaded 
        await wait(2 ** depth * 10);
        //trigger retry alarmgit 
        console.log("QA has failed: retrying page url", url);
        //trigger rerun of page
        return await fn(page);
    } finally {
        //Ensures that all pages gets shut down regardless of success or failure
        await page.close;
    }
};

var methods = {
    "withBrowser": withBrowser,
    "withPage": withPage
};
export default methods;
