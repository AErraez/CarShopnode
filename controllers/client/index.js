const express = require('express');
const router = express.Router();
const Order = require('./../../models/order')
const User = require('./../../models/user');
const {AuthMiddleware} = require('./../../Middlewares/client')


router.get('/authenticate', function(req,res){
    if (req.session.user){
        console.log("logged in")
        return res.json({code: 'OK', message: "Session active", user: req.session.user})
    }
    else{
        console.log('not logged')
        return res.status(401).json({code:'NL', message: 'No session active'})
    }
})



router.post('/logout', AuthMiddleware,function(req,res){

    req.session.destroy()

    return res.json({code:'Ok', message:"Session loged out"})
})



router.post('/login', function(req,res){
    let email = req.body.user.username
    let password= req.body.user.password
    User.getUser(email, (error, user) => {
        if(error) {
            return  res.status(500).json({ code: 'UE' , message: 'Unknown Error!'})
        }
        console.log('User:', user)
        
        if (user== null){
            return res.status(421).json({ code: 'PF' , message: 'Email or password is incorrect!'})
        }
        if (user.password == password) {

            req.session.user = {name: user.name, username: user.username, role: user.role};

            return req.session.save(function (err) {
                if (err) return  res.status(500).json({ code: 'UE' , message: 'Unknown Error!'})
                console.log('Success:', user)
                // return res.json({ code: 'OK', message: 'Login successful!'})
                return res.json({code:'Ok', message: 'Login succesful', user:{name: user.name, username: user.username, role: user.role}});
            });
        }
        
        return res.status(421).json({ code: 'PF' , message: 'Email or password is incorrect!'})
    });
   
    
})


router.post('/signup', function(req,res){
    let user= req.body.user
    user["role"]="user"

    User.createUser(user, (error,u)=>{
        if(error) {
            return  res.status(500).json({ code: 'UE' , message: 'Unknown Error!'})
        }

        console.log('User created: ', u)
        return res.json({code:'Ok', message: 'Signup succesful'});

    })
    
})



module.exports = router;