function generateForm() { // definiranje na funkcijata
    //variable
    //x = 1

    var a

    console.log(a) // undefined

    a = 7

    console.log(a) // 7

    var container = document.getElementById("registrationForm") // sozdavanje promenliva "container" za povikuvanje na html element <div id="registrationForm"> </div>

    var usernameInput = document.createElement("input") // napravi element <input/> 

    usernameInput.setAttribute("id", "username") // postavi atributa na usernameInput sto e *id* so *username*
    usernameInput.setAttribute("type", "text") // postavi atributa na usernameInput sto e *type* so *text*
    usernameInput.setAttribute("placeholder", "Username") // postavi atributa na usernameInput sto e *placeholder* so *Username* primer  <input placeholder="Username"></input>

    // Povtoruvanje na istiot princip od gore no za drug input element *password*

    var passwordInput = document.createElement("input")

    passwordInput.setAttribute("placeholder", "Password")
    passwordInput.setAttribute("id", "password")
    passwordInput.setAttribute("type", "password")

    var button = document.createElement("button")
    var text = document.createTextNode("Sign Up")

    button.appendChild(text)

    button.className = "btn btn-success" // treba bootstrap za ova, da se smeni stilot na kopceto

    container.appendChild(usernameInput)
    container.appendChild(passwordInput)
    container.appendChild(button)

    //usernameInput nema " " zatoa sto e promenliva , ne e tekst // PROMENLIVITE VO VS CODE SE SO PLAVO!

} // zavrsuvanje so  definiranje na funkcijata

function deleteForm() { // definiranje na forma na click na button

    var parent = document.getElementById("registrationForm") //definiranje na promenliva so ime parnet za id registationForm vo html

    var child = document.getElementById("password") // definiranje na promeliva child za elementot so id password vo html

    parent.removeChild(child) // izbrisi go parent odnosno registationForm
}

generateForm()

// povikuvanje na funkcija *dokolku go izbriseme button od html za da ne e onclick*