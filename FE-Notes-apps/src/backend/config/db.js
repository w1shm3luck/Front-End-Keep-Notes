// import {Sequelize} from 'sequelize';
const mongoose = require('mongoose');
const dotenv = require('dotenv');
// dotenv.config( options, {path:'./config/config.env'})

// const connectdb = new Sequelize('notes_db','root','',{
//   host: "localhost",
//   dialect: "mongo"
// });


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDB
// module.exports = connectdb

