const getDataApi = () =>{
    return fetch('http://hp-api.herokuapp.com/api/characters')
    .then((response)=>response.json())
    .then((data)=>{
        const cleanData= data.map((character)=>{
            return {
                name: character.name,
                species: character.species,
                gender: character.gender,
                house: character.house,
                alive: character.alive,
                image: character.image,
                othername: character.alternate_names,
                id: `${character.name} ${character.actor}`,
            }
            
        });
        return cleanData;

    })
}

export default getDataApi;