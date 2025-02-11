// manage routes/paths productController
import ProductController from './product.controller.js';
//1 .import express
import express from 'express'

//2. initialize express routes
const ProductRouter = express.Router();
const productcontroller = new ProductController();

ProductRouter.get('/',productcontroller.getAllProducts);
console.log('check your routes');



export default ProductRouter;