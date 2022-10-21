const mongoose = require('mongoose')
const MONGO_URLS='mongodb+srv://snexus:snexus123@cluster0.sldwufz.mongodb.net/?retryWrites=true&w=majority'


const connectDB = async (req, res) => {
	try {
		const conn = mongoose.connect(MONGO_URLS, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})

		console.log('Connected to MongoDB')
	} catch (error) {
		console.log('Error: ', error)
	}
}

module.exports = { connectDB }
