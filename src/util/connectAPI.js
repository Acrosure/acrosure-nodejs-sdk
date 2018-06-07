import constant from '../constant';

const http = require('https')
const querystring = require('querystring')

function connectAPI(endpoint, auth, data) {

  return new Promise((resolve, reject) => {
    const postData = JSON.stringify(data)

    const options = {
      hostname: constant.host || 'localhost',
      port: constant.port || 443,
      path: endpoint,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData),
        'Authorization': 'Bearer ' + auth
      }
    }

    const req = http.request(options, (res) => {
      res.setEncoding('utf8')
      data = ''
      res.on('data', (chunk) => {
        data += chunk
      })
      res.on('end', () => {
        resolve(JSON.parse(data))
      })
    })

    req.on('error', (err) => {
      reject(err)
    })

    req.write(postData)
    req.end()
  })
}

export default connectAPI