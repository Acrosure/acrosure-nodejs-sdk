import connectAPI from '../util/connectAPI';

export default class Application {
    constructor(params) {
        this.token = params.token;
        this.form = params.form;
        this.id = this.form.application_id || this.form.id;
    }

    async create() {
        if (this.id) {
            throw new Error("Cannot create new application that already has application_id");
        }
        const res = await connectAPI('/applications/create', this.token, this.form);
        this.id = res.data.application_id || res.data.id;
        return res;
    }

    async update() {
        if (!this.id) {
            throw new Error("Cannot update application that has no application_id");
        }
        return connectAPI('/applications/update', this.token, this.form);
    }

    async cancel() {
        return connectAPI('/applications/cancel', this.token, {});
    }
}