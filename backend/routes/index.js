const express = require('express');
const router  = express.Router();
const Enterprise = require('../models/Enterprise')
const Product = require('../models/Product');

router.get('/general', (req,res,next)=>{
    res.send({
        name: 'rapi',
        user: 'yo'
    })
  })
router.post('/addProduct', (req, res, next) =>{
    const data = {
        productName: req.body.productName,
        productImage: req.body.productImage,
        price: req.body.price,
        quantity: req.body.quantity,
        ingredients: req.body.ingredients,
        benefits: req.body.benefits,
        description: req.body.description,
        phrase: req.body.phrase,
    }
    Product.create(data)
    .then(enterprise => res.status(200).json({enterprise}))
    .catch(error => res.status(500).json({error}))
    // console.log(req.body.name)
    // const myEnterprise = new Enterprise({
    //     name: req.body.name,
    //     logo: req.body.logo,
    // })
    // myEnterprise
    // .save()
    // .then(result => console.log(result))
    // .catch(err => console.log('error: ', err))
})

router.get('/detail-product/:id' , (req,res,next)=>{
    // if(req.file){
    //   req.body.img = req.file.secure_url
    // }
    Product.findById(req.params.id)
        // {...req.body})
    
    .then(product => res.status(200).json({ product }))
    .catch((err) => res.status(err).json({ err }))
  })

module.exports = router;