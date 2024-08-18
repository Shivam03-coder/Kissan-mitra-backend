import express from "express";
import passport from "passport";
import getnewToken from "../middlewares/getnewToken.js";
import { getMarketDataController } from "../controllers/marketController.js";
import { getStateNameController } from "../controllers/getStateNameController.js";

const router = express.Router();

router.get(
  "/market-data",
  getnewToken,
  passport.authenticate("jwt", { session: false }),
  getMarketDataController
);
router.get(
  "/state-data",
  getnewToken,
  passport.authenticate("jwt", { session: false }),
  getStateNameController
);



export default router;
