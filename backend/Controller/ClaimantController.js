const Claimant = require("../models/claimant");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const ClaimantRegister = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const isUserExists = await Claimant.findOne({ email });
    if (isUserExists) {
      return res
        .status(400)
        .json({ success: false, message: "User already Exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new Claimant({
      name: name,
      email: email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({
      success: true,
      message: "Claimant created",
      data: {
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (err) {
    res.status(400).json({ success: false, message: "Internal Server Error" });
    console.error(err);
  }
};

const ClaimantLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Validate input
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide email and password",
      });
    }

    const claimant = await Claimant.findOne({ email });
    if (!claimant) {
      return res
        .status(404)
        .json({ success: false, message: "User not Exists" });
    }

    const isPassCorrect = await bcrypt.compare(password, claimant.password);
    if (!isPassCorrect) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid Password" });
    }

    const token = jwt.sign(
      { id: claimant.id, role: claimant.user },
      process.env.SECRET_KEY || "my_secrect_code_is_9123891238",
      { expiresIn: "30d" }
    );

    res.status(201).json({
      success: true,
      message: "Claimant logged in",
      token,
      data: {
        name: claimant.name,
        role: claimant.user,
        email: claimant.email,
      },
    });
  } catch (err) {
    res.status(400).json({ success: false, message: "Internal Server Error" });
    console.error(err);
  }
};

const ClaimantData = async (req, res) => {
  try {
    const claimant = await Claimant.findById(req.claimant.id).select(
      "-password"
    );
    if (!claimant) {
      return res
        .status(404)
        .json({ success: false, message: "Claimant not found" });
    }

    res.status(200).json({ success: true, data: claimant });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

module.exports = { ClaimantRegister, ClaimantLogin, ClaimantData };
