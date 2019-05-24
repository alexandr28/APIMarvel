const STATUS_OK = 200
const STATUS_CREATED = 201
const STATUS_UNAUTHORIZED = 401
const STATUS_NOTFOUND = 404
const STATUS_INTERNAL_SERVER_ERROR = 500

const hash = 'hash'
const apiKey = 'key'
const url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=iron%20man&limit=20&apikey=${apiKey}&hash=${hash}`

btn.addEventListener('click', () => {
    loadComics()
})

const loadComics = async () => {
    const response = await fetch(url)
    switch (response.status) {
        case STATUS_OK:
            const datos = await response.json()
            draw(datos.data.results)
        case STATUS_NOTFOUND:
            console.log("no se encontro información")
            break;
    }
}

const draw = data => {
    const container = document.createElement('div')
    data.forEach(comic => {
        const comicHTML = `
        <div>
            <h2>${comic.name}</h2>
            <img src="${comic.thumbnail.path}/portrait_incredible.${comic.thumbnail.extension}" alt="${comic.name}">
        </div>`
        container.insertAdjacentHTML('beforeend', comicHTML)
    })
    mycontent.appendChild(container)
}