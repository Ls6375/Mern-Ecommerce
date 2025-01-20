import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './route/userRoute.js'

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

app.listen(port, ()=>{
	console.log(`Server is running on port ${port}`);
});

