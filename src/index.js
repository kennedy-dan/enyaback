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
        .then(results => res.status(200).send({result:results}));
    }catch (error){
        return res.status(400).send({
            error:error.message,
            message: 'request unsuccessful'
        })
    }
  
    
}

app.get('/api/rates', csvF
)

app.listen(process.env.PORT || 3000, () => {
    console.log(`server is running `)
})






