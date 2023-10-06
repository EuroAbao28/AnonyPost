require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// route
app.use("/api/post", require("./routes/postRoutes"));

// connect to mongodb
mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    app.listen(port, () => {
      console.log("SERVING RUNNING ON PORT", port);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection error:", error);
  });
