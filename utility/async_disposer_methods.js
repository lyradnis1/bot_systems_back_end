import Puppeteer from "puppeteer";

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

const withPage = async function (fn, browser, device) {
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
    //Defaults navigation timeout to unlimited 
    await page.setDefaultNavigationTimeout(0);
    //Set user agent as BRAD so we don't get blocked by IT
    await page.setUserAgent("FishBot-BRAD");
    try {
        return await fn(page);
    } catch (e) {
        console.log(e);
    } finally {
        await page.close;
    }

};

var methods = {
    "withBrowser": withBrowser,
    "withPage": withPage
};
export default methods;
