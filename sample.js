const express = require('express') // include the express package
const app = express() // creating an instance of express to run the application
const port = 3000 // setting the port number, this is where the backend server is listening

app.get('/', (req, res) => {
    res.send('Hello World!') // using send we send a particular task '/' portal to execute
})

app.get('/twitter', (req, res) => {
    res.send('<h1>twitter.com</h1>') // using send we send a particular task '/twitter' portal to execute, not only strings anything can be sent using the res.send()
})

app.get('/youtube',(req,res) => {
    res.json({name: 'koushik'}) // in this way we can send a json data as well into the listening port
}) 

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`) // this is where the port is listening for request from the app.get(), we add the sepcific '/...' to the port and get the desired result
})


