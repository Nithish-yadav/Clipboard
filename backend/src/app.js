import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import textRoutes from "./routes/text.routes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/texts", textRoutes);

app.get("/", (req, res) => res.json({ status: "ok" }));

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Backend listening on ${port}`));
