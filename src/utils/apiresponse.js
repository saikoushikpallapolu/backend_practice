class ApiResponse {
    constructor(statusCode, data, message = "Success"){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400 // 400+ codes are error codes like 404 not found etc
    }
}

export { ApiResponse } // just to define the response that we get from an api

