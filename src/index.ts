import express from "express";

const app = express();

app.get("/test", (req, res) => {
  res.send("API WORKS!!!");
});

app.listen(8081, () => {
  console.log("server listen on port=8081");
});
