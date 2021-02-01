import mongoose from 'mongoose'

const dbConn = async () => {
  const connString = process.env.MONGO_URI ? process.env.MONGO_URI : ''
  try {
    const conn = await mongoose.connect(connString, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true
    })
    console.log(`MongoDb Connected: ${conn.connection.host}`.yellow.bold)
  } catch (e) {
    console.log(`Error: ${e.message}`.red.bold)
    process.exit(1)
  }
}

export default dbConn