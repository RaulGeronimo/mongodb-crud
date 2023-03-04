import express from "express";
import {
    engine
} from 'express-handlebars';
import indexRoutes from "./routes/indexRoutes";
import path from "path";
import morgan from "morgan";

const app = express();

app.set('views', path.join(__dirname, 'views'));

app.engine(".hbs", engine({
    layoutDir: path.join(app.get("views"), "layouts"),
    defaultLayout: "main",
    extname: ".hbs"
}))
app.set('view engine', '.hbs')

//Middlewers
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))

//Rutas
app.use(indexRoutes);

//Archivos Estaticos
app.use(express.static(path.join(__dirname, 'public')))

export default app;