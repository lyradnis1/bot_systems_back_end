/**
 * 
 * @returns an object of scraped data of a html page
 */
async function analyticsQA() {

    // Dimesnion to Name mapping, refer to:
    // 1) Fisher Analytics Team
    // 2) Google Queryparam reference: https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters

    var dimNameObj = {
        "v": "Google Protcol Version",
        "dl": "Document Location URL",
        "sr": "Screen Resolution",
        "sd": "Screen Depth",
        "vp": "Viewport",
        "dt": "Document Title",
        "t": "Google Pixel Type",
        "uid": "User ID",
        "tid": "Google Tracking/Web-Property ID",
        "cm2": "Sessions per TiD",
        "cd1": "Alley Code",
        "cd2": "Creative Code",
        "cd3": "Key Code",
        "cd4": "Placement Code",
        "cd5": "Parent Code",
        "cd6": "URL",
        "cd7": "Content Country",
        "cd8": "Domain",
        "cd9": "Page Name",
        "cd10": "Page Type",
        "cd11": "Page Step",
        "cd12": "Page Design",
        "cd13": "Page Version",
        "cd14": "Response Quality",
        "cd15": "Offer Code",
        "cd16": "Offer Name",
        "cd17": "User Type",
        "cd18": "Wishes",
        "cd19": "AssetValue",
        "cd20": "Social Share",
        "cd21": "Adobe Visitor ID",
        "cd22": "Topic",
        "cd23": "Chatbot Interaction",
        "cd24": "FIIG Contact ID",
        "cd25": "Channel",
        "cd26": "Unused",
        "cd27": "Unused",
        "cd28": "Content Country Code",
        "cd29": "SearchQuery",
        "cd30": "CampaignData",
        "cd31": "URI Path",
        "cd32": "Tealium Visitor ID",
        "cd33": "Page path",
        "cd34": "Number of Sessions",
        "cd35": "Video Title",
        "cd36": "Video Duration",
        "cd37": "Video ID",
        "cd38": "Unused",
        "cd39": "Unused",
        "cd40": "Experiment Name (Optimizely)",
        "cd41": "Experiment Variation (Optimizely)",
        "cd42": "User Agent String",
        "cd43": "Calculator Inputs",
        "cd44": "Contact Inquiry Type",
        "cd45": "Unused",
        "cd46": "Unused",
        "cd47": "Unused",
        "cd48": "Personalized Body",
        "cd49": "Personalized Banner",
        "cd50": "Sitesection Code",
        "cd51": "Delivery Code",
        "cd52": "Size Code",
        "cd53": "GA User ID",
        "cd54": "AirPR RE",
        "cd55": "AirPR RD",
        "cd56": "GDPR Consent",
        "cd57": "TimeStamp",
        "cd58": "Submission ID",
        "cd59": "Business Event",
        "cd60": "Optimizely Experiment Slot 1",
        "cd61": "Optimizely Experiment Slot 2",
        "cd62": "Optimizely Experiment Slot 3",
        "cd63": "Optimizely Experiment Slot 4",
        "cd64": "Optimizely Experiment Slot 5",
        "cd65": "Unused",
        "cd66": "Unused",
        "cd67": "Unused",
        "cd68": "Unused",
        "cd69": "Unused",
        "cd70": "CurrStatus",
        "cd71": "CurrQueue",
        "cd72": "Offline Data Slot 3",
        "cd73": "Offline Data Slot 4",
        "cd74": "Offline Data Slot 5",
        "cd75": "Offline Data Slot 6",
        "cd76": "Offline Data Slot 7",
        "cd77": "Offline Data Slot 8",
        "cd78": "Offline Data Slot 9",
        "cd79": "Offline Data Slot 10",
        "ec": "Event Category",
        "ea": "Event Action",
        "el": "Event Label"
    };

    // Function: parse request URL query parameters
    function parseQueryParams(requestURI) {
        var queryParams = {};
        try {
            requestURI.split('?')[1].split('&').forEach(function (pair) {
                pair = pair.split('=');
                try {
                    queryParams[pair[0]] = decodeURIComponent(pair[1] || '');
                } catch (e) {
                    console.log(e + ' error with ' + pair[0] + ' = ' + pair[1]);
                }
            });
        } catch (e) {
            console.log('error ' + e + ' with url ' + requestURI.split('?')[0]);
        }
        return queryParams;
    }


    // Function: filter event entries to google-analytics img requests by account id
    function getData(entryList, dimensionObj) {
        // set to empty array if no existing extries
        entryList = entryList ? entryList : [];
        dimensionObj = dimensionObj ? dimensionObj : {};

        // execute for each resource entry;
        performance.getEntriesByType('resource').forEach(function (entry, i, arr) {
            if (entry.name.indexOf('google-analytic') > -1 && entry.initiatorType == 'img') {
                var queryParamObj = parseQueryParams(entry.name);
                Object.keys(dimensionObj).forEach(function (key, index, arr) {
                    if (!(key in queryParamObj)) {
                        queryParamObj[key] = "null";
                    }
                });

                if (queryParamObj['tid'] && queryParamObj['tid'].indexOf('UA-65079555') > -1) {
                    entryList.push(queryParamObj);
                }
            }
        });
        return entryList;
    }

    // Function: get the event with most keys and return key List
    function getKeys(entryList, keys) {
        if (Array.isArray(entryList)) {
            entryList.forEach(function (entry, i, arr) {
                var temp = Object.keys(entry);
                keys = (keys && keys.length && keys.length > temp.length) ? keys : temp;
            });
            return keys;
        } else {
            return undefined;
        }
    }

    // Function: 
    function mapKey(table, keys, mapObj) {
        // set to empty object if undefined or null
        table = table ? table : {};
        if (Array.isArray(keys)) {
            keys.forEach(function (key, i, arr) {
                var tableEntry = table[key] ? table[key] : {};
                if (!tableEntry['Custom Dimension Name']) {
                    tableEntry['Custom Dimension Name'] = mapObj[key] || '';
                }
                table[key] = tableEntry;
            });
        }
        return table;
    }

    // Function:
    function createTable(table, keys, mapObj, entryList,) {
        // set to empty object if undefined or null
        table = table ? table : {};
        // map keys to name
        table = mapKey(table, keys, mapObj);
        // add resource request entries
        if (Array.isArray(entryList) && Array.isArray(keys)) {
            keys.forEach(function (k, i, kArr) {
                entryList.forEach(function (v, j, eArr) {
                    if (v['t'] && v['cd11']) {
                        var key = v['t'] + '|' + v['cd11'];
                        key = (v['cd59'] && v['cd59'] != 'null') ? (key + '|' + v['cd59']) : key;
                        var val = v[k] || '';
                        table[k][key] = val;
                    }
                });
            });
        }
        return table;
    }

    function getState(key) {
        var state = window.localStorage.getItem(key);
        state = state ? JSON.parse(state) : {};

        // First-time 
        // init url
        // Not First-time + Same Url + not thank you
        // append to data
        // Not first-time + diff url +  + not thank you
        // Not Thank you
        // Thank you

        if (!state) {
            // first time, init state url
            state.url = document.URL;
        } else if (state.url && (state.url != document.URL) && (utag.data.page_step != 'Thank You' && utag.data.page_step != 'Letter')) {
            // Not first-time + diff url + NOT TY/Letter Page,
            // update state url and leave state as is for appending new data
            state.url = document.URL;
        } else if (state.url && (state.url == document.URL) && (utag.data.page_step != 'Thank You' && utag.data.page_step != 'Letter')) {
            // Not First-time + Same Url + Not TY/Letter Page, 
            // Set state to empty object + set state url
            state = {};
            state.url = document.URL;
        } else if (state.url && (state.url != document.URL) && (utag.data.page_step == 'Thank You')) {
            // Not first-time + diff url + First-time on TY-page
            // update state url and set oldData
            state.url = document.URL;
            state.oldData = JSON.parse(JSON.stringify(state.data));
        } else if (state.url && (state.url == document.URL) && (utag.data.page_step == 'Thank You')) {
            // Not First-time + Same Url + TY-page, 
            // Set state to oldData + set state url
            state.url = document.URL;
            state.data = state.oldData;
        } else {
            state = {};
            state.url = document.URL;
        }

        return state;
    }


    // ************************************* Main *****************************************
    if (utag.data['alley_code'] && utag.data["offer_code"]) {
        // create unique key for web alley
        var key = utag.data['alley_code'] + '|' + utag.data["offer_code"];
        // get existing data from browser localstorage
        var qaState = getState(key);

        // Append/Create entry data, keys, table, dimension map. Then create table object. 
        qaState.dim = dimNameObj;
        qaState.data = getData(qaState.data, qaState.dim);
        qaState.key = getKeys(qaState.data, qaState.key);
        qaState.table = createTable(qaState.table, qaState.key, qaState.dim, qaState.data);

        // update browser localstorage with new data
        window.localStorage.setItem(key, JSON.stringify(qaState));
        // print out table and state data
        //console.table(qaState.table);
        let results = qaState.table;
        console.log(results);
        return results;

    }
}

export default analyticsQA;