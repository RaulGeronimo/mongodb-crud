import express from "express";
import indexRoutes from "./routes/indexRoutes";

const app = express()

app.use(indexRoutes);

export default app;