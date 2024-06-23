function clearIn(){
    window.location.href="./si.html"
}

function clearUp(){
    window.location.href="./su.html"
}

let name = [];
let password = [];

function submitUp() {
    const inputName = document.querySelector("#name").value;
    name.push(inputName);

    const inputPassword = document.querySelector("#password").value;
    password.push(inputPassword);

    alert("Name: " + inputName);
}
