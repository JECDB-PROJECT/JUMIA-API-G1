const countries = require("../controller/country.controller.js");
const router = require("express").Router();
const verfiy =require("../controller/verifyTokenapi.controller.js");


//with verfiy
// router.post("/",  countries.addCountry);
// router.get("/", verfiy.verifyToken,countries.getCountries);
// router.get("/:id", verfiy.verifyTokenAndAuthorization,countries.getCountry);
// router.delete("/:Id", countries.deleteCountry);
// router.put("/:Id",verfiy.verifyTokenAndAuthorization, countries.updateCountry);
// router.post("/pagination",  countries.getAllCountrypagination);


// without verfiy
router.post("/",  countries.addCountry);
router.get("/", countries.getCountries);
router.get("/:id",countries.getCountry);
router.delete("/:Id", countries.deleteCountry);
router.put("/:Id", countries.updateCountry);
router.post("/pagination",  countries.getAllCountrypagination);



module.exports = router; 