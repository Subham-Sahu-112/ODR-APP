require("dotenv").config();
const Express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const AdminRouter = require("./Router/AdminRouter");
const ClaimantRouter = require("./Router/ClaimantRouter");
const NeutralRouter = require("./Router/NeutralRouter");
const RespondentRouter = require("./Router/RespondentRouter");

const app = Express();
const PORT = process.env.PORT || 3636;

app.use(Express.json());
app.use(cors());

app.use("/admin", AdminRouter);
app.use("/claimant", ClaimantRouter);
app.use("/neutral", NeutralRouter);
app.use("/respondent", RespondentRouter);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB error:", err));

app.get("/", (req, res) => {
  res.send("ODR Backend is running");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
