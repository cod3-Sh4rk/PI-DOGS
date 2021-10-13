const { Router } = require('express');
const {getTemperament} = require("../controllers/Temperamentcontroller")
const {preTemperament} = require("../controllers/Temperamentcontroller")
const router = Router();

router.get("/", getTemperament)
router.get("/", preTemperament)

module.exports = router;