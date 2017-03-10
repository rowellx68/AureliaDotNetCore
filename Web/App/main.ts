import { Aurelia } from "aurelia-framework";
declare const IS_DEV_BUILD: boolean; // The value is supplied by Webpack during the build

export function configure(app: Aurelia) {

    app.use.standardConfiguration();

    if (IS_DEV_BUILD) {
        app.use.developmentLogging();
    }

    app.start().then(a => { a.setRoot(); });
}
