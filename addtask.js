const REGISTER = document.getElementById("register");

REGISTER.addEventListener('click', (e) => {
    e.preventDefault();
    let nom = document.getElementById("nom").value;
    let description = document.getElementById("description").value;
    let date = document.getElementById("date").value;
    let id = localStorage.getItem("id");

    fetch('http://localhost/backend_api/?url=add_task',{
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json, text/plain, */*'
        },
        body: JSON.stringify({
            nom: nom,
            description: description,
            date: date,
            id: id
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => {
        console.log(error)
    })
})
