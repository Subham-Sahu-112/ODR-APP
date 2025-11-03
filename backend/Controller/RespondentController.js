const Respondent = require("../models/respondent");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const RespondentRegister = async (req, res) => {
  const { email, password } = req.body;
  try {
    const isUserExists = await Respondent.findOne({ email });
    if (isUserExists) {
      return res
        .status(400)
        .json({ success: false, message: "User already Exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new Respondent({
      email: email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({
      success: true,
      message: "Respondent created",
      data: {
        email: newUser.email,
      },
    });
  } catch (err) {
    res.status(400).json({ success: false, message: "Internal Server Error" });
    console.error(err);
  }
};

const RespondentLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Validate input
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide email and password",
      });
    }

    const respondent = await Respondent.findOne({ email });
    if (!respondent) {
      return res
        .status(404)
        .json({ success: false, message: "User not Exists" });
    }

    const isPassCorrect = await bcrypt.compare(password, respondent.password);
    if (!isPassCorrect) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid Password" });
    }

    const token = jwt.sign(
      { id: respondent.id },
      process.env.SECRET_KEY || "my_secrect_code_is_9123891238",
      { expiresIn: "30d" }
    );

    res.status(201).json({
      success: true,
      message: "Neutral logged in",
      token,
      data: {
        email: respondent.email,
      },
    });
  } catch (err) {
    res.status(400).json({ success: false, message: "Internal Server Error" });
    console.error(err);
  }
};

module.exports = { RespondentRegister, RespondentLogin };
