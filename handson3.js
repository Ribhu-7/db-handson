const mongoose = require("mongoose")

const url = "mongodb://127.0.0.1:27017/Human_resource"

const dbSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  salary: Number,
  department: String,
  lastCompany: String,
  lastSalary: Number,
  overallExp: Number,
  contactInfo: Number,
  yearGrad: Number,
  gradStream: String
})
