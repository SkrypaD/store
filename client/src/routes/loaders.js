function homeLoader({params}){
    console.log('rolling')
    return fetch('https://pokeapi.co/api/v2/pokemon/ditto').then(response => response.json())
}

function aboutLoader({params}){
    console.log('running')
    return  fetch('http://localhost:5000')
        .then(response => {
            if(!response.ok){
                throw new Error('failed to fetch data')
            }
        return response.json()
        })
        .catch(err => console.log(err))

}

export default {
    homeLoader,
    aboutLoader
}
