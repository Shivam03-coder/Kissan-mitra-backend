import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import './config/passportjwtconfig.js';
import { passport } from './config/passportjwtconfig.js';
import { appconfig } from './config/appconfig.js';
import { Authroutes } from './routes/userRoute.js';
import weatherRoutes from './routes/weatherRoutes.js';
import marketRoutes from './routes/marketRoutes.js';
import cropAdviceRoutes from './routes/mistralRoute.js'; // Import the new crop advice route

export const app = express();

app.use(express.json());
app.use(passport.initialize());
app.use(cookieParser());
app.use(
  cors({
    origin: appconfig.REACT_APP_BASE_URL,
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

app.use('/api/v1/kissan-mitra/weather', weatherRoutes);
app.use('/api/v1/kissan-mitra/auth', Authroutes);
app.use('/api/v1/kissan-mitra/market', marketRoutes);
app.use('/api/v1/kissan-mitra/crop', cropAdviceRoutes); // Add the new route for crop advice
// app.use('/api/v1/kissan-mitra/predict', predictionRoutes);
