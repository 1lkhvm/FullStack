const express = require('express');

const mongoose = require('mongoose');
const cors = require('cors');
const { stringify } = require("querystring")
const dotenv = require('dotenv');
const app = express();
const port = 4040;



app.use(express.json());
app.use(cors());




const CardSchema = new mongoose.Schema({
    imgUrl: String,
    title: String,
    description: String,
    name: String,
})

const Card = mongoose.model('HomeTask', CardSchema);
//Get////////////////////////////////////////////////////////
app.get('/', (req, res) => {
    Card.find({}, (err, docs) => {
        if (!err) {
            res.json(docs)
        } else {
            res.send("Əməliyyat uğurlu olmadı")
        }
    })
});

/////////////////////////////////////////////////////////////
/////GET for ID//////////////////////////////////////////////
app.get('/:id', (req, res) => {
    const { id } = req.params;
    Card.findById(id, (err, docs) => {
        if (!err) {
            res.json(docs)
        } else {
            res.send("Əməliyyat uğurlu olmadı")
        }
    })
});
/////////////////////////////////////////////////////////////
/////////////////////////POST///////////////////////////////
app.post('/', (req, res) => {
    const newCard = new Card({
        imgUrl: req.body.imgUrl,
        title: req.body.title,
        description: req.body.description,
        name: req.body.name,


    });

    newCard.save();
    res.send(newCard);
});
/////////////////////////////////////////////////////////////
////////////////////////PUT//////////////////////////////////
// app.put('/user', (req, res) => {
//     res.send('Got a PUT request at /user')
// });
/////////////////////////////////////////////////////////////
////////////////////////DELETE///////////////////////////////
app.delete('/:id', (req, res) => {
    const { id } = req.params;
    Card.findByIdAndRemove(id, (err, docs) => {
        if (!err) {
            res.json(docs);
        } else {
            res.send("Silmə əməliyyatı  uğurlu olmadı");
        }
    });
});
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://home:home142@cluster0.1hqdf0d.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('Mən Gəldim DoSTLAR'));



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});