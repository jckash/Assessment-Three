

function getrandomRestaurant() {
    var restaurants = ["Golden Lamb", "Lot No 1 Coffee", "Meadowlark", "Wheat Penny", "Sueno"];

    var randomIndex = Math.floor(Math.random() * restaurants.length);
    var randomRestaurant = restaurants[randomIndex];
    alert("Get on over to:" + randomRestaurant);
    
}

let restaurantButton = document.querySelector("#restaurantButton");

restaurantButton.addEventListener("click", getrandomRestaurant);