import { Dashboard } from "../modules/dashboard.js";
import { Record } from "../modules/record.js";
import { Statistics } from "../modules/statistics.js";
import { ExportModule } from "../modules/export.js";

export const Router = {

    init() {
        this.load();

        window.addEventListener("hashchange", () => {
            this.load();
        });
    },

    load() {

        const view = document.getElementById("view");
        const hash = location.hash || "#dashboard";

        switch (hash) {

            case "#dashboard":
                view.innerHTML = Dashboard.render();
                break;

            case "#record":
                view.innerHTML = Record.render();
                break;

            case "#statistics":
                view.innerHTML = Statistics.render();
                break;

            case "#export":
                view.innerHTML = ExportModule.render();
                break;

            default:
                location.hash = "#dashboard";
        }

    }

};