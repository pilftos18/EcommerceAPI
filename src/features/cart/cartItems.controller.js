import CartItemsModel from "./CartItems.model.js";
export default class cartItemsController {

    add(req, res) {
        const { productID, quantity } = req.query;
        const userID = req.userID;
        CartItemsModel.add(productID, userID, quantity);
        res.status(201).send("Cart is updated");
    }

    get(req, res){
        const userID = req.userID;
        const items = CartItemsModel.get(userID);
        return res.status(200).send(items);

    }
}