const router = require("express").Router();
const phonesJsonData = require("../data/phones.json")

router.get("/phones", (req, res) => {
  res.json(phonesJsonData);
});

router.get("/phones/:id", (req, res) => {
  const id = req.params.id
  res.json(phonesJsonData[id]);
});


module.exports = router;