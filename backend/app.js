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

app.get('/prices', (req, res) => {
  res.send(PRICES)
})
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);

app.post('/create-checkout-session', async (req, res) => {

  const line_items = req.body.items.map(item => (
    {
      price_data: {
        currency: 'uah',
        product_data: {
          name: item.title,
          description: item.authors,
          images: [item.image_url]
        },
        unit_amount: PRICES[item.id + 1] * 100,
      },
      quantity: item.quantity,
    }
  ))
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      shipping_address_collection: {
        allowed_countries: ["US", "CA", "UA"],
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
              amount: 0,
              currency: "uah",
            },
            display_name: "Free shipping",
            delivery_estimate: {
              minimum: {
                unit: "business_day",
                value: 5,
              },
              maximum: {
                unit: "business_day",
                value: 7,
              },
            },
          },
        },],
      phone_number_collection: {
        enabled: true,
      },
      line_items,
      mode: 'payment',
      success_url: `${process.env.CLIENT_URL}/checkout-success`,
      cancel_url: `${process.env.CLIENT_URL}/`
    })
    res.send({ url: session.url })
  } catch (err) {
    res.status(500).send({ error: err.message })
  }
})
app.listen(8080);