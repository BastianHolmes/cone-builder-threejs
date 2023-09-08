import express from "express";
import Triangulation from "./Triangulation.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
app.post("/api/v1/coords", (req, res) => {
  const data = req.body;
  const result = Triangulation(data.height, data.areas, data.radius);
  res.json({
    status: "success",
    data: { indices: result.indices, vertices: result.vertices },
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
