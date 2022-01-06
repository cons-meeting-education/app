const createEventRouter = require("./routeCreateEvent");
const deleteEventRouter = require("./routeDeleteEvent");
const updateEventRouter = require("./routeUpdateEvent");

function RouteIndex(app) {
	app.use("/create", createEventRouter);
	app.use("/delete", deleteEventRouter);
	app.use("/update", updateEventRouter);
}

module.exports = RouteIndex;
