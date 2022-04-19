const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const candidateSchema = new Schema({
  id: Schema.Types.ObjectId,
  name: { type: String, required: [true, "The field `${PATH}` is required!"] },
  email: { type: String },
  phone: { type: String, required: [true, "The field `${PATH}`is required!"] },
  profession: { type: String, required: [true, "The field `${PATH}` is required!"] },
  website: { type: String },
  avatar: { type: String },
  address: { type: String },
  data:{type:String},
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("candidate",candidateSchema)