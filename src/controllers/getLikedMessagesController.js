import MessageModel from "../models/messageModel.js";

const getLikedMessagesController = async (req, res) => {
  try {
    const userId = req.user._id; // Assuming the user ID is available in req.user
    const likedMessages = await MessageModel.find({ likedBy: userId });
    res.json(likedMessages);
  } catch (error) {
    console.error("Error fetching liked messages:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default getLikedMessagesController;
