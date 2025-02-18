import express from 'express';
import productRouter from './src/features/product/product.routes.js';
import userRouter from './src/features/user/user.routes.js';
import bodyParser from 'body-parser';
// import basicAuthorizer from './src/middleware/basicAuth.middleware.js';
import jwtAuth from './src/middleware/jwt.middleware.js';
import cartItemRouter from './src/features/cart/cartItems.routes.js';
//create Server
const app = express();

app.use(bodyParser.json());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

//For all releated product, redirect to product routes
// app.use("/api/products", basicAuthorizer, productRouter); 
app.use("/api/products", jwtAuth, productRouter); 
app.use("/api/cartItems", jwtAuth, cartItemRouter); 
app.use("/api/users", userRouter); 

//default request handler
app.get('/', (req, res) => {
  res.send('Welcome to ecommerce API Service');
});


app.listen(3200, ()=>{
    console.log("Server is running at port 3200");
})






