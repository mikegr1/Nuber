
const express = require('express');
const router = express.Router();
const Rider = require('../models/RiderModel');


router.post('/planRoute', (req, res) => {
	const {pickupLat, pickupLng, dropoffLat, dropoffLng} = req.body;
  try{
     const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: pickupLat, lng: pickupLng },
      zoom: 10,
     });
     const origin = {lat: pickupLat, lng: pickupLng};
     const destination = {lat: dropoffLat, lng: dropoffLng};
     const geocoder = new google.maps.Geocoder();
     const service = new google.maps.DistanceMatrixService();
     service.DistanceMatrixService(
       {
         origins:[origin],
         destinations: [destination],
         travelMode: google.maps.travelMode.DRIVING,
         unitSystem: google.maps.unitSystem.METRIC,
         avoidHighways: false,
         avoidTolls: false,
       },
       (response, status) => {
         if(status !== "OK"){
           alert:("Error: " + status);
         }else {
           alert("Distance: " + response.distance.text);
           alert("time: " + response.duration.text);
         }
       });
   }
   
   
   catch (error){
    console.error(error.message);
		return res.status(500).send('A server error has occured...');
   }
});

module.exports = router;
