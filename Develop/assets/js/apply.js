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

// var answer = localStorage.key(1); will retrieve the 2nd item in local storage

// saving form to local storage with button
// form.addEventListener("submit", (e) => {
//     // Prevent page refresh
//     e.preventDefault();
//     nameStorage.push(nameInput.value);
//     localStorage.setItem("name", JSON.stringify(nameInput).value);
//     console.log(localStorage);
// });


// function storeInfo() {
//     let name = document.getElementById("name").value;
//     let photo = document.getElementById("photo").value;
//     let bod = document.getElementById("bod").value;
//     let address = document.getElementById("address").value;
//     let city = document.getElementById("city").value;
//     let state = document.getElementById("state").value;
//     let zipcode = document.getElementById("zipcode").value;
//     let homephone = document.getElementById("homephone").value;
//     let mobilephone = document.getElementById("mobilephone").value;
//     let email = document.getElementById("email").value;

//     const form = {
//         name: name,
//         photo: photo,
//         bod: bod,
//         address: address,
//         city: city,
//         state: state,
//         zipcode: zipcode,
//         homephone: homephone,
//         mobilephone: mobilephone,
//         email: email,
//     }
    
//     window.localStorage.setItem(key, JSON.stringify(form));
//     console.log(window.localStorage);
// }

// window.onload = function() {
//     document.getElementById("form").onsubmit = storeInfo
// }