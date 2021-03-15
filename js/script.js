//se toma id del menu y se aplica un escuchador de evéntos al dar click
document.getElementById("icon-menu").addEventListener("click", mostrar_menu);

//Función que se aplica al dar click en el id icon menu
function mostrar_menu() {
  //Se toma el id de contenido de la página y se aplica toggle para añadir la nueva clase
  document
    .getElementById("move-content")
    .classList.toggle("move-container-all");
  //Se toma el id del menu y se aplica el movimiento con toggle
  document.getElementById("show-menu").classList.toggle("show-lateral");
}
