export function initWelcome(params){
    const container = document.createElement("div");
    container.innerHTML = `
        <header-comp></header-comp>
            <div class="welcome-container">
                <title-comp>Te damos la bienvenida a esta página</title-comp>
                <body-p-comp>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur iure voluptas quia accusantium voluptatum aspernatur provident et repudiandae quam veritatis, libero porro sit beatae laboriosam a aut consequatur quidem?</body-p-comp>
                <large-p-comp>Para continuar ingresá tu nombre</large-p-comp>
                <input-text-comp label="Nombre"></input-text-comp>
                <btn-comp class="comenzar">Comenzar</btn-comp>
            </div>
        <footer-comp></footer-comp>
    `;
    const btn = container.getElementsByTagName("btn-comp");
    btn[0].addEventListener('click', () => {
        params.goTo("/step-1");
    });
    return container;
}

