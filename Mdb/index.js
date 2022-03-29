const express = require("express");
const dotenv = require('dotenv').config();
const apiRoutes = require("./routes/api.js");
const adminRoutes = require("./routes/admin.js");
const connection = require("./database.js");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static("public"));

app.use("/admin", adminRoutes);
app.use("/api", apiRoutes);


app.all("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});


app.listen(port, () => {
  console.log(`App listening at http://localhost: ${port}`);
});
