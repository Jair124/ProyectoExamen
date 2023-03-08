function Purgar(){
    let valorTexto = document.getElementById('valor-texto')
    if(valorTexto.value.length <= 0){
        alert("introduzca un valor")
        return
    }else{
        PurgoMalumAPI(valorTexto.value)
    }
    valorTexto.value = ''
}

function PurgoMalumAPI(valor){
    let contenedorValor = document.getElementById('contenedor-valor')

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '406a1d7d43msh3084c3e8f9bb504p17712ajsn5e60d3f638aa',
            'X-RapidAPI-Host': 'community-purgomalum.p.rapidapi.com'
        }
    };

    let texto = valor
    const url = `https://community-purgomalum.p.rapidapi.com/json?text=${texto}`
    
    fetch(url, options)
    .then(resp => resp.json())
    .then(resp => {
        contenedorValor.innerHTML = `
        <div>
        <h3>${resp.result}</h3>
        </div>
        `
        console.log(resp)
    })
}