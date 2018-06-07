import Application from '../../base/Application';
const create = (params) => {
    app = new Application(params);




    return app;
}

const get = (appID) => {
    return new Application();
}

export default create;