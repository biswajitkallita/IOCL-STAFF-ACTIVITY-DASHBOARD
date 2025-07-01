const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  empId: String,
  name: String,
  department: String,
  shiftTime: String,
  joiningDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Employee', employeeSchema);

