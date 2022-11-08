import global_parameters from "./global_parameters.js";

function swapDomains(preproccessedUrls) {
    //urls are automatically already in prod
    var formattedUrls;
    if (global_parameters.subdomain === "preview1") {
        console.log('Swapping to Sitecore 9 PREVIEW');
        formattedUrls = preproccessedUrls.map(function (x) { return x.replace('https://www.fisherinvestments.com', 'https://prod-cd1.fiprc1.com'); });

    } else if (global_parameters.subdomain === "preview2") {
        console.log('Swapping to Sitecore 9 UAT');
        formattedUrls = preproccessedUrls.map(function (x) { return x.replace('https://www.fisherinvestments.com', 'https://preview2.fiprc1.com'); });

    } else if (global_parameters.subdomain === "uat1") {
        console.log('Swapping to Sitecore 9 UAT');
        formattedUrls = preproccessedUrls.map(function (x) { return x.replace('https://www.fisherinvestments.com', 'https://uat1.fiprc1.com'); });

    } else if (global_parameters.subdomain === "uat2") {
        console.log('Swapping to Sitecore 9 UAT');
        formattedUrls = preproccessedUrls.map(function (x) { return x.replace('https://www.fisherinvestments.com', 'https://uat2.fiprc1.com'); });

    } else if (global_parameters.subdomain === "dev1") {
        console.log('Swapping to Sitecore 9 dev1');
        formattedUrls = preproccessedUrls.map(function (x) { return x.replace('https://www.fisherinvestments.com', 'https://dev1-cm.fiprc1.com'); });

    } else if (global_parameters.subdomain === "dev2") {
        console.log('Swapping to Sitecore 9 dev2');
        formattedUrls = preproccessedUrls.map(function (x) { return x.replace('https://www.fisherinvestments.com', 'https://dev2-cm.fiprc1.com'); });

    } else if (global_parameters.subdomain === "uatpreview") {
        console.log('Swapping to Sitecore 9 uatpreview');
        formattedUrls = preproccessedUrls.map(function (x) { return x.replace('https://www.fisherinvestments.com', 'https://uat-preview.fiprc1.com'); });

    } else {
        console.log('URL"s subdomain will remain in production');
        formattedUrls = preproccessedUrls;
    }
    return formattedUrls;
}

export default swapDomains;