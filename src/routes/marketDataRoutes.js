import express from 'express';
import { getMarketsController } from '../controllers/getMarketsController.js';

const router = express.Router();

router.get('/get-markets', getMarketsController);

export default router;
