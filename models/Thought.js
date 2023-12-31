const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");

const thoughtSchema = new Schema(
  {
    thoughtText: [{ type: String, required: true, min: 1, max: 280 }],
    createdAt: [{ type: Date, default: Date.now }],
    username: [{ type: String, required: true }],
    reactions: [reactionSchema],
  },
  {
    toJson: {
      virtuals: true,
    },
    id: false,
  }
);

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
