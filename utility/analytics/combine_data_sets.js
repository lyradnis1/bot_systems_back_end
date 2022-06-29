function combineSets(thankYouResults) {
    let singlePageAppFlowData = thankYouResults.performanceObserverData.single_page_application_data_flow;
    //
    for (let outerKey in thankYouResults) {
        //If there is a custom dimension match from flow data enter
        if (singlePageAppFlowData[outerKey]) {
            let matchedFormData = singlePageAppFlowData[outerKey];
            let tyResultMatch = thankYouResults[outerKey];

            for (let innerKey in matchedFormData) {
                if (!tyResultMatch[innerKey]) {
                    tyResultMatch[innerKey] = matchedFormData[innerKey];
                }
            }
        }
    }
    //console.log(thankYouResults);
    return thankYouResults;
}
export default combineSets;