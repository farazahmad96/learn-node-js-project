const internals = require('./internals');
// import { send } from './internals/request.mjs';
// import { read } from './internals/response.mjs';
const { REQUEST_TIMEOUT } = require('./internals/request.mjs');

function makeRequest(url, data) {
    send(url, data);
    return read();
}

const responseData = makeRequest('https://google.com', 'hello');
console.log(responseData);