import Application from '../../base/Application'
import connectAPI from '../../util/connectAPI'

async function get(application_id) {
  const res = await connectAPI('/applications/get', {
    application_id
  })
  const data = res.data
  return new Application(data)
}

export default get