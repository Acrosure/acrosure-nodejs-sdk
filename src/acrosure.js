'use strict';

import applicationsEndpoint from './resources/applications/all';
import policiesEndpoint from './resources/policies/all';

import base from './base/all';
import util from './util/all';

import Application from './base/Application';

class Acrosure {
  // Class attribute
  static get base() {
    return base
  }
  static get util() {
    return util
  }

  // Instance
  constructor(token, secret, version = 'v1') {
    this.token = token;
    this.secret = secret;
    this.name = token;
    this.version = version;

    // Resource
    Object.assign(this, {
      applications: applicationsEndpoint(this),
      policies: policiesEndpoint(this)
    });
  }
}

export default Acrosure;