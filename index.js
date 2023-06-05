const express = require("express");
const morgan = require("morgan");
const app = express();
morgan.token("body", function (req) {
  return JSON.stringify(req.body);
});
app.use(express.json());
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :body ")
);
const PORT = process.env.PORT ?? 3001;
const {
  getAllData,
  createData,
  getInfo,
  getDataById,
  deleteById,
} = require("./model");

app.get("/api/persons", getAllData);

app.post("/api/persons", createData);

app.get("/info", getInfo);

app.get("/api/persons/:id", getDataById);

app.delete("/api/persons/:id", deleteById);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
