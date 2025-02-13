import UserModel from "./user.model.js";

export default class UserController{

    postSignup(req,res){
        const {name, email, password, type}  = req.body;
        const newUser =  UserModel.Signup(name, email, password, type);
        
        res.status(201).send(newUser);
    }

    postLogin(req,res){
        const {email, password} = req.body;
        const user = UserModel.Signin(email, password);
        if(user){
            res.status(200).send(user);
        } else{
            res.status(401).send('Invalid credentials');
        }

    }

            
}