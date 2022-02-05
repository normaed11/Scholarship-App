// get and display local storage values
var data = [];
if (localStorage.getItem("info")) {
    var inputs = document.querySelectorAll("div[contenteditable]");
    data = JSON.parse(localStorage.getItem("info"));
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].innerText = data[i]

    }
    total();

}
// saving inputs to local storoge 
function saveData() {
    var inputs = document.querySelectorAll("div[contenteditable]");

    for (var i = 0; i < inputs.length; i++) {
        data[i] = inputs[i].innerText;
    }
    localStorage.setItem("info", JSON.stringify(data));
    total();
}



// calulating the point totals for each value
function total() {

}
// display point value onclick
var rows = []

var points = document.querySelectorAll("#matrix div[contenteditable]");
for (var i = 0; i < points.length; i++) {
    points[i].addEventListener("click", function (event) {
        var currentrow = [...document.querySelectorAll("div[data-value='" + event.target.getAttribute("data-value") + "']")].indexOf(event.target);
        for (var i = 0; i < 5; i++) {

        }

        if (event.target.innerText == "") {
            event.target.innerText = (event.target.getAttribute("data-value"))
        }
        else {
            event.target.innerText = "";
        }

    });
}







