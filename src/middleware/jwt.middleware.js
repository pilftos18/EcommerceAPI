import jwt from "jsonwebtoken";

const jwtAuth = (req, res, next) => {
    //1. Read the token
    const token = req.headers['authorization'];
    console.log(token);
    //2. if no token return the error
    if(!token) {
        return res.status(401).json({ message: 'No token provided' });
    }
    //3. verify the token
    try{
        const payload =   jwt.verify(token,"N5KfQ-rYKArw`c6");
        req.userID = payload.userId;  // while get the userID in other Controller that this write like this
    
    } catch (err) {
    //4. return error
        return res.status(401).json({ message: 'Invalid token' }); 
    }
    //5. call next middleware function
    next();
};

export default jwtAuth;
