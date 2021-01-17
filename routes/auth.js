//our authentication routes
const router = require('express').Router();
//access to the User 
const User = require('../model/User');
const {registerValidation, loginValidation} = require('./validation');



//Register -  //Validating data with happijoi before shipping it to DB.
router.post('/register', async (req,res)=>{
    const {error} = registerValidation(req.body);
     //if the credentials are not met:
    if(error){
        return res.status(400).send(error.details[0].message);
    }
    //the credentials are met: 
    else{
    //using the model.
    const user = new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    });

    try{
        //saving to DB
        const savedUser = await user.save();
        res.send(savedUser);
    }catch(err){
        res.status(400).send(err)
    }
    }
});

//Login
//router.post('/logiapin', (req,res)=>{
//    res.send('Register');
//});

module.exports = router;