import Application from '../../base/Application';
import connectAPI from '../../util/connectAPI';

async function get(application_id) {
  const res = await connectAPI('/applications/get', this.token, {
    application_id
  });
  const form = res.data
  return new Application({
    form,
    token: this.token,
    secret: this.secret
  });
}

export default get;