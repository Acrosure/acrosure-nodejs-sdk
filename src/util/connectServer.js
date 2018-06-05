const http = require('https');
const querystring = require('querystring')

function connectServer(endpoint, token, data) {
    const postData = JSON.stringify(data);

    const options = {
        hostname: 'api.phantompage.com',
        port: 443,
        path: endpoint,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(postData),
            'Authorization': 'Bearer ' + token
        }
    };

    const req = http.request(options, (res) => {
        console.log(`STATUS: ${res.statusCode}`);
        console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
        res.setEncoding('utf8');
        data = ''
        res.on('data', (chunk) => {
            console.log(`BODY: ${chunk}`);
            data += chunk;
        });
        res.on('end', () => {
            console.log('No more data in response.');
            console.log(JSON.parse(data))
        });
    });

    req.on('error', (e) => {
        console.error(`problem with request: ${e.message}`);
    });

    // write data to request body
    req.write(postData);
    req.end();
}

export default connectServer;