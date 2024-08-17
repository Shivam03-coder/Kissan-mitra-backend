import express from 'express';
import passport from 'passport';
import getnewToken from '../middlewares/getnewToken.js';
import { getMarketDataController } from '../controllers/marketController.js';

const router = express.Router();


router.get(
  '/market-data',
  getnewToken,
  passport.authenticate('jwt', { session: false }),
  getMarketDataController
);

export default router;
