const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
 * Collection Name: user
 */
const userSchema = new Schema({
    name           :  { type: String, default: null },
    email       :  { type: String, default: null },
    isDeleted      :  { type: Boolean, default: false }
},
{
    timestamps: true
});

module.exports = mongoose.model("user" , userSchema, "users");
