// generate an API context based on config data by using application.js in the specified SDK directory
var apiContext = require('mozu-node-sdk/clients/platform/application')();

// create a customer account resource from the customerAccount.js file in the specified SDK directory
// var customerAccountResource = require('mozu-node-sdk/clients/commerce/customer/customerAccount')(apiContext);

// log the customer accounts objects and the total number of accounts, using the JavaScript Promise programming structure
// customerAccountResource.getAccounts().then(function (accounts) {
//   console.log(accounts);
//   console.log("Number of Customer Accounts:");
//   console.log(accounts.totalCount);
// }).catch(function (error) {
//   console.error(error);
// });

//const APP_ID = 'KTrain.MDCID_OdeceeSydney.1.0.0.Release';
const APP_ID = 'KTrain.MyTheme_AlexYeung.1.0.0.Release';



var adminUserClient = require('mozu-node-sdk/clients/platform/adminuser/tenantAdminUserAuthTicket')(apiContext);
adminUserClient.createUserAuthTicket({
  emailAddress: apiContext.context.developerAccount.emailAddress,
  password: apiContext.context.developerAccount.password
}).then(function (res) {
  // set the user-claims manually, as the SDK does NOT cover it!
  apiContext.context.userClaims = res.accessToken;

  var appClient = require('mozu-node-sdk/clients/platform/application')(apiContext);
  var request = {
    applicationKey: 'KTrain.MDCID_OdeceeSydney.1.0.0.Release'
  }

  appClient.getAppPackageNames(request).then(function (data) {
    console.log(data);
  }).catch(function (error) {
    console.error(error);
    console.log("!! Error !!");
  })

  // var applicationClient = require('mozu-node-sdk/clients/platform/application')(apiContext);
  // applicationClient.getPackageMetadata({
  //   applicationKey: APP_ID,
  //   nsAndAppId: APP_ID
  // }).then(function (res) {
  //   console.log(res);
  // });

}).catch(function(err) {
  console.error(err);
  console.error('---- ERROR ----');
});

// var appClient = require('mozu-node-sdk/clients/platform/application')(apiContext);
// var request = {
//   applicationKey: 'KTrain.MDCID_OdeceeSydney.1.0.0.Release'
// }

// appClient.getAppPackageNames(request).then(function (data) {
//   console.log(data);
// }).catch(function (error) {
//   console.error(error);
//   console.log("!! Error !!");
// })



// var authTicket = require('mozu-node-sdk/clients/platform/applications/authTicket')(apiContext);
// debugger;
// authTicket.authenticateApp({
//   applicationId: 'KTrain.MDCID_OdeceeSydney.1.0.0.Release',
//   sharedSecret: '994c85175a394ff9b3a19d06751ef513'
// }).then(function (data) {
//   console.log(data);


// }).catch(function (err) {
//   console.log(err);
//   console.log('ERROR!!!');
// });




