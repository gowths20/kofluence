var express = require('express');
var router = express.Router();
var responseJson = require('../public/config/config.json');

/* GET users listing. */
router.get('/', function(req, res, next) {
  let response;
  
  if(req.query.data !== "empty")
  {
  let filter = req.query.data.split(",");
  response = responseJson.filter(function(o1){
        return filter.some(function(o2){
            if(o2 === o1.category)
            {
              return o1;
            }         
        });
    });
  }
  else
  {
    response = responseJson;
  }
  res.send(response);
});

module.exports = router;
