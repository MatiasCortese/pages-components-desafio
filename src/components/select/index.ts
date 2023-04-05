export function initInputSelect(){
    class InputSelectComp extends HTMLElement {
        constructor() {
            super();
            this.render();
        }
        render(){
            const shadow = this.attachShadow({mode: "open"});
            const label = this.getAttribute("label");
            const value = this.getAttribute("value");
            const div = document.createElement("div"); 
            const style = document.createElement("style");
            div.innerHTML = `
                <label for="tool-select" class="label">${label}</label>
                <select name="opciones" id="tool-select" class="select">
                    <option value="piedras">Piedra</option>
                    <option value="papel">Papel</option>
                    <option value="tijera">Tijera</option>
                </select>
            `;
            style.innerHTML = `
                .input {
                    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');
                    width: 100%;
                    font-family: 'Poppins', sans-serif;
                    font-size: 18px;
                    font-weight: 500;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: center;
                }
                
                .select {
                    width: 100%;
                    height: 55px;
                    border: 2px solid #000000;
                    border-radius: 4px;
                }
            `;
            this.style.width = "100%";
            div.appendChild(style);
            div.classList.add("input");
            shadow.appendChild(div);
        }
    }
    customElements.define("input-select-comp", InputSelectComp);
}