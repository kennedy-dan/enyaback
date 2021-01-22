const express = require('express')
const csv = require('csv-parser');
const fs = require('fs');
const app = express()
const fetch = require("node-fetch");
app.use(express.json())
const csvF = async(req, res) => {
   
        const {base, money} = req.query

    try{
        await fetch(`https://api.exchangeratesapi.io/latest?base=${ base }&symbols=${ money }`)
        .then(res => res.json())
        .then(results => res.send({result:results}));
    }catch (error){
        console.log(error)
    }
  
    
}

app.get('/api/rates', csvF
)

app.listen(3000, () => {
    console.log(`server is running on port ${3000}`)
})






