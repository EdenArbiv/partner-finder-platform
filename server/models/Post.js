const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 120,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      maxlength: 1500,
    },
    category: {
      type: String,
      enum: ["apartment", "studies", "vacation", "general"],
      default: "general",
      required: true,
    },
    location: {
      type: String,
      trim: true,
      maxlength: 120,
      default: "",
    },
    authorName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 80,
    },
    contact: {
      type: String,
      trim: true,
      maxlength: 160,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", postSchema);
