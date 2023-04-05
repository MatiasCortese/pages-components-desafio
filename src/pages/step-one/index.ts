export function initStepOne(params){
    const container = document.createElement("div");
    container.innerHTML = `
        <header-comp></header-comp>
            <div class="step-one-container">
                <title-comp>Necesitamos algunos datos más</title-comp>
                <input-text-comp label="Email"></input-text-comp>
                <input-text-comp label="Comida favorita"></input-text-comp>
                <input-select-comp label="Alguna de estas tres opciones"></input-select-comp>
                <btn-comp>Continuar</btn-comp>
                <btn-out-comp>Volver</btn-out-comp>
            </div>
        <footer-comp></footer-comp>
    `;
    const continuar = container.getElementsByTagName("btn-comp");
    const volver = container.getElementsByTagName("btn-out-comp");
    continuar[0].addEventListener('click', () => {
        params.goTo("/thankyou");
    });
    volver[0].addEventListener('click', () => {
        params.goTo("/welcome");
    });
    return container;
}