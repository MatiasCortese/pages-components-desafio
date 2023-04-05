export function initHeader(){
    class HeaderComp extends HTMLElement {
        constructor() {
            super();
            this.render();
        }
        render(){
            const shadow = this.attachShadow({mode: "open"});
            const div = document.createElement("div");
            const style = document.createElement("style");
            style.innerHTML = `
                .header {
                    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');
                    width: 100%;
                    height: 60px;
                    background-color: #FF8282;
                    font-family: 'Poppins', sans-serif;
                    font-size: 18px;
                    font-weight: 400;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            `;
            div.classList.add("header");
            div.innerHTML = `
                <h3>Header</h3>
            `;
            div.appendChild(style);
            shadow.appendChild(div);
        }
    }
    customElements.define("header-comp", HeaderComp);
}