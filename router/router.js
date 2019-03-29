var express = require("express");
var router = express.Router();
const item = require("../model/item");

router.get("/", (req, res) => {
  console.log("I am from different module");
});

router.post("/item", (req, res, next) => {
  const newitem = new item({
    itemname: req.body.itemname,
    itemquantity: req.body.itemquantity,
    itembought: req.body.itembought
  });
  newitem.save((err, item) => {
    if (err) {
      res.json(err);
    } else {
      res.json(item);
    }
  });
});

//gettng
router.get("/item", (req, res) => {
  item.find({}, (err, item) => {
    if (err) {
      res.json(err);
    } else {
      res.json(item);
    }
  });
});
router.delete("/item/:id", (req, res) => {
  item.remove({ _id: req.params.id }, (err, items) => {
    if (err) {
      res.json(err);
    } else {
      res.json(items);
    }
  });
});
module.exports = router;
