import express from 'express';
import cors from 'cors';
import swagger from 'swagger-ui-express'; // define always on top of your app.js file
import productRouter from './src/features/product/product.routes.js';
import userRouter from './src/features/user/user.routes.js';
import bodyParser from 'body-parser';
// import basicAuthorizer from './src/middleware/basicAuth.middleware.js';
import jwtAuth from './src/middleware/jwt.middleware.js';
import cartItemRouter from './src/features/cart/cartItems.routes.js';
import apiDocs from './swagger.json' assert { type: 'json' };
import loggerMiddleware from './src/middleware/logger.middleware.js';
import { ApplicationError } from './src/error-handler/applicationError.js';

//create Server
const app = express();

//CORS Policy Configuration

//using Inbuild functions CORS()
var corsOptions = {
  origin: '*',
  methods: 'GET, POST, PUT, DELETE',
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization']
};

 
app.use(cors());

//manually set CORS POlicy
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:5200');
//   res.header('Access-Control-Allow-Headers', '*');
//   res.header('Access-Control-Allow-Methods', '*');
//   //return ok for preflight requests
//   if (req.method == 'OPTIONS') {
//     return res.sendStatus(200);
//   }
//   next();
// })


app.use(bodyParser.json());
app.use(loggerMiddleware);

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use('/api-docs', 
    swagger.serve,
    swagger.setup(apiDocs)
);

//For all releated product, redirect to product routes
// app.use("/api/products", basicAuthorizer, productRouter); 
app.use("/api/products", jwtAuth, productRouter); 
app.use("/api/cartItems", jwtAuth, cartItemRouter); 
app.use("/api/users", userRouter); 

//default request handler
app.get('/', (req, res) => {
  res.send('Welcome to ecommerce API Service');
});


//Error Handler Middleware

app.use((error,req, res, next) => {
  console.log(error);

  if(error instanceof ApplicationError){
     // 400 for bad request, 401 for unauthorized, 403 for forbidden, 404 for not found, 500 for server error, 503 for service 
    return res.status(error.statusCode).json({ message: error.message }); 
  }
  res.status(500).send('Something went wrong!');  // 503 for service error
  
})

app.use((req, res) => {
  res.status(404).send("API Not Found.");
});


app.listen(3200, ()=>{
    console.log("Server is running at port 3200");
})






