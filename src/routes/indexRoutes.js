import {
    Router
} from "express";

import {
    renderTask,
    createTask,
    renderTaskEdit,
    editTask,
    toogle,
    deleteTask
} from "../controllers/taskController";

const router = Router()

router.get("/", renderTask);

router.post("/tasks/add", createTask);

router.get('/tasks/:id/toogleDone', toogle)

router.get("/tasks/:id/edit", renderTaskEdit);

router.post('/tasks/:id/edit', editTask)

router.get('/tasks/:id/delete', deleteTask)

export default router;