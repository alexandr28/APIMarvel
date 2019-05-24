const btn = document.getElementById('btn')
const mycontent = document.getElementById('mycontent')


const showMarvel = async () => {
    const hash = 'hash'
    const apiKey = 'key'
    const url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=iron%20man&limit=20&apikey=${apiKey}&hash=${hash}`
    const request = {
        method: 'GET',
        url: url
    }
    const response = await ajax(request)
    switch (response.status) {
        case 200:
            console.log(JSON.parse(response.responseText))
            draw(JSON.parse(response.responseText).data.results)
            break;
        case 400:
            setText('Error de cliente ' + response.status)
            break
        default:
            setText('Error desconocido ' + response.status)
    }
}

const draw = data => {
    const fragment = document.createDocumentFragment()
    data.forEach(comic => {
        const container = document.createElement('div')
        const title = document.createElement('h2')
        const image = document.createElement('img')
        title.textContent = comic.name
        image.src = `${comic.thumbnail.path}/portrait_incredible.${comic.thumbnail.extension}`
        container.appendChild(title)
        container.appendChild(image)
        fragment.appendChild(container)
    })
    mycontent.appendChild(fragment)
}
btn.addEventListener('click', e => {
    showMarvel()
})