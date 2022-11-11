![alt text](https://tfwiki.net/mediawiki/images2/thumb/6/67/BotBotsPromoArt.jpg/540px-BotBotsPromoArt.jpg)

## How To run locally
----------------------------------------------------------------------------------------------------------------
To clone and run this application, you'll need Git and Node.js (which comes with npm) installed on your computer. From your command line:

```
#1. Clone the repository (E.G)
git clone https://dalin123@bitbucket.org/fi-martech/scott.git

#2. Navigate into repo
cd scott

#3. Install dependencies
npm install

#4. Start The server with refreshing when editing/saving
npm run dev

OR

#4. Start Server with no automatic refreshing when editing/saving
npm start

```
# Disclaimer: If you're having trouble cloning/pushing you'll need an app password or SSH key. Alternatively you can use sourcetree.

## How to deploy in Google Cloud Run (For Solo Developer)##
----------------------------------------------------------------------------------------------------------------
If you already have SCOTT downloaded in Cloud shell you can skip steps 1-3.

```
# 1. Navigate to project (Fishbot-Brad) in Google Cloud Run website.

# 2. Activate Cloud Shell (In Top right, Click on 2nd to last on the left icon.)

# 3. Clone SCOTT into virtual desktop on cloud shell. (Will need to use APP password, see tutorials for more info)

# 4. Edit Code as necessary

# 5. Deploy To Cloud using cloud command (gcloud run deploy)

```
# Disclaimer: This approach only works for a solo developer. Other developers will not be able to view/edit your code in the cloud shell from another computer.

## Bitbucket CI/CD possible solution fix to concurrent dev problem.
-----------------------------------------------------------------------------------------------------------------------------------------------------
1. In bitbucket.pipelines yaml file, add "Cloud Deploy Command" (TODO: Add command) that triggers when on master branch.
2. Create bitbucket branches architecture so no one can push directly from local branch to remote master branch
3. Do all editing in local branches, push to master only when all dev work is complete.


## SCOTT Key Features
----------------------------------------------------------------------------------------------------------------
-Async Disposer Pattern: Bots will retry action if bot fails out for some reason. See Cloud Brad -> utility -> async_disposer_methods.js for code

-Global Interface: There is a global interface that contains arguments for commonly used functions.  See Cloud Brad -> utility -> global_parameters.js for code

-Domain Swapping: You can specify what domain you would like to use in global parameters with the variable "subdomain"; See Cloud Brad -> utility -> global_paramters.js

-Domain Adding: You can add support for new domains you want to test in domain_swapper.js. Cloud Brad -> utility -> domain_swapper.js

## API Notes
----------------------------------------------------------------------------------------------------------------
-Entry point of server is index.js


## Useful Tutorials: 
----------------------------------------------------------------------------------------------------------------

1. How to deploy a website with Cloud Run https://codelabs.developers.google.com/codelabs/cloud-run-deploy#0 
2. How to configure bitbucket-pipelines.yml https://support.atlassian.com/bitbucket-cloud/docs/configure-bitbucket-pipelinesyml/
3. Node/Express tutorial https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction
4. How to add app password https://support.atlassian.com/bitbucket-cloud/docs/app-passwords/
5. How to deploy to google cloud using commands https://cloud.google.com/sdk/gcloud/reference/run/deploy