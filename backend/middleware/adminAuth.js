import jwt from 'jsonwebtoken';

const adminAuth = async (req, res, next) => {
	try {
		const {token} = req.headers;
		console.log(token);
		
		if (!token) {
      return res.status(401).json(  { success: false, message: 'Not Authorized Login Again' } );
    }
		const token_decode = jwt.verify(token, process.env.JWT_SECRET);
		console.log(token_decode);
		if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.status(403).json( { success: false, message: 'Invalid credentials' } );
    }
		next();
	}catch(value) {
		console.log(error);
		res.json({success: false, message: error.message});
	}
}

export default adminAuth;
