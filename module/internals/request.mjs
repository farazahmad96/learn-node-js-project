const REQUEST_TIMEOUT = 500;

function encrypt() {
    return 'encryoted data';
}

function send(url, data) {
    const encryotedData = encrypt(data);
    console.log(`Sending ${encryotedData} to ${url}`);
}

export {
    REQUEST_TIMEOUT,
    send,
}

console.log('Hello from request.js');