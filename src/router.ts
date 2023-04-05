import { initStepOne } from "./pages/step-one";
import { initThankYou } from "./pages/thank-you";
import { initWelcome } from "./pages/welcome";

const routes = [
    {
        path: /\/welcome/,
        component: initWelcome,
    },
    {
        path: /\/step-1/,
        component: initStepOne,
    },
    {
        path: /\/thankyou/,
        component: initThankYou,
    }
];

export function initRouter(container: Element) {
    // En este ejemplo declaramos las funciones dentro del router ya que necesitamos acceso al containeer que llega como parámetro
    function goTo(path){
        history.pushState({}, "", path);
        handleRoute(path);
    }
    function handleRoute(route){
        console.log(`handleRoute recibió una ruta y es ${route}`);
        for (const r of routes){
            if  (r.path.test(route)){
                // Pasamos la función como parámetro. Esto es muy común en algunos frameworks
                const el = r.component({ goTo: goTo});
                if (container.firstChild){
                    container.firstChild.remove();
                }
                container.appendChild(el);
            }
        }
    }
    if (location.pathname == "/") {
        goTo("/welcome");
    } else {
        handleRoute(location.pathname);
    }
    // si no usamos onpopstate, al usar las flechas del navegador cambiará la url pero no el handleRoute ya que esos cambios del state no estan siendo escuchados. Con onpopstate, logramos que lo sean.
    window.onpopstate = function() {
        handleRoute(location.pathname);
    }
}