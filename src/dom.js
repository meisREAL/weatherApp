import { talkToAPI, sendCity } from "./apiFetch";

const mainWindow = (function () {
    const contentWindow = document.querySelector('#content');

    const makeLayout = () => { //creates main layout for wether app (design?)
        const mainDiv = document.createElement('div');
        mainDiv.setAttribute('id', 'mainDiv');
        const topHalfCard = document.createElement('div')
        topHalfCard.setAttribute('id', 'topHalf');
        const botHalfCard = document.createElement('div');
        botHalfCard.setAttribute('id', 'botHalf');

        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('id', 'locationInput');
        topHalfCard.appendChild(input);

        const searchBtn = document.createElement('div');
        searchBtn.setAttribute('id', 'searchBtn');
        searchBtn.textContent = 'Search';
        searchBtn.onclick = function () {
            sendCity();
        }
        topHalfCard.appendChild(searchBtn);

        const showCity = document.createElement('div');
        showCity.setAttribute('id', 'city');
        showCity.textContent = 'Vilnius';
        botHalfCard.appendChild(showCity);

        const showTemp = document.createElement('div');
        showTemp.setAttribute('id', 'temp');
        showTemp.textContent = '24';
        talkToAPI();
        botHalfCard.appendChild(showTemp);

        mainDiv.appendChild(topHalfCard);
        mainDiv.appendChild(botHalfCard);
        contentWindow.appendChild(mainDiv);
    }

    return {
        //return stuff here
        makeLayout
    }
}());

export {
    mainWindow,
}