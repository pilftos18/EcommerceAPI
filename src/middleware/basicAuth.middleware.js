import UserModel from "../features/user/user.model.js";
const basicAuthorizer =(req,res,next)=>{
    //1. check if authorization header is empty
    const authHeader = req.headers["authorization"];
    if(!authHeader){
        return res.status(401).send("No authorization details found");
    }
    // console.log(authHeader);
    
    //2. Extract Crdentials [Basic wijeiejiwqioQeoiwoejwo]
    const base64Crendential = authHeader.replace('Basic','');
    // console.log(base64Crendential);
    

    //3. decode Credentials
    const decodeCreds = Buffer.from(base64Crendential, 'base64').toString('utf8');
    console.log(decodeCreds);  // [username:password]
    const creds = decodeCreds.split(':');


    const User = UserModel.getAll().find(u=> u.email == creds[0] && u.password == creds[1]);
    if(User){
        next();
    }else{
        return res.status(401).send("Incorrect Credentials");
    }
}

export default basicAuthorizer;