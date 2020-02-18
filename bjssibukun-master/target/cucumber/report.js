$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("purchase2items.feature");
formatter.feature({
  "line": 1,
  "name": "Should be able to buy 2 items",
  "description": "",
  "id": "should-be-able-to-buy-2-items",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Purchases 2 items with different sizes",
  "description": "",
  "id": "should-be-able-to-buy-2-items;purchases-2-items-with-different-sizes",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am successfully signed in",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I \u0027Quick view’ an item",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I Change the size of the item",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I  Add that item to my basket",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I Continue shopping",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I ‘Quick view’ a different item (leave the size at the default)",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I Add the item to my basket",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I View the basket to confirm that the items are of the size you selected,",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I check that their prices are correct,",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Check that Total amount includes the Products with the Shipping cost",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Proceed through checkout to payment",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should get a confirmation that my transaction is completed",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.i_am_successfully_signed_in()"
});
formatter.result({
  "duration": 4153349442,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 74\n  (Driver info: chromedriver\u003d74.0.3729.6 (255758eccf3d244491b8a1317aa76e1ce10d57e9-refs/branch-heads/3729@{#29}),platform\u003dMac OS X 10.14.6 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 2.06 seconds\nBuild info: version: \u00273.141.0\u0027, revision: \u00272ecb7d9a\u0027, time: \u00272018-10-31T20:09:30\u0027\nSystem info: host: \u0027criton-gail.local\u0027, ip: \u0027fe80:0:0:0:18cb:35c8:7fc:c3f9%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: driver.version: ChromeDriver\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$errorHandler$0(JsonWireProtocolResponse.java:54)\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:123)\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:499)\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:486)\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:472)\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:125)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\n\tat stepDefinition.steps.i_am_successfully_signed_in(steps.java:32)\n\tat ✽.Given I am successfully signed in(purchase2items.feature:4)\n",
  "status": "failed"
});
formatter.match({
  "location": "steps.i_Quick_view_an_item()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "steps.i_Change_the_size_of_the_item()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "steps.i_Add_that_item_to_my_basket()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "steps.i_Continue_shopping()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "steps.i_Quick_view_a_different_item_leave_the_size_at_the_default()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "steps.i_Add_the_item_to_my_basket()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "steps.i_View_the_basket_to_confirm_that_the_items_are_of_the_size_you_selected()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "steps.i_check_that_their_prices_are_correct()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "steps.i_Check_that_Total_amount_includes_the_Products_with_the_Shipping_cost()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "steps.i_Proceed_through_checkout_to_payment()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "steps.i_should_get_a_confirmation_that_my_transaction_is_completed()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("reviewPreviousOrders.feature");
formatter.feature({
  "line": 1,
  "name": "Should be able to review previous orders",
  "description": "",
  "id": "should-be-able-to-review-previous-orders",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "I would like to review my previous orders",
  "description": "",
  "id": "should-be-able-to-review-previous-orders;i-would-like-to-review-my-previous-orders",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am successfully signed in with my details",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I go to my order history and details",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I can see my previous orders",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I can confirm the date of purchase of previous order",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I add a comment",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should be able to see the comment added",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.iAmSuccessfullySignedInWithMyDetails()"
});
formatter.result({
  "duration": 2148118090,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 74\n  (Driver info: chromedriver\u003d74.0.3729.6 (255758eccf3d244491b8a1317aa76e1ce10d57e9-refs/branch-heads/3729@{#29}),platform\u003dMac OS X 10.14.6 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 2.05 seconds\nBuild info: version: \u00273.141.0\u0027, revision: \u00272ecb7d9a\u0027, time: \u00272018-10-31T20:09:30\u0027\nSystem info: host: \u0027criton-gail.local\u0027, ip: \u0027fe80:0:0:0:18cb:35c8:7fc:c3f9%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: driver.version: ChromeDriver\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$errorHandler$0(JsonWireProtocolResponse.java:54)\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:123)\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:499)\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:486)\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:472)\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:125)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\n\tat stepDefinition.steps.iAmSuccessfullySignedInWithMyDetails(steps.java:151)\n\tat ✽.Given I am successfully signed in with my details(reviewPreviousOrders.feature:4)\n",
  "status": "failed"
});
formatter.match({
  "location": "steps.iGoToMyOrderHistoryAndDetails()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "steps.iCanSeeMyPreviousOrders()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "steps.iCanConfirmTheDateOfPurchaseOfPreviousOrder()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "steps.iAddAComment()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "steps.iShouldBeAbleToSeeTheCommentAdded()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("screenShotOfNegativeTest.feature");
formatter.feature({
  "line": 1,
  "name": "Should be able to grab a screen shot of failed test",
  "description": "",
  "id": "should-be-able-to-grab-a-screen-shot-of-failed-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "I would like see screen shot of an error on page",
  "description": "",
  "id": "should-be-able-to-grab-a-screen-shot-of-failed-test;i-would-like-see-screen-shot-of-an-error-on-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am successfully signed in with my details",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I go to my order history and details",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I reorder an item without ticking the check box",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I can take a screen shot of the error message",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.iAmSuccessfullySignedInWithMyDetails()"
});
formatter.result({
  "duration": 2086539586,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 74\n  (Driver info: chromedriver\u003d74.0.3729.6 (255758eccf3d244491b8a1317aa76e1ce10d57e9-refs/branch-heads/3729@{#29}),platform\u003dMac OS X 10.14.6 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 1.98 seconds\nBuild info: version: \u00273.141.0\u0027, revision: \u00272ecb7d9a\u0027, time: \u00272018-10-31T20:09:30\u0027\nSystem info: host: \u0027criton-gail.local\u0027, ip: \u0027fe80:0:0:0:18cb:35c8:7fc:c3f9%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: driver.version: ChromeDriver\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$errorHandler$0(JsonWireProtocolResponse.java:54)\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:123)\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:499)\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:486)\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:472)\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:125)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\n\tat stepDefinition.steps.iAmSuccessfullySignedInWithMyDetails(steps.java:151)\n\tat ✽.Given I am successfully signed in with my details(screenShotOfNegativeTest.feature:4)\n",
  "status": "failed"
});
formatter.match({
  "location": "steps.iGoToMyOrderHistoryAndDetails()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "steps.iReorderAnItemWithoutTickingTheCheckBox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "steps.iCanTakeAScreenShotOfTheErrorMessage()"
});
formatter.result({
  "status": "skipped"
});
});