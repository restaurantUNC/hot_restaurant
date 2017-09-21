# HOT RESTAURANT

* Description: Basic app demonstrating Node and Express with jQuery.
Our app is made up of two parts: 
1) A front-end set of HTML/CSS/JS pages for entering and viewing data and 
2) A back-end composed of Node/Express and basic JS for storing, updating, and relaying reservation data.


Our Restaurant has just 5 tables available since it's amazingly popular. First five requests get a reservation, every request after that is sent to the waiting list.
* Live Demo: <https://sheltered-crag-31533.herokuapp.com/>

![Hot Restaurant Image](Images/HotRestaurant.png)

## To Install

* Git Clone the repository
* Navigate to the folder where the repository exists using Git Bash or Terminal
* Run the command `npm install` to download the required dependencies
* Then run the command `node server.js` to run the program

## Notes

* This app doesn't have admin handling.
* Don't separate the JavaScript from the HTML in the client-side code. (i.e. Don't use external JavaScript. If you do, you will need an additional line of code to configure the express server to know where the JavaScript is).



## App created by: 

* Devon Wood https://github.com/orgs/restaurantUNC/people/Flakkus35
* Nicholas Allen https://github.com/orgs/restaurantUNC/people/nickallenjr
* Jon Riddick https://github.com/orgs/restaurantUNC/people/jonriddick
* Steve Murphy https://github.com/orgs/restaurantUNC/people/stevemurphy256
