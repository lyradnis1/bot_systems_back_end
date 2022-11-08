//Generalized template for clicking through formsubmitbtn
import global_parameters from "../global_parameters.js";

async function SPAcontinueButton(page) {
    await page.waitForTimeout(global_parameters.timeout);
    let selector = await page.$$(".formsubmitbtn.btn.btn-lg");
    await selector[selector.length - 1].click();
    await page.waitForTimeout(global_parameters.timeout);

}

async function standardWebContinueButton(page) {
    //Splash page has different continue button css class
    await page.waitForTimeout(global_parameters.timeout);
    await page.waitForSelector('.btn-text.btn-GetStarted.center-block');
    await page.waitForTimeout(global_parameters.timeout);
    await page.click(".btn-text.btn-GetStarted.center-block");
}

async function standardWebContinueButton1AMobileTest(page) {
    //Splash page has different continue button css class

    await page.waitForTimeout(global_parameters.timeout);
    let selector = await page.$$(".btn-text.btn-GetStarted.center-block");
    await selector[selector.length - 1].click();
    await page.waitForTimeout(global_parameters.timeout);
}

const navigation = {
    SPAcontinueButton: SPAcontinueButton,
    standardWebContinueButton: standardWebContinueButton,
    standardWebContinueButton1AMobileTest: standardWebContinueButton1AMobileTest
};
export default navigation;
