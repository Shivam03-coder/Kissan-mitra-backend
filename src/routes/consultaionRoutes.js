// import express from "express";
// import axios from "axios";
// import multer from "multer";
// import FormData from "form-data";

// const router = express.Router();
// const upload = multer();

// const FLASK_API_BASE_URL = "http://127.0.0.1:5000";

// router.post("/crop-predict", async (req, res) => {
//   try {
//     const response = await axios.post(
//       `${FLASK_API_BASE_URL}/crop-predict`,
//       req.body,
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     res.json(response.data);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// router.post("/yield-predict", async (req, res) => {
//   try {
//     const response = await axios.post(
//       `${FLASK_API_BASE_URL}/yield-predict`,
//       req.body,
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     res.json(response.data);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// router.post("/fertilizer-predict", async (req, res) => {
//   try {
//     const response = await axios.post(
//       `${FLASK_API_BASE_URL}/fertilizer-predict`,
//       req.body,
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     res.json(response.data);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// router.post("/disease-predict", upload.single("file"), async (req, res) => {
//   try {
//     const form = new FormData();
//     form.append("file", req.file.buffer, req.file.originalname);

//     const response = await axios.post(
//       `${FLASK_API_BASE_URL}/disease-predict`,
//       form,
//       {
//         headers: {
//           ...form.getHeaders(),
//         },
//       }
//     );
//     res.json(response.data);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// export default router;
