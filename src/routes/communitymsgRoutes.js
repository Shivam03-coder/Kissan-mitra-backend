import { Router } from "express";
import passport from "passport";
import getnewToken from "../middlewares/getnewToken.js";
import getAllcommunityMessageController from "../controllers/getAllcommunityMessageController.js";

const communitymsgRoutes = Router();

communitymsgRoutes
  .route("/messages")
  .get(
    getnewToken,
    passport.authenticate("jwt", { session: false }),
    getAllcommunityMessageController
  );

export default communitymsgRoutes;