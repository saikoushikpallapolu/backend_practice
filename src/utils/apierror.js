// node gives a complete error class to handle errors, this common error class can be used to handle all the errors that might come up while the application is running

class ApiError extends Error {
    constructor(
        statusCode,
        message= "Something went wrong",
        errors = [],
        stack = "" // basic varibales defined of the class
    ){
        super(message)
        this.statusCode = statusCode   // e.g. 400, 401, 404, 500
        this.data = null               // On error, response data is null
        this.message = message         // Custom error message
        this.success = false           // Flags the request as failed
        this.errors = errors           // Stores array of specific validation errors


        if (stack) {
            this.stack = stack
        } else{
            Error.captureStackTrace(this, this.constructor)
        }

    }
}

export {ApiError} 

