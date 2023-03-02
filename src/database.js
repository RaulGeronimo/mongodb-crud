import {
    connect
} from "mongoose";

(async () => {
    try {
        const db = await connect("mongodb://localhost:27017/crud-mongo");
        console.log("Conexion exitosa con:", db.connection.name);
    } catch (error) {
        console.error(error);
    }
})();