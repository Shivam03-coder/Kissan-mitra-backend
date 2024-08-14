import mongoose from "mongoose";
import axios from "axios";
import { appconfig } from "../config/appconfig.js";
import get5daysData from "../utils/get5daysData.js";

export const getWeatherdataController = async (req, res) => {
  try {
    const UserId = req.user._id;
    const { latitude, longitude } = req.params;

    const isValid = mongoose.Types.ObjectId.isValid(UserId.toString());

    if (!isValid) {
      return res.status(400).json({
        status: "failed",
        message: "Invalid user",
      });
    }

    if (!latitude || !longitude) {
      return res.status(404).json({
        status: "failed",
        message: "Location not found",
      });
    }

    const weatherResponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${appconfig.WEATHER_API_KEY}`
    );
  

    const forecastResponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${appconfig.WEATHER_API_KEY}`
    );

    const ForeCastData = get5daysData(forecastResponse);

    res.status(200).json({
      status: "success",
      CurrentWeatherData: weatherResponse.data,
      Next5DaysWeatherData: ForeCastData,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: `Unable to fetch weather data: ${error.message}`,
    });
  }
};
