export function initFooter(){
    class FooterComp extends HTMLElement {
        constructor() {
            super();
            this.render();
        }
        render(){
            const shadow = this.attachShadow({mode: "open"});
            const div = document.createElement("div");
            const style = document.createElement("style");
            div.innerHTML = `
                <p>Footer</p>
            `;
            style.innerHTML = `
                .footer {
                    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');
                    width: 100%;
                    height: 233px;
                    background-color: #FFA0EA;
                    font-family: 'Poppins', sans-serif;
                    font-size: 22px;
                    font-weight: 500;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            `;
            div.classList.add("footer");
            div.appendChild(style);
            shadow.appendChild(div);
        }
    }
    customElements.define("footer-comp", FooterComp);
}