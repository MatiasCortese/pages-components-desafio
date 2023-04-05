export function initInputText(){
    class InputTextComp extends HTMLElement {
        constructor() {
            super();
            this.render();
        }
        render(){
            const shadow = this.attachShadow({mode: "open"});
            const label = this.getAttribute("label");
            const div = document.createElement("div"); 
            const style = document.createElement("style");
            div.innerHTML = `
                <label class="label">${label}</label>
                <input class="input" type="text" placeholder="Ingresá tu ${label}"/>
            `;
            style.innerHTML = `
                .input {
                    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');
                    width: 100%;
                    height: 55px;
                    font-family: 'Poppins', sans-serif;
                    font-size: 18px;
                    font-weight: 500;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: center;
                }

                div {
                    width: 100%;
                }
            `;
            this.style.width =  "100%";
            div.appendChild(style);
            div.classList.add("input");
            shadow.appendChild(div);
        }
    }
    customElements.define("input-text-comp", InputTextComp);
}