import Application from '../../base/Application'

// function createGen() {
async function create(data) {
  const app = new Application(data)
  await app.create()
  return app
}
// }

export default create