import mongoose from "mongoose" // importing mongoose 

const myfirstschema = new mongoose.schema({
    username: { // name of the field
        type: String, // datatype, first property should always be the type
        required: true, // it is required to enter a value for this field
        unique: true, // it is required to enter a unique value for this field
        lowercase: true // all the values will be stored in lowercase
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true,"Password is required"],
        unique: [true,"Password must be unique"] // in this way we can use an array to provide custom error messages
    }
},{timestamps:true}) // this timestamps:true automatically includes the created and updated time 
// creates a schema that has an object and timestamps

export const USER1 = mongoose.model("USER1",myfirstschema) // creates a model 
// when we connect mongodb to this, the model name "USER1" is converted to "user1s" as plural form and lowercase

