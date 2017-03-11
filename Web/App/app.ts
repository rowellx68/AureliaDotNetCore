import { autoinject } from "aurelia-framework";
import { Router, RouterConfiguration } from "aurelia-router";
import { AppRouter } from "./routers/app-router";

@autoinject
export class App {
    constructor(private router: AppRouter) {
        
    }

    configureRouter(config: RouterConfiguration, router: Router) {
        this.router.configure(config, router);
    }
}
