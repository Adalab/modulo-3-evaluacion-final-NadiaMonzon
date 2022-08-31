import NameFilter from './NameFilter';
import HouseFilter from './HouseFilter';
import StudentFilter from './StudentFilter';

const Filter =(props)=>{
    return (
        <form>
          <NameFilter
          filterByName={props.filterByName}
          handleFilterName={props.handleFilterName} />
          <HouseFilter 
          filterByHouse={props.filterByHouse} 
          handleFilterHouse={props.handleFilterHouse}/>
          <StudentFilter
          filterByStudent={props.filterByStudent}
          handleFilterStudent={props.handleFilterStudent}/>
        </form>
    )
}

export default Filter;