import axios from "axios";
import { appconfig } from "../config/appconfig.js";

export const getMarketsController = async (req, res) => {
  const apiKey = appconfig.DATA_API_KEY;
  try {
    const { state, district } = req.query;

    // Ensure state and district are provided
    if (!state || !district) {
      return res.status(400).json({
        status: "failed",
        message: "State and district are required parameters",
      });
    }

    const url = `https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=${apiKey}&format=json&filters[state]=${state}&filters[district]=${district}`;

    const response = await axios.get(url);
    const records = response.data.records;

    if (!records || records.length === 0) {
      return res.status(404).json({
        status: "failed",
        message: "Choose Different State and District",
      });
    }

    const uniqueMarkets = [...new Set(records.map((record) => record.market))];

    res.status(200).json({
      status: "success",
      data: uniqueMarkets,
    });
  } catch (error) {
    console.error("Error fetching markets:", error);
    res.status(500).json({
      status: "failed",
      message: "Failed to fetch markets.",
    });
  }
};
