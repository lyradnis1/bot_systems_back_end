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