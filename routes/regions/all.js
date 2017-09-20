const data = require('../../data.json');
var db = require('../../db');


module.exports = (req, res) => {
  // const models = data.models;
  var collection = db.get().collection('oregons');

  collection.find().toArray(function(err, docs) {
      console.log(docs);
      res.status(200).json({ docs });
    });
  // res.status(200).json({ data });
};
