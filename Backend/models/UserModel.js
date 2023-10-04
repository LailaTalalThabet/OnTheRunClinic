const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
   
   username: {
      type: String,
      required: true,
     unique: true // Ensures username uniqueness
   },
   password: {
      type: String,
      required: true
   },
   role: {
      type: String,
      enum: ['Administrator', 'Doctor', 'Patient'],
      required: true
   }
});

module.exports = mongoose.model('User', userSchema);