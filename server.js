const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.send("This is a hello world from dockeeeer!");
});

app.listen(3331, () => {
  console.log("🔥 Back-end started on port: 3331");
});