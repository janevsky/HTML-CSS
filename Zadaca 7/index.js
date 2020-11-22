function funkcija() {

    document.getElementById("clickedEye").classList.toggle('fa-eye-slash');

    var a = document.getElementById("InputPassword");

    if (a.type === "password") {

        a.type = "text";

    } else {

        a.type = "password";


    }
}