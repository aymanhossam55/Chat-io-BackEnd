const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
      trim: true
    },
    username: {
      type: String,
      required: [true, "Please provide a username"],
      unique: true,
      trim: true,
      lowercase: true
    },
    email: {
      type: String,
      match: [
        /^[a-zA-Z0-9._%+-]+@(gmail\.com|outlook\.com)$/,
        "Please provide a valid outlook or gmail mail"
      ],
      required: [true, "Please provide an email"],
      unique: true,
      trim: true,
      lowercase: true
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
      minlength: 6
    },
    avatar: {
      type: String,
      default: ""
    },
    phone: {
      required: [true, "Please provide a phone number"],
      type: String,
      default: "",
      unique: true
    },
    resetToken: {
      type: String,
      default: ""
    },
    resetTokenExpire: {
      type: Date,
      default: ""
    },
    verificationCode: {
      type: String
    },
    isVerified: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
