'use strict';

import applicationsEndpoint from './resources/applications/all';
import policiesEndpoint from './resources/policies/all';

import base from './base/all';
import util from './util/all';

import Application from './base/Application';

class Acrosure {
    // Class attribute
    static get base() { return base }
    static get util() { return util }

    // Instance
    constructor(token, secret, version = 'v1') {
        this._token = token;
        this._secret = secret;
        this._version = version;

        // Client's class (inherit from class in acrosure.base)
        this.Application = class extends Application {
            constructor(params) {
                super(params);
            }
        };

        // Resource
        this.applications = Object.keys(applicationsEndpoint).map((k) => (applicationsEndpoint[k].bind(this)));
        this.policies = Object.keys(policiesEndpoint).map((k) => (policiesEndpoint[k].bind(this)));

        // Object.assign( this, Object.keys(resources).map((resourceKey, resourceIndex) => (
        //     Object.keys(resources[resourceKey]).maps((endpointKey, endpointIndex) => (resources[resourceKey][endpointKey].bind(this)))
        // )))
    }
}

export default Acrosure;