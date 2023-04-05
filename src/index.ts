import { initRouter } from "./router";
import { initBodyP } from "./components/body-p";
import { initBtn } from "./components/btn";
import { initOutlinedBtn } from "./components/btn-outlined";
import { initFooter } from "./components/footer";
import { initHeader } from "./components/header";
import { initInputText } from "./components/input";
import { initLargeP } from "./components/large-p";
import { initInputSelect } from "./components/select";
import { initSubtitle } from "./components/subtitle";
import { initTitle } from "./components/title";

(function(){
    initBodyP();
    initBtn();
    initOutlinedBtn();
    initFooter();
    initHeader();
    initInputSelect();
    initInputText();
    initLargeP();
    initSubtitle();
    initTitle();
    const root = document.querySelector(".root");
    initRouter(root as any);
})();