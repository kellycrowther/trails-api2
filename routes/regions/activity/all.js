
module.exports = (req, res) => {
  // const modelId = req.params.modelId * 1;
  const activity = data.activity.filter(a => a.activity === activity);

  res.status(200).json({ activity });
};
