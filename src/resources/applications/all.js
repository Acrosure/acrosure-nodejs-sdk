import create from './create';
import get from './get';

export default ({token,secret}) => ({
  token,
  secret,
  create,
  get
});