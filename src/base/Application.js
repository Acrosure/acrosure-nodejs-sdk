import callAPI from '../util/callAPI'

const removeApplicationMethod = (obj) => (
  Object.keys(obj)
  .filter((k) => typeof (obj[k]) !== 'function')
  .reduce((o, k) => {
    o[k] = obj[k]
    return o
  }, {})
)

export default class Application {
  constructor(data) {
    Object.assign(this, data)
    this.id = data.id || data.application_id
  }

  // CRUD method
  async create() {
    if (this.id) {
      throw new Error('Cannot create new application that already has application_id')
    }
    const data = removeApplicationMethod(this)
    const res = await callAPI('/applications/create', data)
    Object.assign(this, res.data)
    this.id = res.data.application_id || res.data.id
    return res
  }

  async save() {
    if (!this.id) {
      throw new Error('Cannot update application that has no application_id')
    }
    const data = removeApplicationMethod(this)
    const res = await callAPI('/applications/update', data)
    Object.assign(this, res.data)
    return res
  }

  async confirm() {
    if (!this.id) {
      throw new Error('Cannot confirm application that has no application_id')
    }
    return callAPI('/applications/confirm', {
      application_id: this.id
    })
  }

  async cancel() {
    throw new Error('Application cancelling is unavailable')
    // return callAPI('/applications/cancel', this.token, {})
  }
}