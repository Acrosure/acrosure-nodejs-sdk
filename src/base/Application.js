import connectAPI from '../util/connectAPI';

export default class Application {
    constructor(params) {
        this.token = params.token;
        this.form = params.form;
    }

    create() {
        return connectAPI('/applications/create', this.token, this.form);
    }

    update() {
        return connectAPI('/applications/update', this.token, this.form);
    }

    cancel() {
        return connectAPI('/applications/cancel', this.token, {});
    }
}