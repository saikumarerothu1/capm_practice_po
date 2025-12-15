sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"com/ust/pofioriproject/test/integration/pages/POHeadersList",
	"com/ust/pofioriproject/test/integration/pages/POHeadersObjectPage",
	"com/ust/pofioriproject/test/integration/pages/POItemsObjectPage"
], function (JourneyRunner, POHeadersList, POHeadersObjectPage, POItemsObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('com/ust/pofioriproject') + '/test/flp.html#app-preview',
        pages: {
			onThePOHeadersList: POHeadersList,
			onThePOHeadersObjectPage: POHeadersObjectPage,
			onThePOItemsObjectPage: POItemsObjectPage
        },
        async: true
    });

    return runner;
});

