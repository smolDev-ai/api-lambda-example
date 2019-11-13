const db = require("../../data/dbConfig");

module.exports = {
	find,
	add,
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

function add(item) {
	return db("tasks")
		.insert(item, "id")
		.then(ids => {
			const [id] = ids;
			return find(id);
		});
}
