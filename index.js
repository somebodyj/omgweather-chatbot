const axios = require('axios');
const moment = require('moment');
const randomWords = require('random-words');
const _ = require('lodash');

function getRandomMessage() {
    return randomWords({ min: 1, max: 5, join: ' ' });
}

async function getWeather() {
    const response = await axios.get('https://api.open-meteo.com/weather');
    return response.data;
}

function formatMessage(message) {
    return `[${moment().format('MMMM Do YYYY, h:mm:ss a')}] ${message}`;
}

function generateResponse() {
    const messages = _.times(_.random(1, 5), getRandomMessage);
    return messages.map(formatMessage);
}

function chat() {
    const weatherPromise = getWeather();
    const messages = generateResponse();

    return Promise.all([weatherPromise, ...messages])
        .then(([weather, ...formattedMessages]) => {
            return {
                weather,
                messages: formattedMessages,
            };
        });
}

module.exports = chat;
