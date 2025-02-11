import ProductModel from "./product.model.js";

export default class ProductController{
        getAllProducts(req,res) {
            console.log('Headers;;');
            
            const product = ProductModel.getAllProduct();
            res.status(200).send(product);
        }

        addProduct(req,res) {
        }

        rateProduct(req,res) {
        }

        getOneProduct(req, res){

        }
}