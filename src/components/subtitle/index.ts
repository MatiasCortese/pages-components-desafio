export function initSubtitle(){
    class SubtitleComp extends HTMLElement {
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
                .subtitle {
                    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');
                    width: 100%;

                    font-family: 'Poppins', sans-serif;
                    font-size: 38px;
                    font-weight: 700;
                    color: #000000;
                }
            `;
            div.innerHTML = `
                <h2>${content}</h2>
            `;
            div.appendChild(style)
            div.classList.add("subtitle");
            shadow.appendChild(div);
        }
    }
    customElements.define("subtitle-comp", SubtitleComp);
}