import { Router } from "express";
import passport from "passport";
import getnewToken from "../middlewares/getnewToken.js";
import getAllcommunityMessageController from "../controllers/getAllcommunityMessageController.js";
import getLikedMessagesController from "../controllers/getLikedMessagesController.js";
import getSavedMessagesController from "../controllers/getSavedMessagesController.js";

const communitymsgRoutes = Router();

communitymsgRoutes
  .route("/messages")
  .get(
    getnewToken,
    passport.authenticate("jwt", { session: false }),
    getAllcommunityMessageController
  );

communitymsgRoutes
  .route("/messages/liked")
  .get(
    getnewToken,
    passport.authenticate("jwt", { session: false }),
    getLikedMessagesController
  );

communitymsgRoutes
  .route("/messages/saved")
  .get(
    getnewToken,
    passport.authenticate("jwt", { session: false }),
    getSavedMessagesController
  );

export default communitymsgRoutes;
