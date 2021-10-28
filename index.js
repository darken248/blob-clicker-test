var express = require('express');
var cluster = require('cluster');
//var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');
var bcrypt = require('bcrypt');
var UserLogin = require('./lib/mongoose_user');

var app = express();

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/fonts', express.static('fonts'));
app.use('/img', express.static('img')); 
app.use('/css', express.static('views/style.css')); 
app.use('/script', express.static('script/script.js')); 
app.use('/version', express.static('script/version.js')); 
app.use('/blackjack', express.static('script/blackjack.js')); 

app.get('/',(req,res)=>{
    // console.log('Request for home page');
    res.render('index');
});
app.get('/login',(req,res)=>{
    res.render('login');
});

app.get('/signup',(req,res)=>{
    res.render('signup');
});
app.get('/info',(req,res)=>{
    res.render('info');
});
app.get('/game',(req,res)=>{
    var score = 0
    var username = 'Not logged in'
    res.render(__dirname + "/views/game", {score:score, username:username});
    res.render('game');
});
app.get('/creators',(req,res)=>{
    return res.render('creators');
});
app.get('/patch',(req,res)=>{
    res.render('patch');
});

app.use("/script", express.static('./script/'));

app.post('/games',(req,res)=>{

    var username = req.body.username;
    var password = req.body.pwd;
    var time = new Date;

    UserLogin.findOne({username:username},function(err,data){
        if(err){
            console.log(`${time}: ${err}`);
            return res.status(500).send();
        }
        
        if(!data){
            console.log(`${time}: User Don't Exist...`)
            return res.status(404).send();
        }
        var score = data.score
        username = data.username
    
        // this is use to compare the password..
        bcrypt.compare(password,data.password,function(err,data){
            if(err){
                console.log(`${time}: ${err}`);
                return res.status(500).send();
            }
            
            // checking for the password match...
            if(data){
                res.render(__dirname + "/views/game", {score:score, username:username});
                return app.get('/game',(req,res)=>{
                    res.render('game');
                });
            }

            // error if password do not match...
            return res.status(500).send();
        }); 
    });
});

app.post('/save', function(req, res){
    var score = req.body['score'];
    var username = req.body['username'];
    var time = new Date;

    UserLogin.findOne({
        username:username
    },function(err,data){
        if(err){
            console.log(`${time}: ${err}`);
            return res.status(500).send();
        }
        if(username === 'Not logged in'){
            console.log(`${time}: User not logged in`)
            return res.status(404).send();
        } else {
            data.score = score
            data.save().catch(err => console.log(err));
        }
    })
}); 

app.post('/signup',(req,res)=>{
    var username = req.body.username;
    var password = req.body.pwd;
    var score = 0
    var time = new Date;

    // First creating salt.
    bcrypt.genSalt(10,function(err,salt){
        if(err){
            console.log(`${time}: ${err}`);
            return res.status(500).send();
        }
        console.log(`${time}: ${username}`);
        // creating hash...of password
        bcrypt.hash(password,salt,function(err,data){
            if(err){
                console.log(`${time}: ${err}`);
                return res.status(500).send();
            }
            console.log(`${time}: ${data}`); // This is hash of the password...
            //Creating model to save the user data in Database..
            var newuser = new UserLogin();
            newuser.username = username;
            newuser.password = data;
            newuser.score = score

            // Inserting data to database...
            newuser.save(function(err,saveuser){
                if(err) {
                    console.log(`${time}: ${err}`);
                    if(err.code = 11000){
                        console.log(`${time}: User Already Exist`);
                        return res.status(500).send()
                    }
                    return res.status(500).send();
                }
                console.log(`${time}: new user have been save`);
                return res.status(200).send();
            });

        });

    });
    return app.get('/login',(req,res)=>{
        res.render('login');
    });
});


app.listen(5500,function(){
    console.log('Server is Running at port 5500....');
});