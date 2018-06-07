import Application from '../../base/Application'

// function createGen() {
async function create(params) {
  const app = new Application({
    form: params,
    token: this.token,
    secret: this.secret
  })
  await app.create()
  return app
}
// }

export default create