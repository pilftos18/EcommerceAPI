import ProductModel from '../product/product.model.js';
import UserModel from '../user/user.model.js';
export default class CartItemsModel{
    constructor(productID, userID, quantity,id){
        this.productID  = productID;
        this.userID     = userID;
        this.quantity   = Number(quantity);;
        this.id         = id;
    }

    static add(productID, userID, quantity) {
     
        // Find the cart item for the user and product
        let cartItem = cartItems.find((item) => item.productID == productID && item.userID == userID);

        if (cartItem) {
            // Update the quantity if the item already exists in the cart
            cartItem.quantity +=  Number(quantity);;
            // console.log('qua',cartItem.quantity);
            
        } else {
            // Create a new cart item and add it to the cart
            cartItem = new CartItemsModel(productID, userID, quantity);
            cartItem.id = cartItems.length + 1;
            cartItems.push(cartItem);
        }

        return cartItem;
    }

    static get(userID){
        return cartItems.filter(
            (i)=> i.userID == userID
        );
    }

    static deleteproduct(cartItemID, userId){
        const index = cartItems.findIndex(c=> c.id == cartItemID && c.userID == userId);
        if(index !== -1){
            cartItems.splice(index, 1);
        }else{
            return "Item not found";
        }
    }
    
}

var cartItems = [ 
    new CartItemsModel('1','2','1','1'),
    new CartItemsModel('1','1','2','2'),
];