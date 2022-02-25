import mongoose from 'mongoose'

const uri = 'mongodb+srv://dbUser:node1234@cluster0.pzd9e.mongodb.net/Database?retryWrites=true&w=majority'

const mongoDB = process.env.MONGODB_URI || uri

const connectDb = async () => {
  console.log('Starting connect database')
  try {
    await mongoose.connect(mongoDB, {
    })
    console.log('db connected...')
  } catch (err) {
    console.log("Something went wrong connect database")
  }
}

export default connectDb