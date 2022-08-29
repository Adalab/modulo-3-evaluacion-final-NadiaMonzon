const NameFilter=(props)=>{
    const handleSearch=(ev)=>{
        props.handleFilterName(ev.target.value)
    }

    return (
        <>
        <label htmlFor=""> Write and search for your favourite character</label>
        <input type="text" placeholder="Ej: Hermione Granger" value={props.filterByName} onChange={handleSearch}/>
        </>
        


    )
}

export default NameFilter;