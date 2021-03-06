const { Schema , model } = require('mongoose');


const chatSchema = new Schema({
    name: {type: String, required: true},
    mail: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {type: String, required: true},
    cuit: {type: String, required: true, unique: true},
});


module.exports = model('chat', chatSchema);