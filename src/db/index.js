import mongoose from "mongoose"
import {DB_NAME} from "../constants.js"

const connectDB = async () =>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`) // mongoose.connect is the main function used to connect the database, connectionInstance stores the connection object which is returned from mongoose
        console.log(`\n MONGODB CONNECTED!! \nHost name: ${connectionInstance.connection.host}`) // this is how the returned object from connection can be used to know the host and other purposes
    } catch (error) {
        console.log("MONGODB Connection error", error)
        process.exit(1) // process.exit(1) is used to exit the process with a failure code
    }
}

export default connectDB

// THIS FILE HAS THE COMPLETE CODE OF CONNECTING THE DATABASE WE IMPORT THIS FILE IN THE FILE THAT STARTS THE APP AND EXECUTE THE FUNCTION EXPORTED TO ENSURE WHENEVER THE APP STARTS THE DATABASE IS CONENCTED

