const Admin = require("../models/admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const AdminRegister = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const isUserExists = await Admin.findOne({ email });
    if (isUserExists) {
      return res
        .status(400)
        .json({ success: false, message: "User already Exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new Admin({
      name: name,
      email: email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({
      success: true,
      message: "Admin created",
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

const AdminLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Validate input
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide email and password",
      });
    }

    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res
        .status(404)
        .json({ success: false, message: "User not Exists" });
    }

    const isPassCorrect = await bcrypt.compare(password, admin.password);
    if (!isPassCorrect) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid Password" });
    }

    const token = jwt.sign(
      { id: admin.id, role: "admin" },
      process.env.SECRET_KEY || "my_secrect_code_is_9123891238",
      { expiresIn: "30d" }
    );

    res.status(201).json({
      success: true,
      message: "Admin logged in",
      token,
      data: {
        role: admin.user,
        name: admin.name,
        email: admin.email,
      },
    });
  } catch (err) {
    res.status(400).json({ success: false, message: "Internal Server Error" });
    console.error(err);
  }
};

const AdminData = async (req, res) => {
  try {
    const admin = await Admin.findById(req.admin.id).select("-password");
    if (!admin) {
      return res
        .status(404)
        .json({ success: false, message: "Admin not found" });
    }

    res.status(200).json({ success: true, data: admin });
  } catch (err) {
    res.status(400).json({ success: false, message: "Internal Server Error" });
    console.error(err);
  }
};

module.exports = { AdminRegister, AdminLogin, AdminData };
