const StudentFilter =(props)=>{

    const handleFilterStudent=(ev)=>{
        props.handleFilterStudent(ev.target.checked);
    }

    return(
        <>

        <label>Student</label>
        <input type='checkbox'
        name="student"
        value={props.filterByStudent}
        onClick={handleFilterStudent}/>

        </>
    )
}

export default StudentFilter;