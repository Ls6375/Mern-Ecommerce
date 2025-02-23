import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './route/userRoute.js'
import productRouter from './route/prouctRoute.js'
import cartRouter from './route/cartRoute.js'
import orderRouter from './route/orderRoute.js'

const app = express()
const port = process.env.PORT || 3000
connectDB();
connectCloudinary();

// middleware
app.use(express.json())
app.use(cors())

// api endpoint
app.get('/', (req, res)=>{
	res.send('Hello, World!')
})

// Api Endpoint
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

app.listen(port, ()=>{
	console.log(`Server is running on port ${port}`);
});

