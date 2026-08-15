// const asynchandler = (fn) => async () =>{

// } // this syntax is similar to (fn) =>{()=>{}} basically taking a function as a parameter and passing it into another function, this is a higher order function

const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
    };
}; 
// for every async task we need to use the async and await and the try catch block so instead of writing the try catch blocks again and again we are defining a utility which can be directly used all the time for any async function


export {asyncHandler}