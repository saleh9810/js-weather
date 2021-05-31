window.addEventListener('load', () => {
    let long;
    let lat;
    let temparatureDescription = document.querySelector('.temparature-description');
    let temparatureDegree = document.querySelector('.temparature-degree');
    let locationTimezone = document.querySelector('.location-timezone');



    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            console.log(position)
            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const API_KEY ='80f6beefadb22586e031a05ab96c3c7e';
            const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`  

            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data)
                   const {temp} = data.main;
                   const  timezone = data.name;
                   const  {description} = data.weather[0];
                   //Set DOM Elments from API
                    temparatureDegree.textContent = temp;
                    locationTimezone.textContent = timezone
                    temparatureDescription.textContent = description

                });
        });
    }
});