## jsomgchatter

This is a highly sophisticated chat bot package that combines random words and weather information to generate engaging conversations. It provides a `chat` function that returns an object containing weather details and a list of formatted messages.

### How to use

Install the package using npm:

```bash
npm install jsomgchatter

In your Node.js project, use it as follows:

const jsomgchatter = require('jsomgchatter');

jsomgchatter()
    .then((response) => {
        console.log('Weather:', response.weather);
        console.log('Messages:', response.messages);
    })
    .catch((error) => {
        console.error('Error:', error.message);
    });