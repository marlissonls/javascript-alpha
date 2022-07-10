import homePage from "./modules/home.js";
import brigadeirosPage from "./modules/brigadeiros.js";
import cupcakesPage from "./modules/cupcakes.js";
import docesPage from "./modules/doces.js";

function routeChange(route) {
    const state = "";
    const title = "";
    var routeChangeEvent = new CustomEvent("onroutechange", {
        detail: {
            route
        }
    });
    document.dispatchEvent(routeChangeEvent);
    return history.pushState(state, title, route);
}

let routes = {};

function route(req, res) {
    if (res) {
        routes[req] = res;
        return true;
    } else if (routes[req]){
        routes[req]();
        return true;
    }
    return false;
}

window.routeChange = routeChange;

const items = document.querySelectorAll(".item");

items.forEach( (item) => {
    item.addEventListener("click", function() {
        switch (parseInt(this.dataset.valor)) {
            case 1:
                routeChange("/brigadeiros");
                break;
            case 2:
                routeChange("/cupcakes");
                break;
            case 3:
                routeChange("/doces");
                break;
            default:
                routeChange("/");
        }
    });
});

// Register routes
route("/", homePage);
route("/brigadeiros", brigadeirosPage);
route("/cupcakes", cupcakesPage);
route("/doces", docesPage);

// Add event listener for route change
window.document.addEventListener("onroutechange", function(e) { 
    route(e.detail.route);
});

// Initial route
routeChange("/");