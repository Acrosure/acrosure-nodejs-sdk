'use strict';

import applicationsEndpoint from './resources/applications/all';
import policiesEndpoint from './resources/policies/all';

import Application from './base/Application';

class Acrosure {
    constructor(token, secret, name) {
        this._token = token;
        this._secret = secret;
        this.name = name;

        this.Application = class extends Application {
            constructor(params) {
                super(params)
                this.name = 'sub ' + name;
            }
            echo() {
                console.log(this.name)
            }
        }

        this.applications = Object.keys(applicationsEndpoint).map((k) => (applicationsEndpoint[k].bind(this)));
        this.policies = Object.keys(policiesEndpoint).map((k) => (policiesEndpoint[k].bind(this)));

        // Object.assign( this, Object.keys(resources).map((resourceKey, resourceIndex) => (
        //     Object.keys(resources[resourceKey]).maps((endpointKey, endpointIndex) => (resources[resourceKey][endpointKey].bind(this)))
        // )))
    }
}

export default Acrosure;