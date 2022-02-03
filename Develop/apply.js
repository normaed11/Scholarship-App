// Show income tax upload on yes
function showInput(selectname, classname) {

    var select = document.getElementById(selectname).value;
    var inputs = document.getElementsByClassName(classname);
    if (select == "Yes") {
        for (var i = 0; i < 2; i++) {
            inputs[i].style.display = "block";
        }
    }
    else {
        for (var i = 0; i < 2; i++) {
            inputs[i].style.display = "none";
        }
    }
}