var db = require('../../db');

module.exports = (req, res) => {
  // const models = data.models;
  var collection = db.get().collection('oregons');

  let activity = req.params.activity;
  console.log(req.params.activity);

  // collection.find({region: singleRegion}).toArray(function(err, docs) {
  //     console.log(docs);
  //     res.status(200).json({ docs });
  //   });

collection.find({'trailData.activities': activity}).forEach(function(activity) {
  console.log("Activity Return: ", activity);
  res.status(200).json({ activity });
});

  collection.find({'trailData.activities': activity}).toArray(function(err, docs) {
      console.dir(docs);
      // res.status(200).json({ docs });
      res.status(200).json({ docs });
    });

  // console.log(data);


  // collection.find( {region: singleRegion} ).toArray(function(err, docs) {
  //
  //   if (err) throw err;
  //
  //     console.log('find results: ', docs);
  //     res.status(200).json({ message: 'Connected!!' });
  //   });
  // res.status(200).json({ docs });
};
