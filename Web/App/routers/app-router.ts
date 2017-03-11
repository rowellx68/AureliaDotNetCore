import { Router, RouterConfiguration } from "aurelia-router";

export class AppRouter {
    private router: Router;

    configure(config: RouterConfiguration, router: Router) {
        this.router = router;

        config.title = "Web";

        config.map([
            { route: "", redirect: "/dashboard" },
            { route: "dashboard", name: "dashboard", moduleId: "./pages/dashboard/layout-dashboard", title: "Dashboard" }
        ]);
    }
}