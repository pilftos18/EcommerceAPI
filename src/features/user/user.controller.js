import jwt from 'jsonwebtoken';
import UserModel from "./user.model.js";

export default class UserController{

    postSignup(req,res){
        
        const {name, email, password, type}  = req.body;
        const newUser =  UserModel.signUp(name, email, password, type);
        res.status(201).send(newUser);
    }

    postLogin(req,res){
        const {email, password} = req.body;
        const user = UserModel.signIn(email, password);
        if(user){
            //1 .create token
            const token = jwt.sign(
                {userId : user.id, email: user.email},
                "N5KfQ-rYKArw`c6",
                {expiresIn:'1h'}
            )
            // console.log(token);
            
            //2.Send Token
            
            res.status(200).send(token);
        } else{
            res.status(401).send('Invalid credentials');
        }
    }

            
}