import express from "express";
import indexRoutes from "./routes/indexRoutes";
import path from "path";
import {engine} from 'express-handlebars';

const app = express();

app.set('views', path.join(__dirname, 'views'));

app.engine(".hbs", engine({
    layoutDir: path.join(app.get("views"),"layouts"),
    defaultLayout: "main",
    extname: ".hbs"
}))
app.set('view engine', '.hbs')

//Rutas
app.use(indexRoutes);

export default app;