require('dotenv').config();
const express = require('express');
const router = express.Router();
const db = require('../models');

// POST route to record to the database the answers for each question
router.post('/user/:id', (req, res)=>{
    db.User.findOne({
        _id: req.user.id
    })
    .then(foundUser => {
        db.Answer.create({
            score: req.body.score,
            category: req.body.category, // this is from the form with a hidden input of what category the question is coming from
            userId: foundUser._id
        })
        .then(answerRecorded => {
            console.log('answer has been recorded');
            //TODO: route them back to the profile or the results mood page
        })
        .catch(error => {
            console.log('ERROR RECORDING ANSWERS', error)
            res.status(500).send('Database error')
        })
    })
    .catch(error=>{
        console.log('ERROR FINDING USER', error);
        res.status(404).send('USER NOT FOUND')
    })
})

module.exports = router;