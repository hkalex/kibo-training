// generate an API context based on config data by using application.js in the specified SDK directory
var apiContext = require('mozu-node-sdk/clients/platform/application')();

var documentClient = require('mozu-node-sdk/clients/content/documentList')(apiContext);

documentClient.getDocumentLists({
  pageSize: 1000
}).then(function(res) {
  console.log(JSON.stringify(res));
  console.log('--- DONE ---');
}).catch(function(err) {
  console.log(err);
  console.log('--- ERROR ---');
})
