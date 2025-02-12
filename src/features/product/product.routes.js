// manage routes/paths productController
import ProductController from './product.controller.js';
import {upload} from '../../middleware/fileupload.middleware.js';
//1 .import express
import express from 'express'

//2. initialize express routes
const ProductRouter = express.Router();
const productcontroller = new ProductController();


ProductRouter.get(
    '/filter',
    productcontroller.filterProducts
);

ProductRouter.get('/',productcontroller.getAllProducts);
ProductRouter.post(
    '/',
    upload.single('imageUrl'),  //upload.array() multiple file uplaod
    productcontroller.addProduct
);
ProductRouter.get('/:id',productcontroller.getOneProduct);




export default ProductRouter;