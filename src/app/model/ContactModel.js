import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "uername is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
  },
  number: {
    type: Number,
    required: [true, "number is required"],
    match: [/^[0-9]{10}$/, "Invalid mobile number"],
  },

  message: {
    type: String,
    required: [true, "Enter a valide message"],
  },
});

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", userSchema);
export default Contact;
