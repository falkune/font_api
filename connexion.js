const REGISTER = document.getElementById("login");

REGISTER.addEventListener('click', (e) => {
    e.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    fetch('http://localhost/backend_api/?url=login',{
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json, text/plain, */*'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
    .then(response => response.json())
    .then(data => storeId(data.data.id))
    .catch(error => {
        console.log(error)
    })
})


function storeId(id){
    localStorage.setItem("id", id);
}