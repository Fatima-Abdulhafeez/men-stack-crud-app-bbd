
const express = require("express");
const router = express.Router();
const Business = require("../models/business.js");

router.get('/', async (req, res) => {
    //find will find all doc collection in db
    const allBusinesses = await Business.find();
  //console.log(allBusinesses); 
   
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

router.get('/:businessId', async (req, res) => {
	const foundBusiness = await Business.findById(req.params.businessId);
	res.render('businesses/show.ejs', { business: foundBusiness });
});

router.delete('/:businessId', async (req, res) => {
	await Business.findByIdAndDelete(req.params.businessId);
	res.redirect('/businesses');
});

module.exports = router