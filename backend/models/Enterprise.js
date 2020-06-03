const {Schema, model} = require('mongoose');

const EnterpriseSchema = new Schema({
    name: String,
    logo: String,
    date: {
        type: Date,
        default: Date.now,
    }
})

module.exports = model('Enterprise', EnterpriseSchema)