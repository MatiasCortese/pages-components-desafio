export function initThankYou(params){
    const container = document.createElement("div");
    container.innerHTML = `
        <header-comp></header-comp>
            <div class="thanks-container">
                <title-comp>Gracias</title-comp>
                <large-p-comp>Toda la información que nos brindaste es muy importante</large-p-comp>
                <btn-comp>De nada</btn-comp>
            </div>
        <footer-comp></footer-comp>
    `;
    return container;
}