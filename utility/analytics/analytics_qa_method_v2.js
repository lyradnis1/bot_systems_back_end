//V2 analytics is used for Single Page application or SPA portions of a landing page
//V2 uses performance observer which is used as an event listener for all incoming http requests

async function enablePerformanceObserver() {

    window.collection = window.collection || [];
    var googleAnalyticsObserver = window.googleAnalyticsObserver = new PerformanceObserver(function (list, obj) {
        var entries = list.getEntries();
        for (var i = 0; i < entries.length; i++) {
            if (entries[i].name.indexOf('google-analytic') > -1 && entries[i].initiatorType == 'img') {
                window.collection.push(entries[i].name);
            }
        }

    });
    googleAnalyticsObserver.observe({ entryTypes: ["resource"] });

    return googleAnalyticsObserver;
}
export default enablePerformanceObserver;