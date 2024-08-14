import { Router } from "express";
import passport from "passport";
import getnewToken from "../middlewares/getnewToken.js";
import { getWeatherdataController } from "../controllers/index.js";

export const weatherRoutes = Router();

weatherRoutes
  .route("/weather/:latitude/:longitude")
  .get(
    getnewToken,
    passport.authenticate("jwt", { session: false }),
    getWeatherdataController
  );
