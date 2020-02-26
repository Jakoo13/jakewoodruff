

var urlMenu = document.getElementById("goto");
urlMenu.onchange = function() {
    var userOption = this.options[this.selectedIndex];
    if (userOption.value != "nothing") {
        window.open(userOption.value, "_self");
    }
}
