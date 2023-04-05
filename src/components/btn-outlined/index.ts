export function initOutlinedBtn(){
    class BtnOutComp extends HTMLElement {
        constructor() {
            super();
            this.render();
        }
        render(){
            const shadow = this.attachShadow({mode: "open"});
            const btn = document.createElement("button");
            const content = this.textContent;
            const style = document.createElement("style");
            style.innerHTML = `
                .button {
                    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');
                    width: 100%;
                    height: 55px;
                    background-color: white;
                    font-family: 'Poppins', sans-serif;
                    font-size: 22px;
                    font-weight: 500;
                    border: 2px solid #000000;
                    border-radius: 4px;
                }

                .button:hover {
                    cursor: pointer;
                }
            `;
            this.style.width =  "100%";
            btn.innerHTML = `${content}`;
            btn.classList.add("button");
            btn.appendChild(style)
            shadow.appendChild(btn);
        }
    }
    customElements.define("btn-out-comp", BtnOutComp);
}