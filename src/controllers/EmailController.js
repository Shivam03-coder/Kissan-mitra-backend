import nodemailer from "nodemailer";
import { appconfig } from "../config/appconfig.js";
import UserModel from "../models/usermodel.js";

export const sendEmailController = async (req, res) => {
  try {
    const userId = req.user._id;
    if (!userId) {
      console.error("User ID not found in request");
      return res.status(401).json({ error: "User not authenticated" });
    }

    const user = await UserModel.findById(userId).select("fullname email");

    if (!user) {
      console.error(`User with ID ${userId} not found in database`);
      return res.status(404).json({ error: "User not found" });
    }

    const { message } = req.body;

    if (!message) {
      console.error("Message content is missing in the request");
      return res.status(400).json({ error: "Message content is required" });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail", // Using Gmail SMTP service
      auth: {
        user: appconfig.EMAILJS_USER_ID, // Your Gmail address
        pass: appconfig.EMAILJS_USER_SECRET, // Your Gmail app password
      },
      tls: {
        rejectUnauthorized: false, // Optional: Can help with some SSL issues
      },
    });

    // Email options
    const mailOptions = {
      from: user.email,
      to: "amanwairagkar25@gmail.com",
      subject: `Message from ${user.fullname}`,
      text: `
        Message from Farmer:
        -------------------
        User ID: ${userId}
        User Email: ${user.email}
        User Name: ${user.fullname}

        Message Content:
        ${message}
      `,
    };

    const response = await transporter.sendMail(mailOptions);

    res.status(200).json({ success: "Email sent successfully", response });
  } catch (error) {
    console.error("Error sending email:", error.message);
    res
      .status(500)
      .json({ error: "Failed to send email", details: error.message });
  }
};
