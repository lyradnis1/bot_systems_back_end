import designUrls from "../page_design_urls.js";

import quickenloans_lendingtree_PF_slideshow_desktop_test from "../../testing_suite/desktop/quickenloans_lendingtree_PF_slideshow.js";
import quickenloans_lendingtree_PF_subline_desktop_test from "../../testing_suite/desktop/quickenloans_lendingtree_PF_subline.js";
import quickenloans_lendingtree_PF_desktop_test from "../../testing_suite/desktop/quickenloans_lendingtree_PF.js";
import quickenloans_lightweight_desktop_test from "../../testing_suite/desktop/quickenloans_lightweight.js";

import quickenloans_lendingtree_PF_slideshow_mobile_test from "../../testing_suite/mobile/quickenloans_lendingtree_PF_slideshow.js";
import quickenloans_lendingtree_PF_subline_mobile_test from "../../testing_suite/mobile/quickenloans_lendingtree_PF_subline.js";
import quickenloans_lendingtree_PF_mobile_test from "../../testing_suite/mobile/quickenloans_lendingtree_PF.js";
import quickenloans_lightweight_mobile_test from "../../testing_suite/mobile/quickenloans_lightweight.js";
import lendingtree_PF_mobile_test from "../../testing_suite/mobile/lendingtree_PF.js";



async function handleQAAction(req, res) {

    console.log("API is being triggered", req.query);
    if (req.query.country === "united_states") {
        if (req.query.device_type === "desktop") {
            if (req.query.page_design === "quickenloans_lightweight") {
                //console.log(designUrls.us.desktop.quickenloans_lightweight);
                let data = await quickenloans_lightweight_desktop_test(designUrls.us.desktop.quickenloans_lightweight.URLS);
                data = JSON.stringify(data);
                res.send(data);
            } else if (req.query.page_design === "quickenloans_lendingtree_PF_subline") {
                let data = await quickenloans_lendingtree_PF_subline_desktop_test(designUrls.us.desktop.quickenloans_lendingtree_PF_subline.URLS);
                data = JSON.stringify(data);
                res.send(data);
            } else if (req.query.page_design === "quickenloans_lendingtree_PF_slideshow") {
                let data = await quickenloans_lendingtree_PF_slideshow_desktop_test(designUrls.us.desktop.quickenloans_lendingtree_PF_slideshow.URLS);
                data = JSON.stringify(data);
                res.send(data);
            } else if (req.query.page_design === "quickenloans_lendingtree_PF") {
                let data = await quickenloans_lendingtree_PF_desktop_test(designUrls.us.desktop.quickenloans_lendingtree_PF.URLS);
                data = JSON.stringify(data);
                res.send(data);
            }
        } else if (req.query.device_type === "mobile") {
            if (req.query.page_design === "quickenloans_lightweight") {
                let data = await quickenloans_lightweight_mobile_test(designUrls.us.mobile.quickenloans_lightweight.URLS);
                data = JSON.stringify(data);
                res.send(data);
            }
            else if (req.query.page_design === "quickenloans_lendingtree_PF_subline") {
                let data = await quickenloans_lendingtree_PF_subline_mobile_test(designUrls.us.mobile.quickenloans_lendingtree_PF_subline.URLS);
                data = JSON.stringify(data);
                res.send(data);
            }
            else if (req.query.page_design === "quickenloans_lendingtree_PF_slideshow") {
                let data = await quickenloans_lendingtree_PF_slideshow_mobile_test(designUrls.us.mobile.quickenloans_lendingtree_PF_slideshow.URLS);
                data = JSON.stringify(data);
                res.send(data);
            }
            else if (req.query.page_design === "quickenloans_lendingtree_PF") {
                let data = await quickenloans_lendingtree_PF_mobile_test(designUrls.us.mobile.quickenloans_lendingtree_PF.URLS);
                data = JSON.stringify(data);
                res.send(data);
            }
            else if (req.query.page_design === "lendingtree_PF") {
                let data = await lendingtree_PF_mobile_test(designUrls.us.mobile.lendingtree_PF.URLS);
                data = JSON.stringify(data);
                res.send(data);
            }

        }
    }
}

export default handleQAAction;