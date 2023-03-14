const express = require('express')
const router = express.Router()
const Account = require('../models')

module.exports = router


// GET ALL 



router.get('/', async(req, res) =>{
    try{
        const account = await Account
        res.json(account)

    }catch(err){

        console.log(err)
    }



});

// CREATING ONE (POST)

router.post('/', (req, res) =>{



    
});

// DELETE ONE

