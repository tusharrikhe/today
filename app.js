var express = require("express");
var mongoose = require("mongoose");
var app = express();
const route = require("./router/router");
app.use(express.json())
mongoose.connect("mongodb://localhost:27017/mydb", { useNewUrlParser: true });
mongoose.connection.on("connected", () => {
  console.log("mongodb connected on port number 27017");
});


app.get("/", (req, res) => {
  res.send("Hello from Root path");
});
app.use("/api", route);
const port = 5000;
app.listen(port, function() {
  console.log("server started on port number " + port);
});
