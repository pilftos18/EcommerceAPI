// manage routes/paths productController
import ProductController from './product.controller.js';
import {upload} from '../../middleware/fileupload.middleware.js';
//1 .import express
import express from 'express'

//2. initialize express routes
const ProductRouter = express.Router();
const productController = new ProductController();



ProductRouter.post('/rate',productController.rateProduct);

ProductRouter.get('/filter',productController.filterProducts);

ProductRouter.get('/',productController.getAllProducts);
ProductRouter.post(
    '/',
    upload.single('imageUrl'),
    productController.addProduct
);
ProductRouter.get('/:id',productController.getOneProduct);





export default ProductRouter;