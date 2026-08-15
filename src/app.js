import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express() // creates an object of express ad all the express properties are sent to this 

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit:"10kb"})) // used to parse the json data from the incoming request
app.use(express.urlencoded({extended:true, limit:"10kb"})) // used to parse the url encoded data from the incoming request
app.use(express.static("public")) // used to serve the static files whihc are local images logos etc
app.use(cookieParser()) // used to parse the cookie data from the incoming request

export{app}