const mongoose = require('mongoose')
const uri = "mongodb+srv://cbuitragoo-sena:Genkidama8286@cluster0.gsmsebo.mongodb.net/?retryWrites=true&w=majority";


const connectDB = async () => {
    const conn = await mongoose.connect(uri , {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        //useCreateIndex: true,
        //useFindAndModify: false
    })

    console.log(`MongoDB connected: ${conn.connection.host}`)
}

module.exports = connectDB;