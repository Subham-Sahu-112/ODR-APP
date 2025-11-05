const Neutral = require("../models/neutral");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const NeutralRegister = async (req, res) => {
  const { email, password } = req.body;
  try {
    const isUserExists = await Neutral.findOne({ email });
    if (isUserExists) {
      return res
        .status(400)
        .json({ success: false, message: "User already Exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new Neutral({
      email: email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({
      success: true,
      message: "Neutral created",
      data: {
        email: newUser.email,
      },
    });
  } catch (err) {
    res.status(400).json({ success: false, message: "Internal Server Error" });
    console.error(err);
  }
};

const NeutralLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Validate input
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide email and password",
      });
    }

    const neutral = await Neutral.findOne({ email });
    if (!neutral) {
      return res
        .status(404)
        .json({ success: false, message: "User not Exists" });
    }

    const isPassCorrect = await bcrypt.compare(password, neutral.password);
    if (!isPassCorrect) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid Password" });
    }

    const token = jwt.sign(
      { id: neutral.id, role: neutral.user },
      process.env.SECRET_KEY || "my_secrect_code_is_9123891238",
      { expiresIn: "30d" }
    );

    res.status(201).json({
      success: true,
      message: "Neutral logged in",
      token,
      data: {
        name: neutral.name,
        role: neutral.user,
        email: neutral.email,
      },
    });
  } catch (err) {
    res.status(400).json({ success: false, message: "Internal Server Error" });
    console.error(err);
  }
};

const NeutralData = async (req, res) => {
  try {
    const neutral = await Neutral.findById(req.neutral.id).select(
      "-password"
    );
    if (!neutral) {
      return res
        .status(404)
        .json({ success: false, message: "Neutral not found" });
    }

    res.status(200).json({ success: true, data: neutral });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

module.exports = { NeutralRegister, NeutralLogin, NeutralData };
