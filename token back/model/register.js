const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RegisterSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type : String,
        required : true
    },
    password: {
        type : String,
        required : true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('admin_register', RegisterSchema, 'admin_register');