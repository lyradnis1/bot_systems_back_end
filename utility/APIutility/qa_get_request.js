import designUrls from "../page_design_urls.js";

import quickenloans_lendingtree_pf_slideshow_desktop_test from "../../testing_suite/desktop/quickenloans_lendingtree_PF_slideshow.js";
import quickenloans_lendingtree_pf_subline_desktop_test from "../../testing_suite/desktop/quickenloans_lendingtree_PF_subline.js";
import quickenloans_lendingtree_pf_desktop_test from "../../testing_suite/desktop/quickenloans_lendingtree_PF.js";
import quickenloans_lightweight_desktop_test from "../../testing_suite/desktop/quickenloans_lightweight.js";

import quickenloans_lendingtree_pf_slideshow_mobile_test from "../../testing_suite/mobile/quickenloans_lendingtree_PF_slideshow.js";
import quickenloans_lendingtree_pf_subline_mobile_test from "../../testing_suite/mobile/quickenloans_lendingtree_PF_subline.js";
import quickenloans_lendingtree_pf_mobile_test from "../../testing_suite/mobile/quickenloans_lendingtree_PF.js";
import quickenloans_lightweight_mobile_test from "../../testing_suite/mobile/quickenloans_lightweight.js";
import lendingtree_pf_mobile_test from "../../testing_suite/mobile/lendingtree_PF.js";



async function handleQAAction(req, res) {

    console.log("API is being triggered", req.query);

    if (req.query.country === "united_states") {
        console.log("entered united states block");
        if (req.query.device_type === "desktop") {
            console.log("entered desktop block");
            if (req.query.page_design === "quickenloans_lightweight") {
                let data = await quickenloans_lightweight_desktop_test(designUrls.us.desktop.quickenloans_lightweight.URLS);
                data = JSON.stringify(data);
                res.send(data);
            } else if (req.query.page_design === "quickenloans_lendingtree_pf_subline") {
                let data = await quickenloans_lendingtree_pf_subline_desktop_test(designUrls.us.desktop.quickenloans_lendingtree_pf_subline.URLS);
                data = JSON.stringify(data);
                res.send(data);
            } else if (req.query.page_design === "quickenloans_lendingtree_pf_slideshow") {
                let data = await quickenloans_lendingtree_pf_slideshow_desktop_test(designUrls.us.desktop.quickenloans_lendingtree_pf_slideshow.URLS);
                data = JSON.stringify(data);
                res.send(data);
            } else if (req.query.page_design === "quickenloans_lendingtree_pf") {
                let data = await quickenloans_lendingtree_pf_desktop_test(designUrls.us.desktop.quickenloans_lendingtree_pf.URLS);
                data = JSON.stringify(data);
                res.send(data);
            }
        } else if (req.query.device_type === "mobile") {
            if (req.query.page_design === "quickenloans_lightweight") {
                let data = await quickenloans_lightweight_mobile_test(designUrls.us.mobile.quickenloans_lightweight.URLS);
                data = JSON.stringify(data);
                res.send(data);
            }
            else if (req.query.page_design === "quickenloans_lendingtree_pf_subline") {
                let data = await quickenloans_lendingtree_pf_subline_mobile_test(designUrls.us.mobile.quickenloans_lendingtree_pf_subline.URLS);
                data = JSON.stringify(data);
                res.send(data);
            }
            else if (req.query.page_design === "quickenloans_lendingtree_pf_slideshow") {
                let data = await quickenloans_lendingtree_pf_slideshow_mobile_test(designUrls.us.mobile.quickenloans_lendingtree_pf_slideshow.URLS);
                data = JSON.stringify(data);
                res.send(data);
            }
            else if (req.query.page_design === "quickenloans_lendingtree_pf") {
                let data = await quickenloans_lendingtree_pf_mobile_test(designUrls.us.mobile.quickenloans_lendingtree_pf.URLS);
                data = JSON.stringify(data);
                res.send(data);
            }
            else if (req.query.page_design === "lendingtree_pf") {
                let data = await lendingtree_pf_mobile_test(designUrls.us.mobile.lendingtree_pf.URLS);
                data = JSON.stringify(data);
                res.send(data);
            }

        }
    }

}

export default handleQAAction;