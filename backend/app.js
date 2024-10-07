require('dotenv').config();
const express = require('express');
const app = express();
const fs = require('node:fs/promises');
const { PRICES } = require('./prices');
app.use(express.json());
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  next();
});
// app.post('/file', async(req, res)=>{
//     console.log(req.body);
    
//     await fs.writeFile('genres.json', JSON.stringify(req.body));
//     res.send('okay')
// })
app.get('/prices', (req, res)=>{
    res.send(PRICES) 
})
// const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

app.post('/create-checkout-session', async(req, res)=>{
  try{
    const session = await stripe.checkout.sessions.create({

    })
  }catch(err){
    res.status(500).send({error:err.message})
  }
})
app.listen(8080);