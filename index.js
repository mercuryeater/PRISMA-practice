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
  handleGetAllData,
  handleGetDataById,
  handleCreateData,
  handleGetInfo,
  handleDeleteById,
} = require("./controller");

app.get("/api/persons", handleGetAllData);

app.post("/api/persons", handleCreateData);

app.get("/info", handleGetInfo);

app.get("/api/persons/:id", handleGetDataById);

app.delete("/api/persons/:id", handleDeleteById);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
