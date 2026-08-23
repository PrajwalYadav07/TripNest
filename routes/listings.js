const express = require("express");
const router = express.Router()
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");

const listingContoller = require("../controller/listing.js");
const multer = require('multer');
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });




router.route("/")
    .get(wrapAsync(listingContoller.index))    //Index Route
    .post(isLoggedIn, upload.single('listing[image]'), validateListing, wrapAsync(listingContoller.createListing));   //Create Route

// New Route
router.get("/new", isLoggedIn, listingContoller.renderNewForm)


router.route("/:id")
    .get(wrapAsync(listingContoller.showListing))    //Show Route
    .put(isLoggedIn, isOwner, upload.single('listing[image]'), validateListing, wrapAsync(listingContoller.updateListing))  //Update Route
    .delete(isLoggedIn, isOwner, wrapAsync(listingContoller.destroyListing));   //Delete Route



// Edit Route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingContoller.renderEditForm))


module.exports = router;