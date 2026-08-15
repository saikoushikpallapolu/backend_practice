import mongoose from "mongoose"
import {DB_NAME} from "./constants.js"
import dotenv from "dotenv"
import connectDB from "./db/index.js" // importing the database connection logic
import { app } from "./app.js" // importing the express object from the app.js file

dotenv.config({  // loading the environment variables from the local system
    path: "./env"
}) // changes need to be made in the run script as well in the package.json file

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`MONGODB Connected Successfully, running on port ${process.env.PORT}`)
    })
}) // the connectdb function also returns a promise which needs to be handled as well
.catch((err) => {console.log("MONGODB Connection error", err)})// executing the imported function of the database connection logic
