const REGISTER = document.getElementById("register");

REGISTER.addEventListener('click', (e) => {
    e.preventDefault();
    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    fetch('http://localhost/backend_api/?url=register',{
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json, text/plain, */*'
        },
        body: JSON.stringify({
            nom: nom,
            prenom: prenom,
            email: email,
            password: password
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => {
        console.log(error)
    })
})

