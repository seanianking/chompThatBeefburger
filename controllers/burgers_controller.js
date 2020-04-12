let express = require('express');
let burger = require('../models/burger');
const router = express.Router();

router.get("/", function(req, res){
    burger.selectAll(function(data){
        let hbsObject = {burger: data};
        res.render("index", hbsObject);
    })
});

router.post("/burgers", function(req, res){
    burger.insertOne([
        'burger_name'
    ], [ req.body.burger_name],
    function(data) {
        res.redirect('/');
    })
})

router.put('/burgers/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  burger.updateOne({
    chomped: true
  }, condition, function(data) {
    res.redirect('/');
  });
});

module.exports = router;