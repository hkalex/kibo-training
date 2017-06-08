// generate an API context based on config data by using application.js in the specified SDK directory
var apiContext = require('mozu-node-sdk/clients/platform/application')();

var entityListClient = require('mozu-node-sdk/clients/platform/entityList')(apiContext);

var ENTITY_NAME = 'productsegment';
var ENTITY_NS = 'alexyeung';

var entityDefinition = {
  "name": ENTITY_NAME,
  "nameSpace": ENTITY_NS,
  "contextLevel": "Site",
  "isLocaleSpecific": false,
  "isSandboxDataCloningSupported": true,
  "isShopperSpecific": true,
  "isVisibleInStorefront": true,
  "useSystemAssignedId": true,
  "indexA": {
    "dataType": "string",
    "propertyName": "ProductCode"
  },
  "indexB": {
    "dataType": "string",
    "propertyName": "SegmentCode"
  },
  "usages": ["siteBuilder", "entityManager"],
  "views": [
    {
      "name": "Alex View",
      "defaultSort": "ProductCode",
      "fields": [
        {
          "name":"Product Code",
          "target": "ProductCode",
          "type": "developer"
        },
        {
          "name":"Segment Code",
          "target": "SegmentCode",
          "type": "developer"
        }
      ]
    }
  ]
};

entityListClient.getEntityLists().then(function(res) {
  var found = false;
  for(var i=0, l=res.items.length; i<l; i++) {
    if (res.items[i].name == ENTITY_NAME && res.items[i].nameSpace == ENTITY_NS) {
      found = true;
      break;
    }
  }
  if (found) {
    var obj = Object.assign(entityDefinition, {entityListFullName: `${ENTITY_NAME}@${ENTITY_NS}`});
    return entityListClient.updateEntityList(obj);
  } else {
    return entityListClient.createEntityList(entityDefinition);
  }
}).catch(function (err) {
  console.log(err);
  console.log('---- ERROR ----');
});

