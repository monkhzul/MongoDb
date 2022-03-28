const express = require("express");
const router = express.Router();
const app = express();
const port = 3000;

const FoodController = require("../controller/FoodController");
const UserController = require("../controller/UserController");
const OrderController = require("../controller/OrderController");

                //  Food
router.get('/foods', FoodController.get_foods);
router.post('/create_foods', FoodController.createFood );
router.post('/update_foods/:id', FoodController.updateFood);
router.get('/delete_foods/:id', FoodController.deleteFood);
router.get('/food/name/:name', FoodController.findFood);


                //  User
router.get('/users', UserController.get_users);
router.post('/create_users', UserController.createUser );
router.post('/update_users/:id', UserController.updateUser);
router.get('/delete_users/:id', UserController.deleteUser);
router.get('/user/name/:name', UserController.findUser);


                //  Order
router.get('/orders', OrderController.get_orders);
router.post('/create_orders', OrderController.createOrder );
router.post('/update_orders/:id', OrderController.updateOrder);
router.get('/delete_orders/:id', OrderController.deleteOrder);
router.get('/order/name/:name', OrderController.findOrder);

module.exports = router;