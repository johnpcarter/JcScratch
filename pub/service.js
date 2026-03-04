app.service('myserv', function() {
          this.getServiceList = function () {
    return [];
}
this.getISEndpoint = function() { 
 return 'http://localhost:5555/';
}
this.getAPIList = function() { 
 return [{"name":"jc.scratch.pub:OrdersAPI","spec":{"swagger":"2.0","info":{"version":"1.0","title":"Orders"},"host":"localhost:5555","basePath":"/rad/jc.scratch.pub:OrdersAPI","consumes":["application/json"],"produces":["application/json"],"paths":{"/sales/{customerId}/orders":{"post":{"operationId":"salescustomerIdorders_POST_1","parameters":[{"name":"customerId","in":"path","required":true,"type":"string"},{"in":"body","name":"order","required":true,"schema":{"$ref":"#/definitions/order"}}],"responses":{"200":{"description":"OK"},"401":{"description":"Access Denied"}}}}},"definitions":{"order":{"type":"object","required":["id","items"],"properties":{"id":{"type":"string"},"items":{"type":"array","items":{"$ref":"#/definitions/items"}}}},"items":{"type":"object","required":["id"],"properties":{"id":{"type":"string"}}}},"schemes":["HTTP"]}}];
}
this.getCreatedTime = function() { 
 return "23-01-2026 12:26:08 IST";
}
this.getPackageInfo = function(){
 return{"packageName":"JcScratch","displayName":"Demo Package","status":"Development","tags":[""],"createdDate":"23-06-2025 13:59:44 CEST","version":"1.1","buildNumber":"6\n6\n6","description":""};
}
});
