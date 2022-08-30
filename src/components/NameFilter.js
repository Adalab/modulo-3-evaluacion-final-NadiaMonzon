const NameFilter=(props)=>{
    const handleSearch=(ev)=>{
        props.handleFilterName(ev.target.value)
    }
    const disableEnterKey = (ev) => {
        if (ev.keyCode === 13) {
            ev.preventDefault();
        }
    }

    return (
        <>
        <label htmlFor=""> Write and search for your favourite character</label>
        <input type="text" placeholder="Ej: Hermione Granger" value={props.filterByName} onChange={handleSearch} onKeyDown={disableEnterKey}/>
        </>
    )
}

export default NameFilter;