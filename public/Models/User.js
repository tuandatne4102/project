const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  password: { type: String, required: true }, // nên hash sau này
  avatar: { type: String, default: "unidentified.jpg" },
  setting: {
    music: { type: Boolean, default: true },
    sound_effects: { type: Boolean, default: true },
    timer_per_question: { type: Boolean, default: true },
    timer_whole_test: { type: Boolean, default: true }
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("User", userSchema);
