export function initLargeP(){
    class LargePComp extends HTMLElement {
        constructor() {
            super();
            this.render();
        }
        render(){
            const shadow = this.attachShadow({mode: "open"});
            const div = document.createElement("div");
            const content = this.textContent;
            const style = document.createElement("style");
            style.innerHTML = `
                .large-p {
                    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');
                    width: 100%;
                    font-family: 'Poppins', sans-serif;
                    font-size: 22px;
                    font-weight: 500;
                    color: #000000;
                    display: flex;
                    justify-content: center;
                }
            `;
            div.innerHTML = `
                <p>${content}</p>
            `;
            div.appendChild(style)
            div.classList.add("large-p");
            shadow.appendChild(div);
        }
    }
    customElements.define("large-p-comp", LargePComp);
}