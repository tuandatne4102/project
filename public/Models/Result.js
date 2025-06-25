const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, required: true },
  subject: { type: String, required: true },
  correct: { type: Number, required: true },
  total: { type: Number, required: true },
  duration_seconds: { type: Number, required: true },
  submitted_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Result", resultSchema);
