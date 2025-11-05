const jwt = require("jsonwebtoken");
const Claimant = require("../models/claimant");

module.exports = claimantAuthMiddleware = async (req, res, next) => {
  try {
    // Get Token
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "No token provided" });
    }

    // Verify Token
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "my_secrect_code_is_9123891238"
    );
    if (decoded.role !== "claimant") {
      return res
        .status(403)
        .json({ success: false, message: "Forbidden: Claimants only" });
    }

    // Fetch Claimant
    const claimant = await Claimant.findById(decoded.id);
    if (!claimant) {
      return res
        .status(401)
        .json({ success: false, message: "Claimant not found" });
    }

    req.claimant = claimant;
    next();
  } catch (err) {
    res.status(401).json({ success: false, message: "Unauthorized" });
  }
};
