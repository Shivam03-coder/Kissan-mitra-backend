import { Router } from "express";
import passport from "passport";
import getnewToken from "../middlewares/getnewToken.js";
import { getCropsByCoordinates } from '../controllers/cropDataController.js';

const router = Router();

router.get(
  "/crop-data/:latitude/:longitude",
  getnewToken,
  passport.authenticate("jwt", { session: false }),
  getCropsByCoordinates
  
);

export default router;



