const bod = document.querySelector(".bod");
const footIcons = document.querySelectorAll(".foot a");
const iconClass = "fa-solid fa-hand-holding-heart"; // Classe de l'icône Font Awesome que vous souhaitez afficher

// Crée un élément <i> pour l'icône Font Awesome initiale dans la div "bod"
const initialIconElement = document.createElement("i");
initialIconElement.className = `fas ${iconClass}`;
// bod.querySelector("span").insertAdjacentElement("afterbegin", initialIconElement);
// Hassane Abdel-Razak
// Écouteur d'événement pour chaque icône dans la div "foot"
footIcons.forEach((footIcon) => {
    footIcon.addEventListener("mouseover", () => {
        // Copie l'icône survolée dans la div "bod"
        const iconClone = footIcon.cloneNode(true);
        bod.querySelector("i").replaceWith(iconClone);
    });
});

// Écouteur d'événement pour lorsque la souris quitte la div "foot"
footIcons.forEach((footIcon) => {
    footIcon.addEventListener("mouseout", () => {
        // Restaure l'icône initiale dans la div "bod"
        // Hassane Abdel-Razak
        const initialIconClone = initialIconElement.cloneNode(true);
        bod.querySelector("i").replaceWith(initialIconClone);
    });
});
