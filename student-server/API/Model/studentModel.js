import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
  },
  gender: {
    type: String,
  },
});

export const studentModel = mongoose.model("test1", schema);
