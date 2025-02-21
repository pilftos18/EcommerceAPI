import express from 'express';
import cartItemsController from './cartItems.controller.js'

const cartRouter = express.Router();

const cartController = new cartItemsController();

cartRouter.post('/',cartController.add);
cartRouter.get('/',cartController.get);
cartRouter.delete('/:id',cartController.deleteproduct);




export default cartRouter;