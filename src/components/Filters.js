import NameFilter from './NameFilter';
import HouseFilter from './HouseFilter';

const Filter =(props)=>{
    return (
        <form>
          <NameFilter
          filterByName={props.filterByName}
          handleFilterName={props.handleFilterName} />
          <HouseFilter 
          filterByHouse={props.filterByHouse} 
          handleFilterHouse={props.handleFilterHouse}/>
        </form>
    )
}

export default Filter;