const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const videoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    thumbnail_url: {
      type: String,
    },
    published_on: {
      type: Date,
    },
  },
  { timestamps: true }
);

const video = mongoose.model("video", videoSchema);
module.exports = video;
