const express = require('express');
const router  = express.Router();
const User = require('../models/User')

router.post('/signup', (req,res,next) =>{
    console.log(req.body, '>>>>>>>>>>>>>>>>>>>>>')
    User.register(req.body, req.body.password)
    .then((user) => res.status(201).json({ user }))
      .catch((err) => console.log(err))
  })

module.exports = router;