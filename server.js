const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const mongodb = require('./data/database');

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.use("/", require("./routes"));
    app.listen(port, () => {
      console.log(`Database connected and server running on port ${port}`);
    });
  }
});
