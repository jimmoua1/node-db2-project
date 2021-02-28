const db = require("../../data/db-config");

const getAll = () => {
  // DO YOUR MAGIC
  return db("cars");
}

const getById = () => {
  // DO YOUR MAGIC
  return db("cars").where("id", id).first();
}

const create = () => {
  // DO YOUR MAGIC
  return db("cars")
  .insert(post)
  .then(([id]) => {
    return db("cars").where("id", id);
  });
}

module.exports = {
  getAll,
  getById,
  create,
};