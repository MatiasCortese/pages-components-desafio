const n="/pages-components-desafio";function e(){return location.host.includes("github.io")}const t=[{path:/\/welcome/,component:function(n){const e=document.createElement("div");return e.innerHTML='\n        <header-comp></header-comp>\n            <div class="welcome-container">\n                <title-comp>Te damos la bienvenida a esta página</title-comp>\n                <body-p-comp>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur iure voluptas quia accusantium voluptatum aspernatur provident et repudiandae quam veritatis, libero porro sit beatae laboriosam a aut consequatur quidem?</body-p-comp>\n                <large-p-comp>Para continuar ingresá tu nombre</large-p-comp>\n                <input-text-comp label="Nombre"></input-text-comp>\n                <btn-comp class="comenzar">Comenzar</btn-comp>\n            </div>\n        <footer-comp></footer-comp>\n    ',e.getElementsByTagName("btn-comp")[0].addEventListener("click",(()=>{n.goTo("/step-1")})),e}},{path:/\/step-1/,component:function(n){const e=document.createElement("div");e.innerHTML='\n        <header-comp></header-comp>\n            <div class="step-one-container">\n                <title-comp>Necesitamos algunos datos más</title-comp>\n                <input-text-comp label="Email"></input-text-comp>\n                <input-text-comp label="Comida favorita"></input-text-comp>\n                <input-select-comp label="Alguna de estas tres opciones"></input-select-comp>\n                <btn-comp>Continuar</btn-comp>\n                <btn-out-comp>Volver</btn-out-comp>\n            </div>\n        <footer-comp></footer-comp>\n    ';const t=e.getElementsByTagName("btn-comp"),o=e.getElementsByTagName("btn-out-comp");return t[0].addEventListener("click",(()=>{n.goTo("/thankyou")})),o[0].addEventListener("click",(()=>{n.goTo("/welcome")})),e}},{path:/\/thankyou/,component:function(n){const e=document.createElement("div");return e.innerHTML='\n        <header-comp></header-comp>\n            <div class="thanks-container">\n                <title-comp>Gracias</title-comp>\n                <large-p-comp>Toda la información que nos brindaste es muy importante</large-p-comp>\n                <btn-comp>De nada</btn-comp>\n            </div>\n        <footer-comp></footer-comp>\n    ',e}}];!function(){!function(){class n extends HTMLElement{constructor(){super(),this.render()}render(){const n=this.attachShadow({mode:"open"}),e=document.createElement("div"),t=this.textContent,o=document.createElement("style");o.innerHTML="\n                .body-p {\n                    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');\n                    width: 100%;\n                    font-family: 'Poppins', sans-serif;\n                    font-size: 18px;\n                    font-weight: 400;\n                    color: #000000;\n                }\n            ",e.innerHTML=`\n                <p>${t}</p>\n            `,e.appendChild(o),e.classList.add("body-p"),n.appendChild(e)}}customElements.define("body-p-comp",n)}(),function(){class n extends HTMLElement{constructor(){super(),this.render()}render(){const n=this.attachShadow({mode:"open"}),e=document.createElement("button"),t=this.textContent,o=document.createElement("style");o.innerHTML="\n                .button {\n                    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');\n                    width: 100%;\n                    height: 55px;\n                    background-color: #9CBBE9;\n                    font-family: 'Poppins', sans-serif;\n                    font-size: 22px;\n                    font-weight: 500;\n                    border-radius: 4px;\n                    border: none;\n                }\n\n                .button:hover {\n                    cursor: pointer;\n                }\n            ",this.style.width="100%",e.innerHTML=`${t}`,e.classList.add("button"),e.appendChild(o),n.appendChild(e)}}customElements.define("btn-comp",n)}(),function(){class n extends HTMLElement{constructor(){super(),this.render()}render(){const n=this.attachShadow({mode:"open"}),e=document.createElement("button"),t=this.textContent,o=document.createElement("style");o.innerHTML="\n                .button {\n                    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');\n                    width: 100%;\n                    height: 55px;\n                    background-color: white;\n                    font-family: 'Poppins', sans-serif;\n                    font-size: 22px;\n                    font-weight: 500;\n                    border: 2px solid #000000;\n                    border-radius: 4px;\n                }\n\n                .button:hover {\n                    cursor: pointer;\n                }\n            ",this.style.width="100%",e.innerHTML=`${t}`,e.classList.add("button"),e.appendChild(o),n.appendChild(e)}}customElements.define("btn-out-comp",n)}(),function(){class n extends HTMLElement{constructor(){super(),this.render()}render(){const n=this.attachShadow({mode:"open"}),e=document.createElement("div"),t=document.createElement("style");e.innerHTML="\n                <p>Footer</p>\n            ",t.innerHTML="\n                .footer {\n                    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');\n                    width: 100%;\n                    height: 233px;\n                    background-color: #FFA0EA;\n                    font-family: 'Poppins', sans-serif;\n                    font-size: 22px;\n                    font-weight: 500;\n                    display: flex;\n                    align-items: center;\n                    justify-content: center;\n                }\n            ",e.classList.add("footer"),e.appendChild(t),n.appendChild(e)}}customElements.define("footer-comp",n)}(),function(){class n extends HTMLElement{constructor(){super(),this.render()}render(){const n=this.attachShadow({mode:"open"}),e=document.createElement("div"),t=document.createElement("style");t.innerHTML="\n                .header {\n                    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');\n                    width: 100%;\n                    height: 60px;\n                    background-color: #FF8282;\n                    font-family: 'Poppins', sans-serif;\n                    font-size: 18px;\n                    font-weight: 400;\n                    display: flex;\n                    align-items: center;\n                    justify-content: center;\n                }\n            ",e.classList.add("header"),e.innerHTML="\n                <h3>Header</h3>\n            ",e.appendChild(t),n.appendChild(e)}}customElements.define("header-comp",n)}(),function(){class n extends HTMLElement{constructor(){super(),this.render()}render(){const n=this.attachShadow({mode:"open"}),e=this.getAttribute("label"),t=(this.getAttribute("value"),document.createElement("div")),o=document.createElement("style");t.innerHTML=`\n                <label for="tool-select" class="label">${e}</label>\n                <select name="opciones" id="tool-select" class="select">\n                    <option value="piedras">Piedra</option>\n                    <option value="papel">Papel</option>\n                    <option value="tijera">Tijera</option>\n                </select>\n            `,o.innerHTML="\n                .input {\n                    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');\n                    width: 100%;\n                    font-family: 'Poppins', sans-serif;\n                    font-size: 18px;\n                    font-weight: 500;\n                    display: flex;\n                    flex-direction: column;\n                    align-items: flex-start;\n                    justify-content: center;\n                }\n                \n                .select {\n                    width: 100%;\n                    height: 55px;\n                    border: 2px solid #000000;\n                    border-radius: 4px;\n                }\n            ",this.style.width="100%",t.appendChild(o),t.classList.add("input"),n.appendChild(t)}}customElements.define("input-select-comp",n)}(),function(){class n extends HTMLElement{constructor(){super(),this.render()}render(){const n=this.attachShadow({mode:"open"}),e=this.getAttribute("label"),t=document.createElement("div"),o=document.createElement("style");t.innerHTML=`\n                <label class="label">${e}</label>\n                <input class="input" type="text" placeholder="Ingresá tu ${e}"/>\n            `,o.innerHTML="\n                .input {\n                    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');\n                    width: 100%;\n                    height: 55px;\n                    font-family: 'Poppins', sans-serif;\n                    font-size: 18px;\n                    font-weight: 500;\n                    display: flex;\n                    flex-direction: column;\n                    align-items: flex-start;\n                    justify-content: center;\n                }\n\n                div {\n                    width: 100%;\n                }\n            ",this.style.width="100%",t.appendChild(o),t.classList.add("input"),n.appendChild(t)}}customElements.define("input-text-comp",n)}(),function(){class n extends HTMLElement{constructor(){super(),this.render()}render(){const n=this.attachShadow({mode:"open"}),e=document.createElement("div"),t=this.textContent,o=document.createElement("style");o.innerHTML="\n                .large-p {\n                    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');\n                    width: 100%;\n                    font-family: 'Poppins', sans-serif;\n                    font-size: 22px;\n                    font-weight: 500;\n                    color: #000000;\n                    display: flex;\n                    justify-content: center;\n                }\n            ",e.innerHTML=`\n                <p>${t}</p>\n            `,e.appendChild(o),e.classList.add("large-p"),n.appendChild(e)}}customElements.define("large-p-comp",n)}(),function(){class n extends HTMLElement{constructor(){super(),this.render()}render(){const n=this.attachShadow({mode:"open"}),e=document.createElement("div"),t=this.textContent,o=document.createElement("style");o.innerHTML="\n                .subtitle {\n                    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');\n                    width: 100%;\n\n                    font-family: 'Poppins', sans-serif;\n                    font-size: 38px;\n                    font-weight: 700;\n                    color: #000000;\n                }\n            ",e.innerHTML=`\n                <h2>${t}</h2>\n            `,e.appendChild(o),e.classList.add("subtitle"),n.appendChild(e)}}customElements.define("subtitle-comp",n)}(),function(){class n extends HTMLElement{constructor(){super(),this.render()}render(){const n=this.attachShadow({mode:"open"}),e=document.createElement("div"),t=this.textContent,o=document.createElement("style");o.innerHTML="\n                .title {\n                    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');\n                    width: 100%;\n                    font-family: 'Poppins', sans-serif;\n                    font-size: 42px;\n                    font-weight: 700;\n                    color: #000000;\n                }\n\n                h2 {\n                    width: 100%;\n                }\n            ",e.innerHTML=`\n                <h2>${t}</h2>\n            `,e.appendChild(o),e.classList.add("title"),n.appendChild(e)}}customElements.define("title-comp",n)}();!function(o){function s(t){const o=e()?n+t:t;history.pushState({},"",o),i(o)}function i(i){console.log(`handleRoute recibió una ruta y es ${i}`);const a=e()?i.replace(n,""):i;for(const n of t)if(n.path.test(a)){const e=n.component({goTo:s});o.firstChild&&o.firstChild.remove(),o.appendChild(e)}}"/"==location.pathname||location.host.includes("github.io")?s("/welcome"):i(location.pathname),window.onpopstate=function(){i(location.pathname)}}(document.querySelector(".root"))}();
//# sourceMappingURL=index.0af49c22.js.map