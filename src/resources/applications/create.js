import Application from '../../base/Application';

// function createGen() {
async function create(params, create) {
  app = new Application({
    form: params,
    token
  });
  await app.create()
  return app;
}
// }

function get(appID) {
  return new Application();
}

export default create;