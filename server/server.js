// BoilerPlate for server
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
const taskRouter = require("./routes/toDo.router");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("server/public"));

//Routes
app.use("/tasks", taskRouter);
// Start listening for requests on a specific port
app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
