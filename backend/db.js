const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://mrunal3:nnwbiTvFPmPXi08c@cluster0.heio4mu.mongodb.net/users');

const User = mongoose.model('User', {
    username: String,
    password: String
});

const Patient = mongoose.model('Patient', {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    tests: { type: String, required: true},
    completed: { type: Boolean, required: true }
});

module.exports = {
    User, Patient
}


// nnwbiTvFPmPXi08c mrunal3