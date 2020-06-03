const express = require('express');
const router  = express.Router();
const Enterprise = require('../models/Enterprise')

router.get('/general', (req,res,next)=>{
    res.send({
        name: 'rapi',
        user: 'yo'
    })
  })
router.post('/addEnterprise', (req, res, next) =>{
    const data = {
        name: req.body.name,
        logo: req.body.logo,
    }
    Enterprise.create(data)
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

module.exports = router;