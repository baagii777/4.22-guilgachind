const { connect } = require('http2');
const mongoose = require('mongoose');

const connectDB = ()=>{
    let connect = mongoose.connect("mongodb+srv://forest:<password>@cluster0.48wfvbc.mongodb.net/test",{
    useNewUrlParser:true,
    useUnifiedTopology:true
    })
    return connect
}

module.exports = connectDB