const Car = require("./cars-model")

exports.checkCarId = async (req, res, next) => {
  // DO YOUR MAGIC
  const { id } = req.params;
  const idExist = await Car.findById(id);
  if (idExist) {
    next();
  } else {
    res.status(400).json({ message: `ID ${id} does not exist!` });
  }
}

exports.checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
  const { VIN, Make, Model, Miles } = req.body;
  if (VIN && Make && Model && Miles) {
    next();
  } else {
    res.status(400).json({ message: "Name and Budget required!" });
  }
}

exports.checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
  const { VIN } = req.body;
  if (VIN) {
    next();
  } else {
    res.status(400).json({ message: "Invalid Vin Number" })
  }
}

exports.checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
  const { VIN, id } = (req.params, req.body);
  if(VIN, id){
    next();
  } else {
    res.status(400).json({ message: "Unique Vin Number not found" })
  }
}