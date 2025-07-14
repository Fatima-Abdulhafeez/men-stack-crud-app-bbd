//this file is used by mangodb to crate data and push it ans save it in the db.
const mongoose = require("mongoose");

const businessSchema  = new mongoose.Schema(
    {
        name:String,
        category: String,
		description: String,
		location: String,
		phoneNumber: String,
		website: String,
		isVerified: {
			type: Boolean,
			default: false,
		},
    },{ timestamps:true }
)

const Business = mongoose.model("Business", businessSchema)
module.exports = Business;