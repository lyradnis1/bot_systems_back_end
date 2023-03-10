import Puppeteer from "puppeteer";
import global_parameters from "./global_parameters.js";


/**
 * 
 * @param {function} fn The callback function that is invoked with the newly created browser as the argument 
 * @returns The promise result of the callback function used with the browser context then sequentially closing out the browser to ensure memory garbage collection is succesful 
 */
const withBrowser = async function (fn) {
    // Sets browser config here
    console.time("Browser Test");
    var browser = await Puppeteer.launch({
        headless: global_parameters.headless,
        defaultViewport: null,
        // executablePath: '/usr/bin/google-chrome',
        slowMo: global_parameters.slowmo,
        // '--no-sandbox',
        //     '--disable-setuid-sandbox',
        //     '--disable-dev-shm-usage',
        //     '--disable-accelerated-2d-canvas',
        //     '--no-first-run',
        //     '--no-zygote',
        //     //'--single-process', // <- this one doesn't works in Windows
        //     '--disable-gpu'
        ignoreDefaultArgs: ['--disable-extensions'],
        args: [
            // '--autoplay-policy=user-gesture-required',
            // '--disable-background-networking',
            // '--disable-background-timer-throttling',
            // '--disable-backgrounding-occluded-windows',
            // '--disable-breakpad',
            // '--disable-client-side-phishing-detection',
            // '--disable-component-update',
            // '--disable-default-apps',
            // '--disable-dev-shm-usage',
            // '--disable-domain-reliability',
            // '--disable-extensions',
            // '--disable-features=AudioServiceOutOfProcess',
            // '--disable-hang-monitor',
            // '--disable-ipc-flooding-protection',
            // '--disable-notifications',
            // '--disable-offer-store-unmasked-wallet-cards',
            // '--disable-popup-blocking',
            // '--disable-print-preview',
            // '--disable-prompt-on-repost',
            // '--disable-renderer-backgrounding',
            // '--disable-setuid-sandbox',
            // '--disable-speech-api',
            // '--disable-sync',
            // '--hide-scrollbars',
            // '--ignore-gpu-blacklist',
            // '--metrics-recording-only',
            // '--mute-audio',
            // '--no-default-browser-check',
            // '--no-first-run',
            // '--no-pings',
            '--no-sandbox',
            // '--no-zygote',
            // '--password-store=basic',
            // '--use-gl=swiftshader',
            // '--use-mock-keychain',
        ]
    });
    try {
        return await fn(browser);
    } catch (e) {
        //Why is there an error in the browser?
        console.log("error in browser!", e);
        return;

    } finally {
        console.timeEnd("Browser Test");
        await browser.close();
    }
};
/**
 * 
 * @param {Function} fn The function that will be used as a callback in the context of the newly created tab 
 * @param {Object} browser The browser environment  
 * @param {String} device The specificaton of mobile vs desktop 
 * @returns The promise result of the callback function used with in the page context
 */
const withPage = async function (fn, browser, device) {
    // Setting device as specified
    var page = await browser.newPage();
    if (device === "desktop") {
        await page.setViewport({
            width: 1920,
            height: 1080,
        });
    } else if (device === "mobile") {
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
        var url = await page.url();
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
