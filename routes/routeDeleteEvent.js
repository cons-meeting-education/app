const express = require("express");
const router = express.Router();

const { calendar, calendarId } = require("../calendar");

router.post("/", (req, res, next) => {
	const eventId = req.body.eventId;

	const deleteOption = { calendarId, eventId };
	const deleteHandle = (err, event) => {
		if (err) {
			console.log("Delete error!");
			res.json({ success: false, errors: err.errors });
		} else {
			console.log("Delete success!");
			res.json({ success: true });
		}
	};

	calendar.events.delete(deleteOption, deleteHandle);
});

module.exports = router;
