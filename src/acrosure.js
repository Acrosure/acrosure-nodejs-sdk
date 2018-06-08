'use strict'

import classes from './base/all'
import resources from './resources/all'


const setToken = (token) => {
  global.ACROSURE_NODEJS_SDK_TOKEN = token
}

module.exports = Object.assign({
  classes,
  setToken
}, resources)