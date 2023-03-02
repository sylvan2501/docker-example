const express = require('express')
const app = express()

app.get('/',(request, response)=>{
    response.send('This is a Docker example')
})

app.listen(8007, _ => {
    console.log('App listerning on port 8007 !')
})