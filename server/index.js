import express from "express";
import Cone from "./points.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
app.post("/api/v1/coords", (req, res) => {
  const data = req.body; // данные, которые пришли с клиента
  const result = Cone(data.height, data.areas, data.radius); // вызов функции
  res.json({
    status: "success",
    data: { top: result.top, base: result.base },
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
