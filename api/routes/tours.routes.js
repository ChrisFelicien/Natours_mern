import { Router } from "express";
import {
  createTours,
  deleteTour,
  getAllTours,
  getSingleTour,
  updateTour,
  isValidMongoId
} from "../controllers/tours.controller.js";

const router = Router();

router.route("/").get(getAllTours).post(createTours);
router
  .route("/:id")
  .get(isValidMongoId, getSingleTour)
  .patch(isValidMongoId, updateTour)
  .delete(isValidMongoId, deleteTour);

export default router;
