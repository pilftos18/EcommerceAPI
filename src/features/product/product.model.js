
import { ApplicationError } from '../../error-handler/applicationError.js';
import UserModel from  '../user/user.model.js';

export default class ProductModel {
    constructor(id, name, desc, imageUrl, category, price, sizes){
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.price = price;
        this.imageUrl = imageUrl;
        this.category = category;
        this.sizes = sizes;
    }

    static  getAllProduct(){
        return products;
    }
    static addProuct(product){
      product.id = products.length + 1;
      products.push(product);
      return product;
    }

    static getOneProduct(id){
      const product = products.find(p => p.id == id);
      return product;
    }

    
    static filter(minPrice, maxPrice, category){
      const result = products.filter((product)=>{
        return(
        (!minPrice || 
          product.price >= minPrice) &&
        (!maxPrice || 
          product.price <= maxPrice) &&
        (!category || 
          product.category == category)
        );
      });
      return result;
    }

    static rateProduct(userId, ProductId, rating){
      //1. validate User ad Product

      const user = UserModel.getAll().find(
        (u)=> u.id == userId
      );
     
      
        if(!user){
          throw new ApplicationError("User not found", 404);
        }

        const product = products.find(
          (p)=> p.id == ProductId
        );
        // console.log('product',product);
        if(!product){
          throw new ApplicationError("Product not found", 400);
        }
         //2. check if user Rating is already available
         if(!product.ratings){

          product.ratings = [];
          product.ratings.push({
            userId: userId,
            rating: rating
          })

          // console.log('product',product);

        }else{
          //3.check if exiting rating is already available

          const existingRating = product.ratings.findIndex(
            (r)=> r.userId == userId
          );

          if(existingRating >= 0){
            product.ratings[existingRating] ={
              userId: userId,
              rating: rating
            };
         }else{
            //4. if no existing rating, then add new rating.
            product.ratings.push({ 
              userId: userId, 
              rating:rating
             });
          }
      }
    }
}


var products = [
    new ProductModel(
      1,
      'Product 1',
      'Description for Product 10',
      19.99,
      'https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg',
      'Category1'
    ),
    new ProductModel(
      2,
      'Product 2',
      'Description for Product 2',
      29.99,
      'https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg',
      'Category2',
      ['S','M','L', 'XL']
    ),
    new ProductModel(
      3,
      'Product 3',
      'Description for Product 3',
      39.99,
      'https://m.media-amazon.com/images/I/31PBdo581fL._SX317_BO1,204,203,200_.jpg',
      'Category3',
      ['S','M', 'XXL']
    ),
  ];
  