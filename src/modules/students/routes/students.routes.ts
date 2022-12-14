import { Router } from "express";
import isAuthenticated from "../../../shared/http/middlewares/isAuthenticated";
import StudentsController from "../controllers/StudentsController";

const studentsRouter = Router();
const studentsController = new StudentsController();

studentsRouter.post("/create", studentsController.create);
studentsRouter.post(
  "/becomeAStudent",
  isAuthenticated,
  studentsController.becomeAStudentOfATeacher
);
studentsRouter.put("/update", isAuthenticated, studentsController.update);
studentsRouter.get("/show", isAuthenticated, studentsController.show);
studentsRouter.get(
  "/list/teachers",
  isAuthenticated,
  studentsController.listTeachers
);

export default studentsRouter;
