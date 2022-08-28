// be809991a40a1db2ee1e4112988c81a1

const talkToAPI = async () => {
    const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Vilnius&APPID=be809991a40a1db2ee1e4112988c81a1', { mode: 'cors' });

    const responseData = await response.json();

    const tempDisplay = document.querySelector('#temp');

    tempDisplay.textContent = Math.floor(responseData.main.temp - 273.15) + '°';
}


export {
    talkToAPI,
}