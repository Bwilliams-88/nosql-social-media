const { Schema, Types } = require("mongoose");
function formatter(date) {
  return date;
}

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // use getter method to format timestamp on query
      get: (today) => formatter(today),
    },
  },
  {
    toJson: {
      getters: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;
