// be809991a40a1db2ee1e4112988c81a1

const talkToAPI = async (city) => {
    if (city == undefined || city == 'undefined') {
        city = 'Vilnius';
    }
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=be809991a40a1db2ee1e4112988c81a1`, { mode: 'cors' });

    const responseData = await response.json();

    const tempDisplay = document.querySelector('#temp');

    tempDisplay.textContent = Math.floor(responseData.main.temp - 273.15) + '°';
    console.log(city);
}

const sendCity = () => {
    const input = document.querySelector('input').value;
    const cityPlace = document.querySelector('#city');
    cityPlace.textContent = input;
    talkToAPI(input);
}


export {
    talkToAPI,
    sendCity,
}