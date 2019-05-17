# StoreNearMeJS

## Overview
This is a basic Leaflet and jQuery App that identifies the nearest big store to any address
given as an input in the text box. 

The app shows the location of the store, gives the address of the store and also identifies
the distance from the address given a input. 

## Example Usasge

Type an address Corcoran St Durham 27701 in the input box


## Output

Leaflet map will show the store location with this address in a popup:

Store Name Durham Store Location SWC Shannon Rd & US Hwy 15-501 Address 4037 Durham Chapel Hill Blvd City Durham State NC Zip Code 27707-2516 Latitude 35.966045 Longitude -78.9587215 County Durham County

It also displays distance to the store from Corcoran St in a text box like this:
Distance: : 3.7359081113501382 


## Resources

Leaflet API with open street map link : http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' }
    was used to display the map
    
Nominatim openstreet map was used to get the geographical coordinates of the store address, with the link: https://nominatim.openstreetmap.org/search/?limit=1&format=json&q=



