#### Project Scott

## Entry Point
# The entry point of the code starts in service.mjs. In service MJS is where we would handle incoming API requests; which would then in turn trigger puppeteer functions.
# We will apply the same concept to firebase


### Utility Folder
## This folder contains functions(aka methods) / inputs.
# The async_disposer_method function is used for prebuilding browser/page contexts with a generalized, repeatable template format.
# The analytics_qa_method function is used for gathering attribtion data in the page/browser context.
# The Browser Retry method is in testing. If we use bluebird implementation then we dont need this
# The global parameters file is used to control timeouts, config, etc
# The inputs file is used to store all known input selectors for ease of use
# The page design urls file stores all trafficked urls according to page design and device type

### Testing Suite Folder
## This folder contains the code that by proxy emulates an end user behavior as segmented by device and page design. 
# We have three seperate categories of Quickenloans due to difference of CSS selectors across device
# Only Desktop
# Only Mobile
# Hybrid (Made for both)


### Assets folder
## Currently not used
# But future use can be used to store dsiclsoures by country/ etc


## Tips and Tricks
# Keep slow mo at minimum 100 ms else mass failures occur
# change headless mode to false in global params to see the end user behavior irl
# console.logs in the middle of page flow will increase memory usage duriing. Consider removing console.logs to decrease execution time

## File structure naming convention
# All files are lower cased. 
# All Files use a "_" in place of white/empty space.
# No camelCase usage for file names