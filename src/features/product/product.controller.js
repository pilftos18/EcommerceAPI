import ProductModel from "./product.model.js";

export default class ProductController{
        getAllProducts(req,res) {
            const product = ProductModel.getAllProduct();
            res.status(200).send(product);
        }

        addProduct(req,res) {
           const {name, desc, price, sizes }  = req.body;
           const newProduct ={
                name,
                desc,
                price: parseFloat(price),
                sizes:sizes.split(','),
                imageUrl: req.file.filename
            }
            const createRecord =  ProductModel.addProuct(newProduct);
            res.status(201).send({message: "Product added successfully", createRecord});
        }

        rateProduct(req,res,next) {
            // console.log(req.query)
            try {
            const userID = req.query.userID;
            const productId = req.query.productId;
            const rating = req.query.rating;

        
                ProductModel.rateProduct(
                    userID, 
                    productId,
                    rating
                );
                
            } catch (error) {
                //return res.status(400).send(error.message);
                console.log("Passing error: ");
                
                next(error);
            }
            return res.status(200).send("Rating has been added successfully");


        }
       

        getOneProduct(req, res){
            const id = req.params.id;
            const product = ProductModel.getOneProduct(id);

            if(!product){
                return res.status(404).send({message: "Product not found"});
            }else{
                res.status(200).send(product);
            }
        }

     
    filterProducts(req, res) {
        const minPrice = req.query.minPrice;
        const maxPrice = req.query.maxPrice;
        const category = req.query.category;
        const result = ProductModel.filter(
            minPrice,
            maxPrice,
            category
        );
        res.status(200).send(result);
    }
}