import MessageModel from "../models/messageModel.js";

const getAllcommunityMessageController = async (req,res) => {
  try {
    const messages = await MessageModel.find({}).sort({ timestamp: 1 });
    res.status(200).json({
      status: "success",
      data: messages,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: `Unable to find Messages ! `,
    });
  }
};
export default getAllcommunityMessageController;
