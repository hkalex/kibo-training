/**
 * Implementation for http.commerce.catalog.storefront.shipping.requestRates.after


 * HTTP Actions all receive a similar context object that includes
 * `request` and `response` objects. These objects are similar to
 * http.IncomingMessage objects in NodeJS.

{
  configuration: {},
  request: http.ClientRequest,
  response: http.ClientResponse
}

 * Call `response.end()` to end the response early.
 * Call `response.set(headerName)` to set an HTTP header for the response.
 * `request.headers` is an object containing the HTTP headers for the request.
 * 
 * The `request` and `response` objects are both Streams and you can read
 * data out of them the way that you would in Node.

 */

module.exports = function(context, callback) {
  var rates = context.response.body.rates;
  var shippingRate;
  try{
    for(var i = 0; i < rates.length; i++) {
        for(var j = 0; j < rates[i].shippingRates.length; j++) {
            shippingRate = context.response.body.rates[i].shippingRates[j].amount;
            context.response.body.rates[i].shippingRates[j].amount = Math.floor((shippingRate + (context.response.body.rates[i].shippingRates[j].amount * 0.25)));
        }
    }
  } catch(err) {
      console.error(err);
  }
  callback();
};