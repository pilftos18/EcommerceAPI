import CartItemsModel from './cartItems.model.js';


export default class cartItemsController {
    add(req, res) {
        const { productID, quantity } = req.query;
        const userID = req.userID;

        if (!productID || !quantity) {
          res
            .status(400) 
            .json({ success: false, msg: "invalid productId or quantity" });
        }
        // console.log('userIDW',req.userID);
        CartItemsModel.add(productID, userID, quantity);
        res.status(201).send("Cart is updated");
    }

    get(req, res){
        const userID = req.userID;
        // console.log('userID', userID);
        const items = CartItemsModel.get(userID);
        return res.status(200).send(items);

    }

    deleteproduct(req,res){
        // console.log(req.query);
        // const id = req.params.id; // Debugging line
        const userID = req.userID;
        const cartId = req.params.id;

        const error =  CartItemsModel.deleteproduct(cartId,userID);
      if(error){
        return res.status(404).send(error);
      }else{
        return res.status(200).send("Cart item deleted successfully");
      }
        
    }

    updateQuantity(req,res){

    }
}