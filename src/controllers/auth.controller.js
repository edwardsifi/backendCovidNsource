import User from '../models/User';
import jwt from 'jsonwebtoken';
import config from '../config';

export const signUp = async (req, res) =>{
     const {username, email, password} = req.body;

     const newUser = new User({
         username,
         email,
         password: await User.encryptPassword(password)
     });


    const savedUser = await newUser.save();
    console.log(savedUser);

    const token = jwt.sign({id:savedUser._id}, config.SECRET,{
        expiresIn:86400//24 horas
    });


    const infauthusr = {
        idusr:savedUser._id,
        user:savedUser.username,
        email:savedUser.email,      
        token:token    
    }

    res.json({infauthusr});

}


export const signIn = async (req, res) =>{
    const userFound = await User.findOne({email:req.body.email});
    if(!userFound) return res.status(400).json({message:'user not found'})

    const matchPassword = await User.comparePassword(req.body.password, userFound.password);

    if(!matchPassword) return res.status(401).json({token:null, message:'invalid password'})

    const token = jwt.sign({id:userFound._id}, config.SECRET,{
        expiresIn:86400
    })
    
    const infauthusr = {
        idusr:userFound._id,
        user:userFound.username,
        email:userFound.email,      
        token:token    
    }

    res.json({infauthusr});
    console.log(infauthusr);
}