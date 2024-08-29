import MessageModel from "../models/messageModel.js";

const getSavedMessagesController = async (req, res) => {
  try {
    const userId = req.user._id; // Assuming the user ID is available in req.user
    const savedMessages = await MessageModel.find({ savedBy: userId });
    res.json(savedMessages);
  } catch (error) {
    console.error("Error fetching saved messages:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default getSavedMessagesController;
