const db = require("../../data/dbConfig");

module.exports = {
  find
};

function find(id) {
  if (id) {
    return db("tasks")
      .where({ id })
      .first();
  } else {
    return db("tasks");
  }
}
