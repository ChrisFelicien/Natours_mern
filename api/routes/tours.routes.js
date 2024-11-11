import { Router } from "express";
import {
  createTours,
  deleteTour,
  getAllTours,
  getSingleTour,
  updateTour
} from "../controllers/tours.controller.js";

const router = Router();

router.route("/").get(getAllTours).post(createTours);
router.route("/:id").get(getSingleTour).patch(updateTour).delete(deleteTour);

export default router;
