import express from 'express';
import productRouter from './src/features/product/product.routes.js';
import bodyParser from 'body-parser';
//create Server
const app = express();
app.use(bodyParser.json());
//For all releated product, redirect to product routes
app.use("/api/products", productRouter); 

//default request handler
app.get('/', (req, res) => {
  res.send('Welcome to ecommerce API Service');
});


app.listen(3200, ()=>{
    console.log("Server is running at port 3200");
})






