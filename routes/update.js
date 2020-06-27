var express = require('express');
var router = express.Router();
const fs = require('fs');
/* GET users listing. */
router.get('/', function(req, res, next) {
 
  let response = [];
  fs.readFile('./public/config/config.json', (err, data) => {
            let id = req.query.id;
            let likes = req.query.likes;
            if (err) throw err;
            let appData = JSON.parse(data);
            appData.forEach(function(obj){
                console.log(id)
                if (obj.id == id) {
                    obj.totalLikes = likes;
                    console.log(obj,data)
                }
            })
            let filter = req.query.data.split(",");
            response = appData.filter(function(o1){
                    return filter.some(function(o2){
                        if(o2 === o1.category)
                        {
                        return o1;
                        }         
                    });
                });
            fs.writeFile('./public/config/config.json', JSON.stringify(appData), (err) => {
            if (err) throw err;
            res.send(response);
            console.log('Data written to file');
        });
});

  
});



module.exports = router;
