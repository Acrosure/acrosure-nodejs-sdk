import constant from '../constant';

const http = require('https')
const querystring = require('querystring')

const connectAPI = (endpoint, data) => {

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
        'Authorization': 'Bearer ' + global.ACROSURE_NODEJS_SDK_TOKEN 
      }
    }

    console.log("token:", global.ACROSURE_NODEJS_SDK_TOKEN)

    const req = http.request(options, (res) => {
      res.setEncoding('utf8')
      data = ''
      res.on('data', (chunk) => {
        data += chunk
      })
      res.on('end', () => {
        const response = JSON.parse(data)
        if(response.status === 'ok'){
          resolve(response)
        }
        reject(new Error(response.message))
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