const express = require("express");
const router = express.Router();
const sendGridService = require("../services/sendGridService");

// Route to handle contact form submissions
router.post("/", async (req, res) => {
  try {
    const { nom, prenom, email, message } = req.body;
    await sendGridService.sendEmail(nom, prenom, email, message);
    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: "Failed to send email",
        error: error.message,
      });
  }
});

module.exports = router;
