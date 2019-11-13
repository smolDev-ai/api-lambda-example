const router = require("express").Router();

const Tasks = require("../helpers/tasksModel");

router.get("/", (req, res) => {
	Tasks.find()
		.then(tasks => {
			res.status(200).json(tasks);
		})
		.catch(err => res.status(500).json(err));
});

router.post("/", (req, res) => {
	Tasks.add(req.body)
		.then(task => {
			res.status(201).json(task);
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

module.exports = router;
