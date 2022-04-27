import Puppeteer from "puppeteer";

//Used for retry feature
const wait = (ms) => new Promise((res) => setTimeout(res, ms));

//Builds browser with config
const withBrowser = async function (fn) {
    var browser = await Puppeteer.launch({
        headless: true,
        args: [
            '--start-maximized' // you can also use '--start-fullscreen'
        ]
    });
    try {
        return await fn(browser);
    } catch (e) {
        console.log(e);
    } finally {
        await browser.close();
    }
};
//function automatically retries url if catch block gets triggered
const withPage = async function (fn, browser, device, depth = 0) {
    // Setting device as specified
    if (device === "desktop") {
        var page = await browser.newPage();
        await page.setViewport({
            width: 0,
            height: 0,
        });
    } else if (device === "mobile") {
        var page = await browser.newPage();
        const mobile = Puppeteer.devices['iPhone X'];
        await page.emulate(mobile);
    }
    //Defaults navigation timeout to unlimited so wifi bandwidth doesnt block us 
    await page.setDefaultNavigationTimeout(0);
    //Set user agent as BRAD so we don't get blocked by IT
    await page.setUserAgent("FishBot-BRAD");
    //trigger cb function from arguments
    try {
        return await fn(page);
    } catch (e) {
        if (depth > 7) {
            console.log(page.url(), " has failed several times, please check ", page.url(), " for manual review");
            return null;
        }
        await wait(2 ** depth * 10);
        //retrigger code here
        console.log("QA has failed: retrying page url", page.url());
        return await fn(page);
    } finally {
        await page.close;
    }
};

var methods = {
    "withBrowser": withBrowser,
    "withPage": withPage
};
export default methods;
