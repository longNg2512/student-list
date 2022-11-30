import * as studentController from "../Controller/studentController.js";
import express from "express";

const router = express.Router();

router.get("/student/pagination", studentController.paginationStudent);
router.get("/student/search", studentController.searchPaginationStudent);
router.post("/student", studentController.addStudent);
router.put("/student/:id", studentController.updateStudent);
router.delete("/student/:id", studentController.deleteStudent);

export default router;
