export default class CartItemsModel{
    constructor(productID, userID, quantity,id){
        this.productID  = productID;
        this.userID     = userID;
        this.quantity   = quantity;
        this.id         = id;
    }

    static add(productID, userID, quantity) {
        const cartItem = new CartItemsModel(
                productID,
                userID, 
                quantity
            );
            cartItem.id = cartItems.length + 1;
            cartItems.push(cartItem);
            return cartItem;
    }

    static get(userID){
        return cartItems.filter(
            (i)=> i.userID == userID
        );
    }
}

var cartItems = [ 
    new CartItemsModel('1','2','1','1'),
    new CartItemsModel('1','1','2','2'),
];