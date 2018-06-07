import connectAPI from '../util/connectAPI'

export default class Application {
  constructor({
    token,
    secret,
    form
  }) {
    this.token = token || ''
    this.secret = secret || ''
    this.form = form || {}
    this.id = form.application_id || form.id
  }

  // getter

  console.log(app)
  get status() {
    return this.form.status
  }

  // CRUD method
  async create() {
    if (this.id) {
      throw new Error('Cannot create new application that already has application_id')
    }
    console.log('eiei2')
    const res = await connectAPI('/applications/create', this.token, this.form)
    this.id = res.data.application_id || res.data.id
    console.log('id:', this.id)
    return res
  }

  async update() {
    if (!this.id) {
      throw new Error('Cannot update application that has no application_id')
    }
    return connectAPI('/applications/update', this.token, this.form)
  }

  async confirm() {
    if (!this.id) {
      throw new Error('Cannot confirm application that has no application_id')
    }
    return connectAPI('/applications/confirm', this.secret, {
      application_id: this.id
    })
  }

  async cancel() {
    throw new Error('Application cancelling is unavailable')
    // return connectAPI('/applications/cancel', this.token, {})
  }
}