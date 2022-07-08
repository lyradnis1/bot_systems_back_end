export default {
    timeout: 2000,
    headless: false,
    //100 is good version
    slowmo: 100,
    concurrency: 4,
    //Options for domain can be preview1, preview2, uat1, uat2, prod
    //Technically you can put anything that is not preview1/preview2/uat1/uat2 since the default is always going to be prod
    subdomain: "prod"
};
//dev1
////*[@id="fb-container"]/div/div/div[1]/div/div[2]/a[1]
//prod
////*[@id="fb-container"]/div/div[1]/div/div[2]/a[2]