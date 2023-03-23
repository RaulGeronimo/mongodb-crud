"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _taskController = require("../controllers/taskController");
var router = (0, _express.Router)();
router.get("/", _taskController.renderTask);
router.post("/tasks/add", _taskController.createTask);
router.get('/tasks/:id/toogleDone', _taskController.toogle);
router.get("/tasks/:id/edit", _taskController.renderTaskEdit);
router.post('/tasks/:id/edit', _taskController.editTask);
router.get('/tasks/:id/delete', _taskController.deleteTask);
var _default = router;
exports["default"] = _default;