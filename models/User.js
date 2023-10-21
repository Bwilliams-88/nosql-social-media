const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: [{ type: String, unique: true, required: true, trim: true }],
  email: [
    {
      type: String,
      unique: true,
      required: true,
      validate: {
        validator: function (email) {
          const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
          return emailRegex.test(email);
        },
        messsage: "Invalid email format",
      },
    },
  ],
  thoughts: [
    {
      _id: [{ ref: "Thought" }],
    },
  ],
  friends: [
    {
      _id: [{ ref: "User" }],
    },
  ],
});

postSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("user", userSchema);

module.export = User;
