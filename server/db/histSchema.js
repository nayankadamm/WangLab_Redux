const mongoose =require("mongoose")
const histSchema = new mongoose.Schema({
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"users"
  },
    name: {
        type: String,
        required: true,
      },
      date: {
        type: String,
        required: true,
      },
      startTime: {
        type: String, // Change to Date if you prefer to store as Date type
        required: true,
      },
      endTime: {
        type: String, // Change to Date if you prefer to store as Date type
        required: true,
      },
      equipment: {
        type: String,
        required: true,
      }
})
const History = mongoose.model("History",histSchema);
module.exports =History;
