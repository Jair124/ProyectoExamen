const nombre = document.getElementById('nombre')
let veamos = []

document.addEventListener('DOMContentLoaded', () =>{
    muestranombre()
})

const muestranombre = ()=>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '406a1d7d43msh3084c3e8f9bb504p17712ajsn5e60d3f638aa',
            'X-RapidAPI-Host': 'countries-cities.p.rapidapi.com'
        }
    };
    
    fetch('https://countries-cities.p.rapidapi.com/location/country/list', options)
        .then(response => response.json())
        .then(response => {
            veamos = response
            vernombre()
        })
        .catch(err => console.error(err));
}

const vernombre = () =>{
    veamos.forEach((lugar)=>{
        nombre.querySelector('nombre').setAttribute('countries')
    })
}