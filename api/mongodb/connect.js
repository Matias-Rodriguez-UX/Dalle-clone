import Mongoose from "mongoose";

const connectDB = (url) => {
    Mongoose.set('strictQuery', true)

    Mongoose.connect(url)
        .then(() => console.log('MongoDB Connected'))
        .catch((err) => console.log(err))
}

export default connectDB