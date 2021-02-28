// DO YOUR MAGIC
const express = require("express");
const Car = require("./cars-model");

const { checkCarId, checkCarPayload } = require("./cars-middleware")

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const data = await Car.find();
    res.status(200).json(data);
  } catch (e) {
    next(e);
  }
});

router.get("/:id", checkCarId, async (req, res, next) => {
  try {
    const data = await Car.findById(req.params.id);
    res.status(200).json(data);
  } catch (e) {
    next(e);
  }
});

router.post("/", checkCarPayload, async (req, res, next) => {
  try {
    const body = req.body;

    const data = await Car.post(body);
    res.status(201).json(data);
  } catch (e) {
    next(e);
  }
});

router.use((req, res, err) => {
  res.status(500).json({ message: err.message, stack: err.stack });
});

module.exports = router;