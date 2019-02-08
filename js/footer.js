AOS.init();

/* CLOCKS */

function currentTime(cityName) {

    var now = new Date();
    var minutes = now.getMinutes();
    var minutesDegrees = ((minutes / 60) * 360 + 90);
    console.log(cityName);
    console.log(minutes);

    console.log(minutesDegrees);
    var minutesHand = document.querySelector(`[data-city="${cityName}"] .clockmin`);
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;


    var hours = getCityTime(cityName);
    var hoursDegrees = ((hours / 12) * 360 + 90);

    var hoursHand = document.querySelector(`[data-city="${cityName}"] .clockhour`);
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

// console.log(currentTime('skopje'));

var citiesElements = document.querySelectorAll("[data-city]");
var cities = Array.prototype.slice.call(citiesElements).map(n => n.attributes[1].value)
// console.log(cities);

cities.forEach(city => {
    setInterval(currentTime(city), 1000);
});

// setInterval(currentTime(clockwrapper.dataset.city), 1000);

// GET CITY NAME

function getCityTime(cityName) {
    var presentDateUTC = new Date();

    switch (cityName) {
        case 'skopje':
            return presentDateUTC.getUTCHours() - 1;
        case 'moscow':
            return presentDateUTC.getUTCHours() + 3;
        case 'london':
            return presentDateUTC.getUTCHours() + 1;
        case 'newyork':
            return presentDateUTC.getUTCHours() + 5; // treba da e - 4.
        case 'hongkong':
            return presentDateUTC.getUTCHours() + 8;
        case 'sydney':
            return presentDateUTC.getUTCHours() + 11;
        default:
            return presentDateUTC.getUTCHours();
    }
}