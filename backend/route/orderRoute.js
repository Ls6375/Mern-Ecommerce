import express from 'express';

import { 
	placeOrderStripe,
	placeOrderRazorPay, 
	allOrders, 
	userOrders, 
	updateStatus ,
	placeOrder,
	verifyStripe
} from '../controllers/orderController.js';
import adminAuth from '../middleware/adminAuth.js';
import authUser from '../middleware/auth.js';

const orderRouter = express.Router();

// Admin Features
orderRouter.post('/list', adminAuth, allOrders);
orderRouter.post('/status', adminAuth, updateStatus);

// Payment Features
orderRouter.post('/place', authUser, placeOrder);
orderRouter.post('/stripe', authUser, placeOrderStripe);
orderRouter.post('/razorpay', authUser, placeOrderRazorPay);

// User Features
orderRouter.post('/userorders', authUser, userOrders);;

// verify Payment Method
orderRouter.post(('/verifyStripe', authUser, verifyStripe));

export default orderRouter;
