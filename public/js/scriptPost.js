const persona = {
    name: document.getElementById('name').value,
    lastname: document.getElementById('lastname').value,
    age: parseInt(document.getElementById('age').value, 10),
    active: document.getElementById('active'.checked)
}

// clave= valor&clave=valor

const myHeaders = new Headers()
myHeaders.append('Content-type', 'application/json')
myHeaders.append('Authorization', 'user secrectkey')
const myConfig = {
    method: 'POST',
    headers: myHeaders,
    body: persona
}

fetch('/la-url-de-mi-api', myConfig)
    .then(Response => {
        Response.json
    }).then(response => {
        draw(response.data)
    })