var dummyData = [
    "https://www.google-analytics.com/collect?v=1&_v=j96&a=1882119529&t=pageview&_s=2&dl=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&dp=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform-2&ul=en-us&de=UTF-8&dt=Special%20Offer%20from%20Fisher%20Investments&sd=24-bit&sr=1920x1080&vp=1903x1080&je=0&_u=yCCAiAABB~&jid=&gjid=&cid=914265066.1656452401&uid=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&tid=UA-65079555-3&_gid=1975439321.1656452401&cd53=914265066.1656452401&cd6=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd1=LC&cd2=XXXX&cd3=PLACEMENTXLCXXXX&cd4=PLACEMENTX&cd5=PLA&cd7=United%20States&cd8=www.fisherinvestments.com&cd9=Special%20Offer%20from%20Fisher%20Investments&cd10=Landing%20Page&cd11=Form%202&cd12=LendingTree&cd13=1&cd15=DGRI&cd16=The%20Definitive%20Guide%20to%20Retirement%20Income&cd17=Campaign%20Prospect&cd18=Undefined&cd19=Undefined&cd23=Undefined&cd25=internet&cd27=PCGM&cd28=US&cd30=%7C%7Cqa%7C%7C&cd31=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd32=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&cd34=1&cm2=1&cd42=FishBot-BRAD&cd48=Undefined&cd50=CEME&cd51=N&cd52=TX&cd57=2022-06-28T21%3A40%3A24.866Z&cd58=12393b93-2bf7-ec11-a2ee-0050569f1385&z=1139645499",
    "https://www.google-analytics.com/collect?v=1&_v=j96&a=1882119529&t=pageview&_s=2&dl=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&dp=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform-2&ul=en-us&de=UTF-8&dt=Special%20Offer%20from%20Fisher%20Investments&sd=24-bit&sr=1920x1080&vp=1903x1080&je=0&_u=yCCAiAABB~&jid=&gjid=&cid=914265066.1656452401&uid=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&tid=UA-44160600-5&_gid=1975439321.1656452401&cd53=914265066.1656452401&cd6=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd1=LC&cd2=XXXX&cd3=PLACEMENTXLCXXXX&cd4=PLACEMENTX&cd5=PLA&cd7=United%20States&cd8=www.fisherinvestments.com&cd9=Special%20Offer%20from%20Fisher%20Investments&cd10=Landing%20Page&cd11=Form%202&cd12=LendingTree&cd13=1&cd15=DGRI&cd16=The%20Definitive%20Guide%20to%20Retirement%20Income&cd17=Campaign%20Prospect&cd18=Undefined&cd19=Undefined&cd23=Undefined&cd25=internet&cd27=PCGM&cd28=US&cd30=%7C%7Cqa%7C%7C&cd31=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd32=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&cd34=1&cm2=1&cd42=FishBot-BRAD&cd48=Undefined&cd50=CEME&cd51=N&cd52=TX&cd57=2022-06-28T21%3A40%3A24.866Z&cd58=12393b93-2bf7-ec11-a2ee-0050569f1385&z=688166862",
    "https://www.google-analytics.com/collect?v=1&_v=j96&a=1882119529&t=pageview&_s=2&dl=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&dp=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform-2&ul=en-us&de=UTF-8&dt=Special%20Offer%20from%20Fisher%20Investments&sd=24-bit&sr=1920x1080&vp=1903x1080&je=0&_u=yCCAiAABB~&jid=&gjid=&cid=914265066.1656452401&uid=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&tid=UA-44160600-1&_gid=1975439321.1656452401&cd53=914265066.1656452401&cd6=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd1=LC&cd2=XXXX&cd3=PLACEMENTXLCXXXX&cd4=PLACEMENTX&cd5=PLA&cd7=United%20States&cd8=www.fisherinvestments.com&cd9=Special%20Offer%20from%20Fisher%20Investments&cd10=Landing%20Page&cd11=Form%202&cd12=LendingTree&cd13=1&cd15=DGRI&cd16=The%20Definitive%20Guide%20to%20Retirement%20Income&cd17=Campaign%20Prospect&cd18=Undefined&cd19=Undefined&cd23=Undefined&cd25=internet&cd27=PCGM&cd28=US&cd30=%7C%7Cqa%7C%7C&cd31=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd32=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&cd34=1&cm2=1&cd42=FishBot-BRAD&cd48=Undefined&cd50=CEME&cd51=N&cd52=TX&cd57=2022-06-28T21%3A40%3A24.866Z&cd58=12393b93-2bf7-ec11-a2ee-0050569f1385&z=880256398",
    "https://www.google-analytics.com/collect?v=1&_v=j96&a=1882119529&t=pageview&_s=2&dl=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&dp=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform-2&ul=en-us&de=UTF-8&dt=Special%20Offer%20from%20Fisher%20Investments&sd=24-bit&sr=1920x1080&vp=1903x1080&je=0&_u=yCCAiAABB~&jid=&gjid=&cid=914265066.1656452401&uid=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&tid=UA-6649450-1&_gid=1975439321.1656452401&cd53=914265066.1656452401&cd6=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd1=LC&cd2=XXXX&cd3=PLACEMENTXLCXXXX&cd4=PLACEMENTX&cd5=PLA&cd7=United%20States&cd8=www.fisherinvestments.com&cd9=Special%20Offer%20from%20Fisher%20Investments&cd10=Landing%20Page&cd11=Form%202&cd12=LendingTree&cd13=1&cd15=DGRI&cd16=The%20Definitive%20Guide%20to%20Retirement%20Income&cd17=Campaign%20Prospect&cd18=Undefined&cd19=Undefined&cd23=Undefined&cd25=internet&cd27=PCGM&cd28=US&cd30=%7C%7Cqa%7C%7C&cd31=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd32=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&cd34=1&cm2=1&cd42=FishBot-BRAD&cd48=Undefined&cd50=CEME&cd51=N&cd52=TX&cd57=2022-06-28T21%3A40%3A24.866Z&cd58=12393b93-2bf7-ec11-a2ee-0050569f1385&z=1979624186",
    "https://www.google-analytics.com/collect?v=1&_v=j96&a=1882119529&t=pageview&_s=3&dl=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&dp=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform-3&ul=en-us&de=UTF-8&dt=Special%20Offer%20from%20Fisher%20Investments&sd=24-bit&sr=1920x1080&vp=1903x1080&je=0&_u=yCCAiAABB~&jid=&gjid=&cid=914265066.1656452401&uid=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&tid=UA-65079555-3&_gid=1975439321.1656452401&cd53=914265066.1656452401&cd6=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd1=LC&cd2=XXXX&cd3=PLACEMENTXLCXXXX&cd4=PLACEMENTX&cd5=PLA&cd7=United%20States&cd8=www.fisherinvestments.com&cd9=Special%20Offer%20from%20Fisher%20Investments&cd10=Landing%20Page&cd11=Form%203&cd12=LendingTree&cd13=1&cd15=DGRI&cd16=The%20Definitive%20Guide%20to%20Retirement%20Income&cd17=Campaign%20Prospect&cd18=Undefined&cd19=Undefined&cd23=Undefined&cd25=internet&cd27=PCGM&cd28=US&cd30=%7C%7Cqa%7C%7C&cd31=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd32=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&cd34=1&cm2=1&cd42=FishBot-BRAD&cd48=Undefined&cd50=CEME&cd51=N&cd52=TX&cd57=2022-06-28T21%3A40%3A31.357Z&cd58=12393b93-2bf7-ec11-a2ee-0050569f1385&z=1372758691",
    "https://www.google-analytics.com/collect?v=1&_v=j96&a=1882119529&t=pageview&_s=3&dl=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&dp=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform-3&ul=en-us&de=UTF-8&dt=Special%20Offer%20from%20Fisher%20Investments&sd=24-bit&sr=1920x1080&vp=1903x1080&je=0&_u=yCCAiAABB~&jid=&gjid=&cid=914265066.1656452401&uid=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&tid=UA-44160600-5&_gid=1975439321.1656452401&cd53=914265066.1656452401&cd6=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd1=LC&cd2=XXXX&cd3=PLACEMENTXLCXXXX&cd4=PLACEMENTX&cd5=PLA&cd7=United%20States&cd8=www.fisherinvestments.com&cd9=Special%20Offer%20from%20Fisher%20Investments&cd10=Landing%20Page&cd11=Form%203&cd12=LendingTree&cd13=1&cd15=DGRI&cd16=The%20Definitive%20Guide%20to%20Retirement%20Income&cd17=Campaign%20Prospect&cd18=Undefined&cd19=Undefined&cd23=Undefined&cd25=internet&cd27=PCGM&cd28=US&cd30=%7C%7Cqa%7C%7C&cd31=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd32=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&cd34=1&cm2=1&cd42=FishBot-BRAD&cd48=Undefined&cd50=CEME&cd51=N&cd52=TX&cd57=2022-06-28T21%3A40%3A31.357Z&cd58=12393b93-2bf7-ec11-a2ee-0050569f1385&z=433054426",
    "https://www.google-analytics.com/collect?v=1&_v=j96&a=1882119529&t=pageview&_s=3&dl=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&dp=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform-3&ul=en-us&de=UTF-8&dt=Special%20Offer%20from%20Fisher%20Investments&sd=24-bit&sr=1920x1080&vp=1903x1080&je=0&_u=yCCAiAABB~&jid=&gjid=&cid=914265066.1656452401&uid=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&tid=UA-44160600-1&_gid=1975439321.1656452401&cd53=914265066.1656452401&cd6=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd1=LC&cd2=XXXX&cd3=PLACEMENTXLCXXXX&cd4=PLACEMENTX&cd5=PLA&cd7=United%20States&cd8=www.fisherinvestments.com&cd9=Special%20Offer%20from%20Fisher%20Investments&cd10=Landing%20Page&cd11=Form%203&cd12=LendingTree&cd13=1&cd15=DGRI&cd16=The%20Definitive%20Guide%20to%20Retirement%20Income&cd17=Campaign%20Prospect&cd18=Undefined&cd19=Undefined&cd23=Undefined&cd25=internet&cd27=PCGM&cd28=US&cd30=%7C%7Cqa%7C%7C&cd31=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd32=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&cd34=1&cm2=1&cd42=FishBot-BRAD&cd48=Undefined&cd50=CEME&cd51=N&cd52=TX&cd57=2022-06-28T21%3A40%3A31.357Z&cd58=12393b93-2bf7-ec11-a2ee-0050569f1385&z=674935501",
    "https://www.google-analytics.com/collect?v=1&_v=j96&a=1882119529&t=pageview&_s=3&dl=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&dp=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform-3&ul=en-us&de=UTF-8&dt=Special%20Offer%20from%20Fisher%20Investments&sd=24-bit&sr=1920x1080&vp=1903x1080&je=0&_u=yCCAiAABB~&jid=&gjid=&cid=914265066.1656452401&uid=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&tid=UA-6649450-1&_gid=1975439321.1656452401&cd53=914265066.1656452401&cd6=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd1=LC&cd2=XXXX&cd3=PLACEMENTXLCXXXX&cd4=PLACEMENTX&cd5=PLA&cd7=United%20States&cd8=www.fisherinvestments.com&cd9=Special%20Offer%20from%20Fisher%20Investments&cd10=Landing%20Page&cd11=Form%203&cd12=LendingTree&cd13=1&cd15=DGRI&cd16=The%20Definitive%20Guide%20to%20Retirement%20Income&cd17=Campaign%20Prospect&cd18=Undefined&cd19=Undefined&cd23=Undefined&cd25=internet&cd27=PCGM&cd28=US&cd30=%7C%7Cqa%7C%7C&cd31=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd32=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&cd34=1&cm2=1&cd42=FishBot-BRAD&cd48=Undefined&cd50=CEME&cd51=N&cd52=TX&cd57=2022-06-28T21%3A40%3A31.357Z&cd58=12393b93-2bf7-ec11-a2ee-0050569f1385&z=585324549",
    "https://www.google-analytics.com/collect?v=1&_v=j96&a=1882119529&t=pageview&_s=4&dl=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&dp=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform-4&ul=en-us&de=UTF-8&dt=Special%20Offer%20from%20Fisher%20Investments&sd=24-bit&sr=1920x1080&vp=1903x1080&je=0&_u=yCCAiAABB~&jid=&gjid=&cid=914265066.1656452401&uid=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&tid=UA-65079555-3&_gid=1975439321.1656452401&cd53=914265066.1656452401&cd6=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd1=LC&cd2=XXXX&cd3=PLACEMENTXLCXXXX&cd4=PLACEMENTX&cd5=PLA&cd7=United%20States&cd8=www.fisherinvestments.com&cd9=Special%20Offer%20from%20Fisher%20Investments&cd10=Landing%20Page&cd11=Form%204&cd12=LendingTree&cd13=1&cd15=DGRI&cd16=The%20Definitive%20Guide%20to%20Retirement%20Income&cd17=Campaign%20Prospect&cd18=Undefined&cd19=Undefined&cd23=Undefined&cd25=internet&cd27=PCGM&cd28=US&cd30=%7C%7Cqa%7C%7C&cd31=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd32=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&cd34=1&cm2=1&cd42=FishBot-BRAD&cd48=Undefined&cd50=CEME&cd51=N&cd52=TX&cd57=2022-06-28T21%3A40%3A37.768Z&cd58=12393b93-2bf7-ec11-a2ee-0050569f1385&z=1006736138",
    "https://www.google-analytics.com/collect?v=1&_v=j96&a=1882119529&t=pageview&_s=4&dl=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&dp=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform-4&ul=en-us&de=UTF-8&dt=Special%20Offer%20from%20Fisher%20Investments&sd=24-bit&sr=1920x1080&vp=1903x1080&je=0&_u=yCCAiAABB~&jid=&gjid=&cid=914265066.1656452401&uid=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&tid=UA-44160600-5&_gid=1975439321.1656452401&cd53=914265066.1656452401&cd6=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd1=LC&cd2=XXXX&cd3=PLACEMENTXLCXXXX&cd4=PLACEMENTX&cd5=PLA&cd7=United%20States&cd8=www.fisherinvestments.com&cd9=Special%20Offer%20from%20Fisher%20Investments&cd10=Landing%20Page&cd11=Form%204&cd12=LendingTree&cd13=1&cd15=DGRI&cd16=The%20Definitive%20Guide%20to%20Retirement%20Income&cd17=Campaign%20Prospect&cd18=Undefined&cd19=Undefined&cd23=Undefined&cd25=internet&cd27=PCGM&cd28=US&cd30=%7C%7Cqa%7C%7C&cd31=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd32=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&cd34=1&cm2=1&cd42=FishBot-BRAD&cd48=Undefined&cd50=CEME&cd51=N&cd52=TX&cd57=2022-06-28T21%3A40%3A37.768Z&cd58=12393b93-2bf7-ec11-a2ee-0050569f1385&z=1463140729",
    "https://www.google-analytics.com/collect?v=1&_v=j96&a=1882119529&t=pageview&_s=4&dl=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&dp=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform-4&ul=en-us&de=UTF-8&dt=Special%20Offer%20from%20Fisher%20Investments&sd=24-bit&sr=1920x1080&vp=1903x1080&je=0&_u=yCCAiAABB~&jid=&gjid=&cid=914265066.1656452401&uid=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&tid=UA-44160600-1&_gid=1975439321.1656452401&cd53=914265066.1656452401&cd6=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd1=LC&cd2=XXXX&cd3=PLACEMENTXLCXXXX&cd4=PLACEMENTX&cd5=PLA&cd7=United%20States&cd8=www.fisherinvestments.com&cd9=Special%20Offer%20from%20Fisher%20Investments&cd10=Landing%20Page&cd11=Form%204&cd12=LendingTree&cd13=1&cd15=DGRI&cd16=The%20Definitive%20Guide%20to%20Retirement%20Income&cd17=Campaign%20Prospect&cd18=Undefined&cd19=Undefined&cd23=Undefined&cd25=internet&cd27=PCGM&cd28=US&cd30=%7C%7Cqa%7C%7C&cd31=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd32=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&cd34=1&cm2=1&cd42=FishBot-BRAD&cd48=Undefined&cd50=CEME&cd51=N&cd52=TX&cd57=2022-06-28T21%3A40%3A37.768Z&cd58=12393b93-2bf7-ec11-a2ee-0050569f1385&z=793969443",
    "https://www.google-analytics.com/collect?v=1&_v=j96&a=1882119529&t=pageview&_s=4&dl=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&dp=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform-4&ul=en-us&de=UTF-8&dt=Special%20Offer%20from%20Fisher%20Investments&sd=24-bit&sr=1920x1080&vp=1903x1080&je=0&_u=yCCAiAABB~&jid=&gjid=&cid=914265066.1656452401&uid=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&tid=UA-6649450-1&_gid=1975439321.1656452401&cd53=914265066.1656452401&cd6=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd1=LC&cd2=XXXX&cd3=PLACEMENTXLCXXXX&cd4=PLACEMENTX&cd5=PLA&cd7=United%20States&cd8=www.fisherinvestments.com&cd9=Special%20Offer%20from%20Fisher%20Investments&cd10=Landing%20Page&cd11=Form%204&cd12=LendingTree&cd13=1&cd15=DGRI&cd16=The%20Definitive%20Guide%20to%20Retirement%20Income&cd17=Campaign%20Prospect&cd18=Undefined&cd19=Undefined&cd23=Undefined&cd25=internet&cd27=PCGM&cd28=US&cd30=%7C%7Cqa%7C%7C&cd31=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd32=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&cd34=1&cm2=1&cd42=FishBot-BRAD&cd48=Undefined&cd50=CEME&cd51=N&cd52=TX&cd57=2022-06-28T21%3A40%3A37.768Z&cd58=12393b93-2bf7-ec11-a2ee-0050569f1385&z=518458282",
    "https://www.google-analytics.com/collect?v=1&_v=j96&a=1882119529&t=pageview&_s=5&dl=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&dp=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform-5&ul=en-us&de=UTF-8&dt=Special%20Offer%20from%20Fisher%20Investments&sd=24-bit&sr=1920x1080&vp=1903x1080&je=0&_u=yCCAiAABB~&jid=&gjid=&cid=914265066.1656452401&uid=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&tid=UA-65079555-3&_gid=1975439321.1656452401&cd53=914265066.1656452401&cd6=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd1=LC&cd2=XXXX&cd3=PLACEMENTXLCXXXX&cd4=PLACEMENTX&cd5=PLA&cd7=United%20States&cd8=www.fisherinvestments.com&cd9=Special%20Offer%20from%20Fisher%20Investments&cd10=Landing%20Page&cd11=Form%205&cd12=LendingTree&cd13=1&cd15=DGRI&cd16=The%20Definitive%20Guide%20to%20Retirement%20Income&cd17=Campaign%20Prospect&cd18=Undefined&cd19=Undefined&cd23=Undefined&cd25=internet&cd27=PCGM&cd28=US&cd30=%7C%7Cqa%7C%7C&cd31=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd32=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&cd34=1&cm2=1&cd42=FishBot-BRAD&cd48=Undefined&cd50=CEME&cd51=N&cd52=TX&cd57=2022-06-28T21%3A40%3A44.146Z&cd58=12393b93-2bf7-ec11-a2ee-0050569f1385&z=892147693",
    "https://www.google-analytics.com/collect?v=1&_v=j96&a=1882119529&t=pageview&_s=5&dl=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&dp=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform-5&ul=en-us&de=UTF-8&dt=Special%20Offer%20from%20Fisher%20Investments&sd=24-bit&sr=1920x1080&vp=1903x1080&je=0&_u=yCCAiAABB~&jid=&gjid=&cid=914265066.1656452401&uid=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&tid=UA-44160600-5&_gid=1975439321.1656452401&cd53=914265066.1656452401&cd6=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd1=LC&cd2=XXXX&cd3=PLACEMENTXLCXXXX&cd4=PLACEMENTX&cd5=PLA&cd7=United%20States&cd8=www.fisherinvestments.com&cd9=Special%20Offer%20from%20Fisher%20Investments&cd10=Landing%20Page&cd11=Form%205&cd12=LendingTree&cd13=1&cd15=DGRI&cd16=The%20Definitive%20Guide%20to%20Retirement%20Income&cd17=Campaign%20Prospect&cd18=Undefined&cd19=Undefined&cd23=Undefined&cd25=internet&cd27=PCGM&cd28=US&cd30=%7C%7Cqa%7C%7C&cd31=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd32=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&cd34=1&cm2=1&cd42=FishBot-BRAD&cd48=Undefined&cd50=CEME&cd51=N&cd52=TX&cd57=2022-06-28T21%3A40%3A44.146Z&cd58=12393b93-2bf7-ec11-a2ee-0050569f1385&z=1361009206",
    "https://www.google-analytics.com/collect?v=1&_v=j96&a=1882119529&t=pageview&_s=5&dl=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&dp=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform-5&ul=en-us&de=UTF-8&dt=Special%20Offer%20from%20Fisher%20Investments&sd=24-bit&sr=1920x1080&vp=1903x1080&je=0&_u=yCCAiAABB~&jid=&gjid=&cid=914265066.1656452401&uid=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&tid=UA-44160600-1&_gid=1975439321.1656452401&cd53=914265066.1656452401&cd6=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd1=LC&cd2=XXXX&cd3=PLACEMENTXLCXXXX&cd4=PLACEMENTX&cd5=PLA&cd7=United%20States&cd8=www.fisherinvestments.com&cd9=Special%20Offer%20from%20Fisher%20Investments&cd10=Landing%20Page&cd11=Form%205&cd12=LendingTree&cd13=1&cd15=DGRI&cd16=The%20Definitive%20Guide%20to%20Retirement%20Income&cd17=Campaign%20Prospect&cd18=Undefined&cd19=Undefined&cd23=Undefined&cd25=internet&cd27=PCGM&cd28=US&cd30=%7C%7Cqa%7C%7C&cd31=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd32=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&cd34=1&cm2=1&cd42=FishBot-BRAD&cd48=Undefined&cd50=CEME&cd51=N&cd52=TX&cd57=2022-06-28T21%3A40%3A44.146Z&cd58=12393b93-2bf7-ec11-a2ee-0050569f1385&z=826373815",
    "https://www.google-analytics.com/collect?v=1&_v=j96&a=1882119529&t=pageview&_s=5&dl=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&dp=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform-5&ul=en-us&de=UTF-8&dt=Special%20Offer%20from%20Fisher%20Investments&sd=24-bit&sr=1920x1080&vp=1903x1080&je=0&_u=yCCAiAABB~&jid=&gjid=&cid=914265066.1656452401&uid=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&tid=UA-6649450-1&_gid=1975439321.1656452401&cd53=914265066.1656452401&cd6=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd1=LC&cd2=XXXX&cd3=PLACEMENTXLCXXXX&cd4=PLACEMENTX&cd5=PLA&cd7=United%20States&cd8=www.fisherinvestments.com&cd9=Special%20Offer%20from%20Fisher%20Investments&cd10=Landing%20Page&cd11=Form%205&cd12=LendingTree&cd13=1&cd15=DGRI&cd16=The%20Definitive%20Guide%20to%20Retirement%20Income&cd17=Campaign%20Prospect&cd18=Undefined&cd19=Undefined&cd23=Undefined&cd25=internet&cd27=PCGM&cd28=US&cd30=%7C%7Cqa%7C%7C&cd31=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd32=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&cd34=1&cm2=1&cd42=FishBot-BRAD&cd48=Undefined&cd50=CEME&cd51=N&cd52=TX&cd57=2022-06-28T21%3A40%3A44.146Z&cd58=12393b93-2bf7-ec11-a2ee-0050569f1385&z=703011670",
    "https://www.google-analytics.com/collect?v=1&_v=j96&a=1882119529&t=pageview&_s=6&dl=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&dp=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform-6&ul=en-us&de=UTF-8&dt=Special%20Offer%20from%20Fisher%20Investments&sd=24-bit&sr=1920x1080&vp=1903x1080&je=0&_u=yCCAiAABB~&jid=&gjid=&cid=914265066.1656452401&uid=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&tid=UA-65079555-3&_gid=1975439321.1656452401&cd53=914265066.1656452401&cd6=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd1=LC&cd2=XXXX&cd3=PLACEMENTXLCXXXX&cd4=PLACEMENTX&cd5=PLA&cd7=United%20States&cd8=www.fisherinvestments.com&cd9=Special%20Offer%20from%20Fisher%20Investments&cd10=Landing%20Page&cd11=Form%206&cd12=LendingTree&cd13=1&cd15=DGRI&cd16=The%20Definitive%20Guide%20to%20Retirement%20Income&cd17=Campaign%20Prospect&cd18=Undefined&cd19=Undefined&cd23=Undefined&cd25=internet&cd27=PCGM&cd28=US&cd30=%7C%7Cqa%7C%7C&cd31=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd32=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&cd34=1&cm2=1&cd42=FishBot-BRAD&cd48=Undefined&cd50=CEME&cd51=N&cd52=TX&cd57=2022-06-28T21%3A40%3A50.478Z&cd58=12393b93-2bf7-ec11-a2ee-0050569f1385&z=1020702761",
    "https://www.google-analytics.com/collect?v=1&_v=j96&a=1882119529&t=pageview&_s=6&dl=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&dp=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform-6&ul=en-us&de=UTF-8&dt=Special%20Offer%20from%20Fisher%20Investments&sd=24-bit&sr=1920x1080&vp=1903x1080&je=0&_u=yCCAiAABB~&jid=&gjid=&cid=914265066.1656452401&uid=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&tid=UA-44160600-5&_gid=1975439321.1656452401&cd53=914265066.1656452401&cd6=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd1=LC&cd2=XXXX&cd3=PLACEMENTXLCXXXX&cd4=PLACEMENTX&cd5=PLA&cd7=United%20States&cd8=www.fisherinvestments.com&cd9=Special%20Offer%20from%20Fisher%20Investments&cd10=Landing%20Page&cd11=Form%206&cd12=LendingTree&cd13=1&cd15=DGRI&cd16=The%20Definitive%20Guide%20to%20Retirement%20Income&cd17=Campaign%20Prospect&cd18=Undefined&cd19=Undefined&cd23=Undefined&cd25=internet&cd27=PCGM&cd28=US&cd30=%7C%7Cqa%7C%7C&cd31=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd32=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&cd34=1&cm2=1&cd42=FishBot-BRAD&cd48=Undefined&cd50=CEME&cd51=N&cd52=TX&cd57=2022-06-28T21%3A40%3A50.478Z&cd58=12393b93-2bf7-ec11-a2ee-0050569f1385&z=268088025",
    "https://www.google-analytics.com/collect?v=1&_v=j96&a=1882119529&t=pageview&_s=6&dl=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&dp=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform-6&ul=en-us&de=UTF-8&dt=Special%20Offer%20from%20Fisher%20Investments&sd=24-bit&sr=1920x1080&vp=1903x1080&je=0&_u=yCCAiAABB~&jid=&gjid=&cid=914265066.1656452401&uid=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&tid=UA-44160600-1&_gid=1975439321.1656452401&cd53=914265066.1656452401&cd6=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd1=LC&cd2=XXXX&cd3=PLACEMENTXLCXXXX&cd4=PLACEMENTX&cd5=PLA&cd7=United%20States&cd8=www.fisherinvestments.com&cd9=Special%20Offer%20from%20Fisher%20Investments&cd10=Landing%20Page&cd11=Form%206&cd12=LendingTree&cd13=1&cd15=DGRI&cd16=The%20Definitive%20Guide%20to%20Retirement%20Income&cd17=Campaign%20Prospect&cd18=Undefined&cd19=Undefined&cd23=Undefined&cd25=internet&cd27=PCGM&cd28=US&cd30=%7C%7Cqa%7C%7C&cd31=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd32=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&cd34=1&cm2=1&cd42=FishBot-BRAD&cd48=Undefined&cd50=CEME&cd51=N&cd52=TX&cd57=2022-06-28T21%3A40%3A50.478Z&cd58=12393b93-2bf7-ec11-a2ee-0050569f1385&z=49776670",
    "https://www.google-analytics.com/collect?v=1&_v=j96&a=1882119529&t=pageview&_s=6&dl=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&dp=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform-6&ul=en-us&de=UTF-8&dt=Special%20Offer%20from%20Fisher%20Investments&sd=24-bit&sr=1920x1080&vp=1903x1080&je=0&_u=yCCAiAABB~&jid=&gjid=&cid=914265066.1656452401&uid=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&tid=UA-6649450-1&_gid=1975439321.1656452401&cd53=914265066.1656452401&cd6=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd1=LC&cd2=XXXX&cd3=PLACEMENTXLCXXXX&cd4=PLACEMENTX&cd5=PLA&cd7=United%20States&cd8=www.fisherinvestments.com&cd9=Special%20Offer%20from%20Fisher%20Investments&cd10=Landing%20Page&cd11=Form%206&cd12=LendingTree&cd13=1&cd15=DGRI&cd16=The%20Definitive%20Guide%20to%20Retirement%20Income&cd17=Campaign%20Prospect&cd18=Undefined&cd19=Undefined&cd23=Undefined&cd25=internet&cd27=PCGM&cd28=US&cd30=%7C%7Cqa%7C%7C&cd31=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd32=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&cd34=1&cm2=1&cd42=FishBot-BRAD&cd48=Undefined&cd50=CEME&cd51=N&cd52=TX&cd57=2022-06-28T21%3A40%3A50.478Z&cd58=12393b93-2bf7-ec11-a2ee-0050569f1385&z=385989626",
    "https://www.google-analytics.com/collect?v=1&_v=j96&a=1882119529&t=pageview&_s=7&dl=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&dp=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform-7&ul=en-us&de=UTF-8&dt=Special%20Offer%20from%20Fisher%20Investments&sd=24-bit&sr=1920x1080&vp=1903x1080&je=0&_u=yCCAiAABB~&jid=&gjid=&cid=914265066.1656452401&uid=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&tid=UA-65079555-3&_gid=1975439321.1656452401&cd53=914265066.1656452401&cd6=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd1=LC&cd2=XXXX&cd3=PLACEMENTXLCXXXX&cd4=PLACEMENTX&cd5=PLA&cd7=United%20States&cd8=www.fisherinvestments.com&cd9=Special%20Offer%20from%20Fisher%20Investments&cd10=Landing%20Page&cd11=Form%207&cd12=LendingTree&cd13=1&cd15=DGRI&cd16=The%20Definitive%20Guide%20to%20Retirement%20Income&cd17=Campaign%20Prospect&cd18=Undefined&cd19=Undefined&cd23=Undefined&cd25=internet&cd27=PCGM&cd28=US&cd30=%7C%7Cqa%7C%7C&cd31=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd32=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&cd34=1&cm2=1&cd42=FishBot-BRAD&cd48=Undefined&cd50=CEME&cd51=N&cd52=TX&cd57=2022-06-28T21%3A40%3A56.869Z&cd58=12393b93-2bf7-ec11-a2ee-0050569f1385&z=1407806589",
    "https://www.google-analytics.com/collect?v=1&_v=j96&a=1882119529&t=pageview&_s=7&dl=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&dp=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform-7&ul=en-us&de=UTF-8&dt=Special%20Offer%20from%20Fisher%20Investments&sd=24-bit&sr=1920x1080&vp=1903x1080&je=0&_u=yCCAiAABB~&jid=&gjid=&cid=914265066.1656452401&uid=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&tid=UA-44160600-5&_gid=1975439321.1656452401&cd53=914265066.1656452401&cd6=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd1=LC&cd2=XXXX&cd3=PLACEMENTXLCXXXX&cd4=PLACEMENTX&cd5=PLA&cd7=United%20States&cd8=www.fisherinvestments.com&cd9=Special%20Offer%20from%20Fisher%20Investments&cd10=Landing%20Page&cd11=Form%207&cd12=LendingTree&cd13=1&cd15=DGRI&cd16=The%20Definitive%20Guide%20to%20Retirement%20Income&cd17=Campaign%20Prospect&cd18=Undefined&cd19=Undefined&cd23=Undefined&cd25=internet&cd27=PCGM&cd28=US&cd30=%7C%7Cqa%7C%7C&cd31=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd32=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&cd34=1&cm2=1&cd42=FishBot-BRAD&cd48=Undefined&cd50=CEME&cd51=N&cd52=TX&cd57=2022-06-28T21%3A40%3A56.869Z&cd58=12393b93-2bf7-ec11-a2ee-0050569f1385&z=1978574613",
    "https://www.google-analytics.com/collect?v=1&_v=j96&a=1882119529&t=pageview&_s=7&dl=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&dp=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform-7&ul=en-us&de=UTF-8&dt=Special%20Offer%20from%20Fisher%20Investments&sd=24-bit&sr=1920x1080&vp=1903x1080&je=0&_u=yCCAiAABB~&jid=&gjid=&cid=914265066.1656452401&uid=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&tid=UA-44160600-1&_gid=1975439321.1656452401&cd53=914265066.1656452401&cd6=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd1=LC&cd2=XXXX&cd3=PLACEMENTXLCXXXX&cd4=PLACEMENTX&cd5=PLA&cd7=United%20States&cd8=www.fisherinvestments.com&cd9=Special%20Offer%20from%20Fisher%20Investments&cd10=Landing%20Page&cd11=Form%207&cd12=LendingTree&cd13=1&cd15=DGRI&cd16=The%20Definitive%20Guide%20to%20Retirement%20Income&cd17=Campaign%20Prospect&cd18=Undefined&cd19=Undefined&cd23=Undefined&cd25=internet&cd27=PCGM&cd28=US&cd30=%7C%7Cqa%7C%7C&cd31=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd32=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&cd34=1&cm2=1&cd42=FishBot-BRAD&cd48=Undefined&cd50=CEME&cd51=N&cd52=TX&cd57=2022-06-28T21%3A40%3A56.869Z&cd58=12393b93-2bf7-ec11-a2ee-0050569f1385&z=1155147288",
    "https://www.google-analytics.com/collect?v=1&_v=j96&a=1882119529&t=pageview&_s=7&dl=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&dp=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform-7&ul=en-us&de=UTF-8&dt=Special%20Offer%20from%20Fisher%20Investments&sd=24-bit&sr=1920x1080&vp=1903x1080&je=0&_u=yCCAiAABB~&jid=&gjid=&cid=914265066.1656452401&uid=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&tid=UA-6649450-1&_gid=1975439321.1656452401&cd53=914265066.1656452401&cd6=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd1=LC&cd2=XXXX&cd3=PLACEMENTXLCXXXX&cd4=PLACEMENTX&cd5=PLA&cd7=United%20States&cd8=www.fisherinvestments.com&cd9=Special%20Offer%20from%20Fisher%20Investments&cd10=Landing%20Page&cd11=Form%207&cd12=LendingTree&cd13=1&cd15=DGRI&cd16=The%20Definitive%20Guide%20to%20Retirement%20Income&cd17=Campaign%20Prospect&cd18=Undefined&cd19=Undefined&cd23=Undefined&cd25=internet&cd27=PCGM&cd28=US&cd30=%7C%7Cqa%7C%7C&cd31=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd32=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&cd34=1&cm2=1&cd42=FishBot-BRAD&cd48=Undefined&cd50=CEME&cd51=N&cd52=TX&cd57=2022-06-28T21%3A40%3A56.869Z&cd58=12393b93-2bf7-ec11-a2ee-0050569f1385&z=925900910",
    "https://www.google-analytics.com/collect?v=1&_v=j96&a=1882119529&t=pageview&_s=8&dl=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&dp=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform-8&ul=en-us&de=UTF-8&dt=Special%20Offer%20from%20Fisher%20Investments&sd=24-bit&sr=1920x1080&vp=1903x1080&je=0&_u=yCCAiAABB~&jid=&gjid=&cid=914265066.1656452401&uid=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&tid=UA-65079555-3&_gid=1975439321.1656452401&cd53=914265066.1656452401&cd6=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd1=LC&cd2=XXXX&cd3=PLACEMENTXLCXXXX&cd4=PLACEMENTX&cd5=PLA&cd7=United%20States&cd8=www.fisherinvestments.com&cd9=Special%20Offer%20from%20Fisher%20Investments&cd10=Landing%20Page&cd11=Form%208&cd12=LendingTree&cd13=1&cd15=DGRI&cd16=The%20Definitive%20Guide%20to%20Retirement%20Income&cd17=Campaign%20Prospect&cd18=Undefined&cd19=424&cd23=Undefined&cd25=internet&cd27=PCGM&cd28=US&cd30=%7C%7Cqa%7C%7C&cd31=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd32=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&cd34=1&cm2=1&cd42=FishBot-BRAD&cd48=Undefined&cd50=CEME&cd51=N&cd52=TX&cd57=2022-06-28T21%3A41%3A00.606Z&cd58=12393b93-2bf7-ec11-a2ee-0050569f1385&cd59=Known%20Assets&z=128654156",
    "https://www.google-analytics.com/collect?v=1&_v=j96&a=1882119529&t=pageview&_s=8&dl=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&dp=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform-8&ul=en-us&de=UTF-8&dt=Special%20Offer%20from%20Fisher%20Investments&sd=24-bit&sr=1920x1080&vp=1903x1080&je=0&_u=yCCAiAABB~&jid=&gjid=&cid=914265066.1656452401&uid=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&tid=UA-44160600-5&_gid=1975439321.1656452401&cd53=914265066.1656452401&cd6=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd1=LC&cd2=XXXX&cd3=PLACEMENTXLCXXXX&cd4=PLACEMENTX&cd5=PLA&cd7=United%20States&cd8=www.fisherinvestments.com&cd9=Special%20Offer%20from%20Fisher%20Investments&cd10=Landing%20Page&cd11=Form%208&cd12=LendingTree&cd13=1&cd15=DGRI&cd16=The%20Definitive%20Guide%20to%20Retirement%20Income&cd17=Campaign%20Prospect&cd18=Undefined&cd19=424&cd23=Undefined&cd25=internet&cd27=PCGM&cd28=US&cd30=%7C%7Cqa%7C%7C&cd31=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd32=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&cd34=1&cm2=1&cd42=FishBot-BRAD&cd48=Undefined&cd50=CEME&cd51=N&cd52=TX&cd57=2022-06-28T21%3A41%3A00.606Z&cd58=12393b93-2bf7-ec11-a2ee-0050569f1385&cd59=Known%20Assets&z=1245075206",
    "https://www.google-analytics.com/collect?v=1&_v=j96&a=1882119529&t=pageview&_s=8&dl=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&dp=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform-8&ul=en-us&de=UTF-8&dt=Special%20Offer%20from%20Fisher%20Investments&sd=24-bit&sr=1920x1080&vp=1903x1080&je=0&_u=yCCAiAABB~&jid=&gjid=&cid=914265066.1656452401&uid=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&tid=UA-44160600-1&_gid=1975439321.1656452401&cd53=914265066.1656452401&cd6=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd1=LC&cd2=XXXX&cd3=PLACEMENTXLCXXXX&cd4=PLACEMENTX&cd5=PLA&cd7=United%20States&cd8=www.fisherinvestments.com&cd9=Special%20Offer%20from%20Fisher%20Investments&cd10=Landing%20Page&cd11=Form%208&cd12=LendingTree&cd13=1&cd15=DGRI&cd16=The%20Definitive%20Guide%20to%20Retirement%20Income&cd17=Campaign%20Prospect&cd18=Undefined&cd19=424&cd23=Undefined&cd25=internet&cd27=PCGM&cd28=US&cd30=%7C%7Cqa%7C%7C&cd31=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd32=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&cd34=1&cm2=1&cd42=FishBot-BRAD&cd48=Undefined&cd50=CEME&cd51=N&cd52=TX&cd57=2022-06-28T21%3A41%3A00.606Z&cd58=12393b93-2bf7-ec11-a2ee-0050569f1385&cd59=Known%20Assets&z=221949363",
    "https://www.google-analytics.com/collect?v=1&_v=j96&a=1882119529&t=pageview&_s=8&dl=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&dp=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform-8&ul=en-us&de=UTF-8&dt=Special%20Offer%20from%20Fisher%20Investments&sd=24-bit&sr=1920x1080&vp=1903x1080&je=0&_u=yCCAiAABB~&jid=&gjid=&cid=914265066.1656452401&uid=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&tid=UA-6649450-1&_gid=1975439321.1656452401&cd53=914265066.1656452401&cd6=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd1=LC&cd2=XXXX&cd3=PLACEMENTXLCXXXX&cd4=PLACEMENTX&cd5=PLA&cd7=United%20States&cd8=www.fisherinvestments.com&cd9=Special%20Offer%20from%20Fisher%20Investments&cd10=Landing%20Page&cd11=Form%208&cd12=LendingTree&cd13=1&cd15=DGRI&cd16=The%20Definitive%20Guide%20to%20Retirement%20Income&cd17=Campaign%20Prospect&cd18=Undefined&cd19=424&cd23=Undefined&cd25=internet&cd27=PCGM&cd28=US&cd30=%7C%7Cqa%7C%7C&cd31=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd32=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&cd34=1&cm2=1&cd42=FishBot-BRAD&cd48=Undefined&cd50=CEME&cd51=N&cd52=TX&cd57=2022-06-28T21%3A41%3A00.606Z&cd58=12393b93-2bf7-ec11-a2ee-0050569f1385&cd59=Known%20Assets&z=1871066127",
    "https://www.google-analytics.com/collect?v=1&_v=j96&a=1882119529&t=event&_s=9&dl=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&dp=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform-8&ul=en-us&de=UTF-8&dt=Special%20Offer%20from%20Fisher%20Investments&sd=24-bit&sr=1920x1080&vp=1903x1080&je=0&ec=conversion&ea=business_event&el=Known%20Assets&_u=yCCAiAABB~&jid=&gjid=&cid=914265066.1656452401&uid=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&tid=UA-65079555-3&_gid=1975439321.1656452401&cd53=914265066.1656452401&cd6=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd1=LC&cd2=XXXX&cd3=PLACEMENTXLCXXXX&cd4=PLACEMENTX&cd5=PLA&cd7=United%20States&cd8=www.fisherinvestments.com&cd9=Special%20Offer%20from%20Fisher%20Investments&cd10=Landing%20Page&cd11=Form%208&cd12=LendingTree&cd13=1&cd15=DGRI&cd16=The%20Definitive%20Guide%20to%20Retirement%20Income&cd17=Campaign%20Prospect&cd18=Undefined&cd19=424&cd23=Undefined&cd25=internet&cd27=PCGM&cd28=US&cd30=%7C%7Cqa%7C%7C&cd31=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd32=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&cd34=1&cm2=1&cd42=FishBot-BRAD&cd48=Undefined&cd50=CEME&cd51=N&cd52=TX&cd57=2022-06-28T21%3A41%3A00.606Z&cd58=12393b93-2bf7-ec11-a2ee-0050569f1385&cd59=Known%20Assets&z=1878254620",
    "https://www.google-analytics.com/collect?v=1&_v=j96&a=1882119529&t=event&_s=9&dl=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&dp=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform-8&ul=en-us&de=UTF-8&dt=Special%20Offer%20from%20Fisher%20Investments&sd=24-bit&sr=1920x1080&vp=1903x1080&je=0&ec=conversion&ea=business_event&el=Known%20Assets&_u=yCCAiAABB~&jid=&gjid=&cid=914265066.1656452401&uid=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&tid=UA-44160600-5&_gid=1975439321.1656452401&cd53=914265066.1656452401&cd6=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd1=LC&cd2=XXXX&cd3=PLACEMENTXLCXXXX&cd4=PLACEMENTX&cd5=PLA&cd7=United%20States&cd8=www.fisherinvestments.com&cd9=Special%20Offer%20from%20Fisher%20Investments&cd10=Landing%20Page&cd11=Form%208&cd12=LendingTree&cd13=1&cd15=DGRI&cd16=The%20Definitive%20Guide%20to%20Retirement%20Income&cd17=Campaign%20Prospect&cd18=Undefined&cd19=424&cd23=Undefined&cd25=internet&cd27=PCGM&cd28=US&cd30=%7C%7Cqa%7C%7C&cd31=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd32=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&cd34=1&cm2=1&cd42=FishBot-BRAD&cd48=Undefined&cd50=CEME&cd51=N&cd52=TX&cd57=2022-06-28T21%3A41%3A00.606Z&cd58=12393b93-2bf7-ec11-a2ee-0050569f1385&cd59=Known%20Assets&z=609512522",
    "https://www.google-analytics.com/collect?v=1&_v=j96&a=1882119529&t=event&_s=9&dl=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&dp=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform-8&ul=en-us&de=UTF-8&dt=Special%20Offer%20from%20Fisher%20Investments&sd=24-bit&sr=1920x1080&vp=1903x1080&je=0&ec=conversion&ea=business_event&el=Known%20Assets&_u=yCCAiAABB~&jid=&gjid=&cid=914265066.1656452401&uid=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&tid=UA-44160600-1&_gid=1975439321.1656452401&cd53=914265066.1656452401&cd6=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd1=LC&cd2=XXXX&cd3=PLACEMENTXLCXXXX&cd4=PLACEMENTX&cd5=PLA&cd7=United%20States&cd8=www.fisherinvestments.com&cd9=Special%20Offer%20from%20Fisher%20Investments&cd10=Landing%20Page&cd11=Form%208&cd12=LendingTree&cd13=1&cd15=DGRI&cd16=The%20Definitive%20Guide%20to%20Retirement%20Income&cd17=Campaign%20Prospect&cd18=Undefined&cd19=424&cd23=Undefined&cd25=internet&cd27=PCGM&cd28=US&cd30=%7C%7Cqa%7C%7C&cd31=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd32=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&cd34=1&cm2=1&cd42=FishBot-BRAD&cd48=Undefined&cd50=CEME&cd51=N&cd52=TX&cd57=2022-06-28T21%3A41%3A00.606Z&cd58=12393b93-2bf7-ec11-a2ee-0050569f1385&cd59=Known%20Assets&z=1478013167",
    "https://www.google-analytics.com/collect?v=1&_v=j96&a=1882119529&t=event&_s=9&dl=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&dp=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform-8&ul=en-us&de=UTF-8&dt=Special%20Offer%20from%20Fisher%20Investments&sd=24-bit&sr=1920x1080&vp=1903x1080&je=0&ec=conversion&ea=business_event&el=Known%20Assets&_u=yCCAiAABB~&jid=&gjid=&cid=914265066.1656452401&uid=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&tid=UA-6649450-1&_gid=1975439321.1656452401&cd53=914265066.1656452401&cd6=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd1=LC&cd2=XXXX&cd3=PLACEMENTXLCXXXX&cd4=PLACEMENTX&cd5=PLA&cd7=United%20States&cd8=www.fisherinvestments.com&cd9=Special%20Offer%20from%20Fisher%20Investments&cd10=Landing%20Page&cd11=Form%208&cd12=LendingTree&cd13=1&cd15=DGRI&cd16=The%20Definitive%20Guide%20to%20Retirement%20Income&cd17=Campaign%20Prospect&cd18=Undefined&cd19=424&cd23=Undefined&cd25=internet&cd27=PCGM&cd28=US&cd30=%7C%7Cqa%7C%7C&cd31=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd32=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&cd34=1&cm2=1&cd42=FishBot-BRAD&cd48=Undefined&cd50=CEME&cd51=N&cd52=TX&cd57=2022-06-28T21%3A41%3A00.606Z&cd58=12393b93-2bf7-ec11-a2ee-0050569f1385&cd59=Known%20Assets&z=2092351696",
    "https://www.google-analytics.com/collect?v=1&_v=j96&a=1882119529&t=pageview&_s=10&dl=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&dp=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform-9&ul=en-us&de=UTF-8&dt=Special%20Offer%20from%20Fisher%20Investments&sd=24-bit&sr=1920x1080&vp=1903x1080&je=0&_u=yCCAiAABB~&jid=431628083&gjid=1770964134&cid=914265066.1656452401&uid=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&tid=UA-65079555-3&_gid=1975439321.1656452401&cd53=914265066.1656452401&cd6=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd1=LC&cd2=XXXX&cd3=PLACEMENTXLCXXXX&cd4=PLACEMENTX&cd5=PLA&cd7=United%20States&cd8=www.fisherinvestments.com&cd9=Special%20Offer%20from%20Fisher%20Investments&cd10=Landing%20Page&cd11=Form%209&cd12=LendingTree&cd13=1&cd15=DGRI&cd16=The%20Definitive%20Guide%20to%20Retirement%20Income&cd17=Campaign%20Prospect&cd18=Undefined&cd19=424&cd23=Undefined&cd25=internet&cd27=PCGM&cd28=US&cd30=%7C%7Cqa%7C%7C&cd31=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd32=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&cd34=1&cm2=1&cd42=FishBot-BRAD&cd48=Undefined&cd50=CEME&cd51=N&cd52=TX&cd57=2022-06-28T21%3A41%3A16.174Z&cd58=12393b93-2bf7-ec11-a2ee-0050569f1385&cd59=Lead%20Info%20Complete&z=1002634274",
    "https://www.google-analytics.com/collect?v=1&_v=j96&a=1882119529&t=pageview&_s=10&dl=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&dp=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform-9&ul=en-us&de=UTF-8&dt=Special%20Offer%20from%20Fisher%20Investments&sd=24-bit&sr=1920x1080&vp=1903x1080&je=0&_u=yCCAiAABBAAAAE~&jid=697829933&gjid=713426726&cid=914265066.1656452401&uid=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&tid=UA-44160600-5&_gid=1975439321.1656452401&cd53=914265066.1656452401&cd6=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd1=LC&cd2=XXXX&cd3=PLACEMENTXLCXXXX&cd4=PLACEMENTX&cd5=PLA&cd7=United%20States&cd8=www.fisherinvestments.com&cd9=Special%20Offer%20from%20Fisher%20Investments&cd10=Landing%20Page&cd11=Form%209&cd12=LendingTree&cd13=1&cd15=DGRI&cd16=The%20Definitive%20Guide%20to%20Retirement%20Income&cd17=Campaign%20Prospect&cd18=Undefined&cd19=424&cd23=Undefined&cd25=internet&cd27=PCGM&cd28=US&cd30=%7C%7Cqa%7C%7C&cd31=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd32=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&cd34=1&cm2=1&cd42=FishBot-BRAD&cd48=Undefined&cd50=CEME&cd51=N&cd52=TX&cd57=2022-06-28T21%3A41%3A16.174Z&cd58=12393b93-2bf7-ec11-a2ee-0050569f1385&cd59=Lead%20Info%20Complete&z=1361706417",
    "https://www.google-analytics.com/collect?v=1&_v=j96&a=1882119529&t=pageview&_s=10&dl=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&dp=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform-9&ul=en-us&de=UTF-8&dt=Special%20Offer%20from%20Fisher%20Investments&sd=24-bit&sr=1920x1080&vp=1903x1080&je=0&_u=yCCAiAABBAAAAE~&jid=1914131617&gjid=64703675&cid=914265066.1656452401&uid=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&tid=UA-44160600-1&_gid=1975439321.1656452401&cd53=914265066.1656452401&cd6=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd1=LC&cd2=XXXX&cd3=PLACEMENTXLCXXXX&cd4=PLACEMENTX&cd5=PLA&cd7=United%20States&cd8=www.fisherinvestments.com&cd9=Special%20Offer%20from%20Fisher%20Investments&cd10=Landing%20Page&cd11=Form%209&cd12=LendingTree&cd13=1&cd15=DGRI&cd16=The%20Definitive%20Guide%20to%20Retirement%20Income&cd17=Campaign%20Prospect&cd18=Undefined&cd19=424&cd23=Undefined&cd25=internet&cd27=PCGM&cd28=US&cd30=%7C%7Cqa%7C%7C&cd31=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd32=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&cd34=1&cm2=1&cd42=FishBot-BRAD&cd48=Undefined&cd50=CEME&cd51=N&cd52=TX&cd57=2022-06-28T21%3A41%3A16.174Z&cd58=12393b93-2bf7-ec11-a2ee-0050569f1385&cd59=Lead%20Info%20Complete&z=790344824",
    "https://www.google-analytics.com/collect?v=1&_v=j96&a=1882119529&t=pageview&_s=10&dl=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&dp=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform-9&ul=en-us&de=UTF-8&dt=Special%20Offer%20from%20Fisher%20Investments&sd=24-bit&sr=1920x1080&vp=1903x1080&je=0&_u=yCCAiAABBAAAAE~&jid=420922103&gjid=1311155281&cid=914265066.1656452401&uid=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&tid=UA-6649450-1&_gid=1975439321.1656452401&cd53=914265066.1656452401&cd6=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd1=LC&cd2=XXXX&cd3=PLACEMENTXLCXXXX&cd4=PLACEMENTX&cd5=PLA&cd7=United%20States&cd8=www.fisherinvestments.com&cd9=Special%20Offer%20from%20Fisher%20Investments&cd10=Landing%20Page&cd11=Form%209&cd12=LendingTree&cd13=1&cd15=DGRI&cd16=The%20Definitive%20Guide%20to%20Retirement%20Income&cd17=Campaign%20Prospect&cd18=Undefined&cd19=424&cd23=Undefined&cd25=internet&cd27=PCGM&cd28=US&cd30=%7C%7Cqa%7C%7C&cd31=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd32=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&cd34=1&cm2=1&cd42=FishBot-BRAD&cd48=Undefined&cd50=CEME&cd51=N&cd52=TX&cd57=2022-06-28T21%3A41%3A16.174Z&cd58=12393b93-2bf7-ec11-a2ee-0050569f1385&cd59=Lead%20Info%20Complete&z=1267683320",
    "https://www.google-analytics.com/collect?v=1&_v=j96&a=1882119529&t=event&_s=11&dl=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&dp=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform-9&ul=en-us&de=UTF-8&dt=Special%20Offer%20from%20Fisher%20Investments&sd=24-bit&sr=1920x1080&vp=1903x1080&je=0&ec=conversion&ea=business_event&el=Lead%20Info%20Complete&_u=yCCAiAABBAAAAE~&jid=&gjid=&cid=914265066.1656452401&uid=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&tid=UA-65079555-3&_gid=1975439321.1656452401&cd53=914265066.1656452401&cd6=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd1=LC&cd2=XXXX&cd3=PLACEMENTXLCXXXX&cd4=PLACEMENTX&cd5=PLA&cd7=United%20States&cd8=www.fisherinvestments.com&cd9=Special%20Offer%20from%20Fisher%20Investments&cd10=Landing%20Page&cd11=Form%209&cd12=LendingTree&cd13=1&cd15=DGRI&cd16=The%20Definitive%20Guide%20to%20Retirement%20Income&cd17=Campaign%20Prospect&cd18=Undefined&cd19=424&cd23=Undefined&cd25=internet&cd27=PCGM&cd28=US&cd30=%7C%7Cqa%7C%7C&cd31=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd32=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&cd34=1&cm2=1&cd42=FishBot-BRAD&cd48=Undefined&cd50=CEME&cd51=N&cd52=TX&cd57=2022-06-28T21%3A41%3A16.174Z&cd58=12393b93-2bf7-ec11-a2ee-0050569f1385&cd59=Lead%20Info%20Complete&z=422268787",
    "https://www.google-analytics.com/collect?v=1&_v=j96&a=1882119529&t=event&_s=11&dl=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&dp=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform-9&ul=en-us&de=UTF-8&dt=Special%20Offer%20from%20Fisher%20Investments&sd=24-bit&sr=1920x1080&vp=1903x1080&je=0&ec=conversion&ea=business_event&el=Lead%20Info%20Complete&_u=yCCAiAABBAAAAE~&jid=&gjid=&cid=914265066.1656452401&uid=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&tid=UA-44160600-5&_gid=1975439321.1656452401&cd53=914265066.1656452401&cd6=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd1=LC&cd2=XXXX&cd3=PLACEMENTXLCXXXX&cd4=PLACEMENTX&cd5=PLA&cd7=United%20States&cd8=www.fisherinvestments.com&cd9=Special%20Offer%20from%20Fisher%20Investments&cd10=Landing%20Page&cd11=Form%209&cd12=LendingTree&cd13=1&cd15=DGRI&cd16=The%20Definitive%20Guide%20to%20Retirement%20Income&cd17=Campaign%20Prospect&cd18=Undefined&cd19=424&cd23=Undefined&cd25=internet&cd27=PCGM&cd28=US&cd30=%7C%7Cqa%7C%7C&cd31=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd32=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&cd34=1&cm2=1&cd42=FishBot-BRAD&cd48=Undefined&cd50=CEME&cd51=N&cd52=TX&cd57=2022-06-28T21%3A41%3A16.174Z&cd58=12393b93-2bf7-ec11-a2ee-0050569f1385&cd59=Lead%20Info%20Complete&z=1253818637",
    "https://www.google-analytics.com/collect?v=1&_v=j96&a=1882119529&t=event&_s=11&dl=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&dp=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform-9&ul=en-us&de=UTF-8&dt=Special%20Offer%20from%20Fisher%20Investments&sd=24-bit&sr=1920x1080&vp=1903x1080&je=0&ec=conversion&ea=business_event&el=Lead%20Info%20Complete&_u=yCCAiAABBAAAAE~&jid=&gjid=&cid=914265066.1656452401&uid=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&tid=UA-44160600-1&_gid=1975439321.1656452401&cd53=914265066.1656452401&cd6=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd1=LC&cd2=XXXX&cd3=PLACEMENTXLCXXXX&cd4=PLACEMENTX&cd5=PLA&cd7=United%20States&cd8=www.fisherinvestments.com&cd9=Special%20Offer%20from%20Fisher%20Investments&cd10=Landing%20Page&cd11=Form%209&cd12=LendingTree&cd13=1&cd15=DGRI&cd16=The%20Definitive%20Guide%20to%20Retirement%20Income&cd17=Campaign%20Prospect&cd18=Undefined&cd19=424&cd23=Undefined&cd25=internet&cd27=PCGM&cd28=US&cd30=%7C%7Cqa%7C%7C&cd31=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd32=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&cd34=1&cm2=1&cd42=FishBot-BRAD&cd48=Undefined&cd50=CEME&cd51=N&cd52=TX&cd57=2022-06-28T21%3A41%3A16.174Z&cd58=12393b93-2bf7-ec11-a2ee-0050569f1385&cd59=Lead%20Info%20Complete&z=404051145",
    "https://www.google-analytics.com/collect?v=1&_v=j96&a=1882119529&t=event&_s=11&dl=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&dp=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform-9&ul=en-us&de=UTF-8&dt=Special%20Offer%20from%20Fisher%20Investments&sd=24-bit&sr=1920x1080&vp=1903x1080&je=0&ec=conversion&ea=business_event&el=Lead%20Info%20Complete&_u=yCCAiAABBAAAAE~&jid=&gjid=&cid=914265066.1656452401&uid=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&tid=UA-6649450-1&_gid=1975439321.1656452401&cd53=914265066.1656452401&cd6=https%3A%2F%2Fwww.fisherinvestments.com%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd1=LC&cd2=XXXX&cd3=PLACEMENTXLCXXXX&cd4=PLACEMENTX&cd5=PLA&cd7=United%20States&cd8=www.fisherinvestments.com&cd9=Special%20Offer%20from%20Fisher%20Investments&cd10=Landing%20Page&cd11=Form%209&cd12=LendingTree&cd13=1&cd15=DGRI&cd16=The%20Definitive%20Guide%20to%20Retirement%20Income&cd17=Campaign%20Prospect&cd18=Undefined&cd19=424&cd23=Undefined&cd25=internet&cd27=PCGM&cd28=US&cd30=%7C%7Cqa%7C%7C&cd31=%2Fen-us%2Fcampaigns%2Fdgri%2Flc%2Fform&cd32=0181ac41c65e001908e6a58c292f0500c005f00c00bd0&cd34=1&cm2=1&cd42=FishBot-BRAD&cd48=Undefined&cd50=CEME&cd51=N&cd52=TX&cd57=2022-06-28T21%3A41%3A16.174Z&cd58=12393b93-2bf7-ec11-a2ee-0050569f1385&cd59=Lead%20Info%20Complete&z=180951658"
];


function formatDataToStandard(data = dummyData) {


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
    var indexedDimensionKeys = [
        "v",
        "_v",
        "a",
        "t",
        "_s",
        "dl",
        "dp",
        "ul",
        "de",
        "dt",
        "sd",
        "sr",
        "vp",
        "je",
        "_u",
        "jid",
        "gjid",
        "cid",
        "uid",
        "tid",
        "_gid",
        "cd53",
        "cd6",
        "cd1",
        "cd2",
        "cd3",
        "cd4",
        "cd5",
        "cd7",
        "cd8",
        "cd9",
        "cd10",
        "cd11",
        "cd12",
        "cd13",
        "cd15",
        "cd16",
        "cd17",
        "cd18",
        "cd19",
        "cd23",
        "cd25",
        "cd27",
        "cd28",
        "cd31",
        "cd32",
        "cd34",
        "cm2",
        "cd42",
        "cd48",
        "cd50",
        "cd51",
        "cd52",
        "cd57",
        "cd58",
        "cd30",
        "z",
        "cd14",
        "cd20",
        "cd21",
        "cd22",
        "cd24",
        "cd26",
        "cd29",
        "cd33",
        "cd35",
        "cd36",
        "cd37",
        "cd38",
        "cd39",
        "cd40",
        "cd41",
        "cd43",
        "cd44",
        "cd45",
        "cd46",
        "cd47",
        "cd49",
        "cd54",
        "cd55",
        "cd56",
        "cd59",
        "cd60",
        "cd61",
        "cd62",
        "cd63",
        "cd64",
        "cd65",
        "cd66",
        "cd67",
        "cd68",
        "cd69",
        "cd70",
        "cd71",
        "cd72",
        "cd73",
        "cd74",
        "cd75",
        "cd76",
        "cd77",
        "cd78",
        "cd79",
        "ec",
        "ea",
        "el"
    ];
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

    var storedValues = [];
    data.forEach(function (ele) {
        var queryParamObj = parseQueryParams(ele);
        storedValues.push(queryParamObj);
    });
    var arg1 = {};
    var results = createTable(arg1, indexedDimensionKeys, dimNameObj, storedValues);
    return results;
}

export default formatDataToStandard;