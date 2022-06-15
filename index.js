import express from "express";
import body_parser from "body-parser";
import compression from "compression";
import cookie_parser from "cookie-parser";
import cors from "cors";
import errorhandler from "errorhandler";
import timeout from "connect-timeout";
import morgan from "morgan";
import helmet from "helmet";

import design_urls from "./utility/page_design_urls.js";
import handleQAAction from "./utility/APIutility/qa_get_request.js";
//import desktop_eqr_test from "./testing_suite/desktop/quickenloans_lightweight";


const app = express();
app.use(morgan("common"));
//app.use(helmet());
//enable cors: enable cross-origin resource sharing
app.use(cors());
//body parser: Parse HTTP request body for processing
// parse application/x-www-form-urlencoded
//app.use(body_parser.urlencoded({ extended: false }));
// parse application/json
//app.use(body_parser.json());
//Compression: compresses http resoponses for faster execution
app.use(compression());
// cookie-parser: parses cookies and pupulates req.cookies
app.use(cookie_parser());
//error handler: development error handling/debugging
app.use(errorhandler());
//timeout for timeout requests for http processing: use while SCOTT is running
//app.use(timeout("30s"));

//Example url http://localhost:8080/?page_design=quickenloans&devicetype=desktop
//var data = await desktop_eqr_test(design_urls.US.Desktop.quickenloans_lightWeight.URLS);
//Must be in string form
//res.end(JSON.stringify(data));
app.get('/qa/', handleQAAction);


const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
    console.log(`helloworld: listening on port ${port}`);
});