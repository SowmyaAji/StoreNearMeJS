# StoreNearMeJS

## Overview
This is a basic Leaflet and jQuery App that identifies the nearest big store to any address
given as an input in the text box. 

The app shows the location of the store, gives the address of the store and also identifies
the distance from the address given a input. 

## Output

Leaflet map with an address like this address in a popup:


Store Name Crystal Store Location SWC Broadway & Bass Lake Rd Address 5537 W Broadway Ave 
City Crystal State MN Zip Code 55428-3507 Latitude 45.0521539 Longitude -93.364854 County Hennepin County


It also displays distance in a text box like this:
Distance: 1.6503629193180895 miles

## Resources

Leaflet API with open street map link : http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' }
    was used to display the map
    
Photon-Komoot API was used to get the geographical coordinates of the inputted address 
   http://photon.komoot.de/api/?limit=1&q='
   



