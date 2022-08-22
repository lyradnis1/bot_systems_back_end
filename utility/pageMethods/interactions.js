import inputSelectors from "../../utility/inputs.js";
import analyticsQA from "../../utility/analytics/analytics_qa_method.js";
import analyticsQAv2 from "../../utility/analytics/analytics_qa_method_v2.js";
import global_parameters from "../../utility/global_parameters.js";

async function clickThroughSplash(page, url) {
    await page.goto(url, { waitUntil: "networkidle2" });
    await page.evaluate(() => localStorage.clear());
    let splashExecutionContext = await page.mainFrame().executionContext();

    //Must trigger QA log start here since the URL doesn't get formed till the previous step
    console.log("Starting to qa ", url);
    await page.waitForTimeout(global_parameters.timeout);
    //Retrieve (front end) context of current page of current tab of current browser

    await splashExecutionContext.evaluate(analyticsQA);
    await page.waitForTimeout(global_parameters.timeout);

}

async function inputEmail(page) {
    await page.waitForSelector(inputSelectors.page_designs.lendingtree.desktop.email);
    //pseudo pause until page finishes typing in email
    await page.type(inputSelectors.page_designs.lendingtree.desktop.email, "BradTest@fi.com");
    //Wait 2 seconds to give AnalyticsQA space to run
    await page.waitForTimeout(global_parameters.timeout);

}

async function inputFirstAndLastName(page) {
    await page.evaluate(analyticsQAv2);
    await page.waitForTimeout(global_parameters.timeout);
    await page.waitForSelector(inputSelectors.page_designs.lendingtree.desktop.firstName, { timeout: 12000 });
    await page.waitForTimeout(global_parameters.timeout);
    await page.type(inputSelectors.page_designs.lendingtree.desktop.firstName, "BradTest");
    await page.waitForTimeout(global_parameters.timeout);
    await page.type(inputSelectors.page_designs.lendingtree.desktop.lastName, "BradTest");
    await page.waitForTimeout(global_parameters.timeout);
}

async function inputAddress(page) {
    await page.waitForTimeout(global_parameters.timeout);
    await page.waitForSelector(inputSelectors.page_designs.lendingtree.desktop.address);
    await page.type(inputSelectors.page_designs.lendingtree.desktop.address, '1450 fashion island', { delay: 100 });
    await page.waitForTimeout(global_parameters.timeout);
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("Enter");
    await page.waitForTimeout(global_parameters.timeout);

}

async function inputPhoneNumber(page) {
    await page.waitForTimeout(global_parameters.timeout);
    await page.waitForSelector(inputSelectors.page_designs.lendingtree.desktop.phoneNumber);
    await page.type(inputSelectors.page_designs.lendingtree.desktop.phoneNumber, '9096075138', { delay: 200 });
    await page.waitForTimeout(global_parameters.timeout);

}
//to be used for all emoji pages
async function inputEmoji(page, emojiSelection) {
    if (emojiSelection == 1) {
        await page.waitForTimeout(global_parameters.timeout);
        await page.waitForSelector("#singlepageapp-body2 > form > div > div > div > div:nth-child(1) > div:nth-child(7) > div > div > div > div:nth-child(4) > div > label");
        await page.click("#singlepageapp-body2 > form > div > div > div > div:nth-child(1) > div:nth-child(7) > div > div > div > div:nth-child(4) > div > label");
    } else if (emojiSelection == 2) {
        await page.waitForTimeout(global_parameters.timeout);
        await page.waitForSelector("#singlepageapp-body3 > form > div > div > div > div:nth-child(1) > div:nth-child(7) > div > div > div > div:nth-child(4) > div > label");
        await page.click("#singlepageapp-body3 > form > div > div > div > div:nth-child(1) > div:nth-child(7) > div > div > div > div:nth-child(4) > div > label");

    } else if (emojiSelection == 3) {
        await page.waitForTimeout(global_parameters.timeout);
        await page.waitForSelector("#singlepageapp-body4 > form > div > div > div > div:nth-child(1) > div:nth-child(7) > div > div > div > div:nth-child(4) > div > label");
        await page.click("#singlepageapp-body4 > form > div > div > div > div:nth-child(1) > div:nth-child(7) > div > div > div > div:nth-child(4) > div > label");

    } else if (emojiSelection == 4) {
        await page.waitForTimeout(global_parameters.timeout);
        await page.waitForSelector("#singlepageapp-body5 > form > div > div > div > div:nth-child(1) > div:nth-child(7) > div > div > div > div:nth-child(4) > div > label");
        await page.click("#singlepageapp-body5 > form > div > div > div > div:nth-child(1) > div:nth-child(7) > div > div > div > div:nth-child(4) > div > label");

    }
}

async function inputAsset(page) {

}

async function thankYouClickThrough(page) {
    await page.waitForTimeout(global_parameters.timeout);
    let thankYouExecutionContext = await page.mainFrame().executionContext();
    await page.waitForTimeout(global_parameters.timeout);
    let thankYouResult = await thankYouExecutionContext.evaluate(analyticsQA);
    //let thankYouResult = await thankYouExecutionContext.evaluate(analyticsQA);
    await page.waitForTimeout(global_parameters.timeout);
    return await thankYouResult;
}


const interactions = {
    clickThroughSplash: clickThroughSplash,
    thankYouClickThrough: thankYouClickThrough,
    inputEmoji: inputEmoji,
    inputPhoneNumber: inputPhoneNumber,
    inputAddress: inputAddress,
    inputFirstAndLastName: inputFirstAndLastName,
    inputEmail: inputEmail

};
export default interactions;