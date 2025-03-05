const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  date: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema);
module.exports = User;


// Imports mongoose
// Defines a schema (structure of user data)
// Creates a model (User) like table in sql that represents a MongoDB collection 
// Exports the model so it can be used in other files 