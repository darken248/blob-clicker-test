var mongoose = require('mongoose');

const myconnection = mongoose.createConnection(`mongodb+srv://website:hjkDoabMfLcWSxNN@website-database.y2d5m.mongodb.net/
Website-Database?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//var userlogin = new myconnection.Schema

var userLoginSchema = new mongoose.Schema({
    username : {type:String, unique : true},
    password : {type : String},
    prestige : {type : Number},
    score : {type : Number}
});

var UserLogin = myconnection.model('userDetail', userLoginSchema);

module.exports = UserLogin;