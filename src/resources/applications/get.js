import Application from '../../base/Application'
import callAPI from '../../util/callAPI'

async function get(application_id) {
  const res = await callAPI('/applications/get', {
    application_id
  })
  const data = res.data
  return new Application(data)
}

export default get