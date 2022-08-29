const HouseFilter = (props)=>{

    const handleFilterHouse=(ev)=>{
        props.handleFilterHouse(ev.target.value)
        }

    return (
        <>
        <label for="houseFilter"> House filter</label>
            <select name="houseFilter" id="houseFilter" 
            value={props.filterByHouse}
            onChange={handleFilterHouse}>
                <option value="Gryffindor">Gryffindor</option>
                <option value="Slytherin">Slytherin</option>
                <option value="Ravenclaw">Ravenclaw</option>
                <option value="Hufflepuff">Hufflepuff</option>
                <option value="all">All houses</option>
                <option value="">Unknown</option>
            </select>
        </>
        
    )
}

export default HouseFilter;