const mongoose = require('mongoose')
mongoose.set('strictQuery', false);
require("dotenv").config();
console.log(process.env)

const linked = process.env.MONGO_LINK


mongoose.connect(linked)

const User = mongoose.model('User',{
    id: String,
    name: String,
    email: String,
    zipcode: String,
    phone: String
})

module.exports={
    User
}