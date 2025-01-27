import validator from 'validator'
import bcrypt from 'bcrypt'
import userModel from '../models/userModel.js';
import jwt from 'jsonwebtoken'

const createToken = (id) => {
	return jwt.sign({ id }, process.env.JWT_SECRET)
}

const loginUser = async (req, res) => {
	try {
		const {email, password} = req.body;
		const user = await userModel.findOne({email});

		if(!user) {
			return res.json({ success: false, message: 'User not found' });
		}

		const isMatch = await bcrypt.compare(password, user.password);
		if (isMatch) {
			const token = createToken(user._id);
			return res.json({ success: true, token });
    }else{
			return res.json({ success: false, message: 'Invalid credentials' });
		}

	} catch (error) {
		
	}
};

const registerUser = async (req, res) => {
	try {
		const { name, email, password } = req.body;

		// Checking user already exists or not 
		const exists = await userModel.findOne({ email });
		if (exists) return res.json({ success: false, message: 'User already exists' });

		// Validate input fields
		if (!name || name.length < 3) {
			return res.json({ success: false, message: 'Name should be at least 3 characters long.' });
		}


		// Validating email format & strong password
		if (!validator.isEmail(email)) {
			return res.json({ success: false, message: 'Please enter a valid email' });
		}

		// Passowrd length validator
		if (password.length < 8) {
			return res.json({ success: false, message: 'Password should be at least 8 characters long' });
		}

		// Hashing password before saving it in DB using salt hashing algorithm
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		const newUser = new userModel(
			{
				name,
				email,
				password: hashedPassword,
			}
		)

		const user = await newUser.save();
		const token = createToken(user._id)
		res.json(
			{
				success: true,
				token,
				user
			}
		)
	} catch (error) {
		// Log detailed error information in the server logs
		console.error(error.message, error.stack);

		// Return a generic error message to the client 
		return res.status(500).json({
			success: false,
			message: 'An unexpected error occurred. Please try again later. :'.error.message,
		});
	}
};


const adminLogin = async (req, res) => {
	try {
		const {email, password} = req.body;
		if (email === process.env.ADMIN_EMAIL  && password === process.env.ADMIN_PASSWORD) {
			const token = jwt.sign(email+password, process.env.JWT_SECRET)
      return res.json({ success: true, token });
    }else{
      return res.json({ success: false, message: 'Invalid credentials' });
		}
	} catch (error) {
		console.log(error);
		
		return res.status(500).json({
			success: false,
			message: error.message,
		});
		
	}
};

export { loginUser, registerUser, adminLogin }