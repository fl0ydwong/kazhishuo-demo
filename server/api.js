const express = require('express');
const router = express.Router();
const db = require('./model/db');



router.get('/api/getCards', (req, res) => {
    console.log('------------api------------')
    db.Card.find(null, (err, doc) => {
        if (err) {
            console.log(err)
        } else if (doc) {
            console.log(doc);
            res.send(JSON.stringify(doc))
        }
    })
})

router.get('/api/getCard', (req, res) => {
    var cardID = req.query.id;
    console.log('------------api------------'+cardID)
    db.Card.findOne({_id:cardID}, (err, doc) => {
        if (err) {
            console.log(err)
        } else if (doc) {
            console.log(doc);
            res.send(JSON.stringify(doc))
        }else {
            console.log('--------------shayemeiyou----------')
        }
    })
})

router.post('/api/saveCard', (req, res) => {
    var id = req.body._id
    var currentTime = new Date().toLocaleString();
    var card = {
        title: req.body.title,
        createTime:currentTime,
        content: req.body.content,
        author:'floydwong'
    }
    if (id) {
        db.Card.findByIdAndUpdate(id, card, fn)
    } else {
        new db.Card(card).save()
    }
    res.status(200).end()

})



module.exports = router;