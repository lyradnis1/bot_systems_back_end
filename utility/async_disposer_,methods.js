const withBrowser = async function (fn) {
    var browser = await Puppeteer.launch({
        headless: false,
        args: [
            '--start-maximized' // you can also use '--start-fullscreen'
        ]
    });
    try {
        return await fn(browser);
    } finally {
        await browser.close();
    }
};

const withPage = async function (fn) {
    var pages = await browser.pages();
    var page = pages[0];
    //Ensures the page viewport is set to maximum
    await page.setViewport({
        width: 0,
        height: 0,
    });
    await page.setDefaultNavigationTimeout(0);
    //Set user agent as BRAD so we don't get blocked by IT
    await page.setUserAgent("FishBot-BRAD");
    //Clears all cookies at beginning of every session
    const client = await page.target().createCDPSession();
    await client.send('Network.clearBrowserCookies');
    await client.send('Network.clearBrowserCache');
    try {
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
