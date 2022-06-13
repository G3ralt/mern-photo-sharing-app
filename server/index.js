import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import initializeDb from "./db/index.js";
import postRoutes from "./routes/post.routes.js";
import 'dotenv/config';

await initializeDb();

const app = express();

app.use(bodyParser.json({ limit: "32mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "32mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));