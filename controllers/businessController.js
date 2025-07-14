
const express = require("express");
const router = express.Router();
const Business = require("../models/business.js");

router.get('/', (req, res) => {
    res.send('do I work?')
})

router.get("/new", (req, res) => {
  res.render("businesses/new.ejs");
});

router.post('/', async (req, res) => {
    if (req.body.isVerified === 'on') {
        req.body.isVerified = true;
    } else {
        req.body.isVerified = false;
    }
    await Business.create(req.body);
    res.redirect('/businesses/new');
});


module.exports = router