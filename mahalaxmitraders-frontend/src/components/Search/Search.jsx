import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { getProductsBySearchAndFilters } from '../../services/ProductServices/ProductServices';
import {useDispatch} from 'react-redux';
import { setSearchTerm, setFilters as setStoreFilters } from '../../store/slices/product-slice';


const sampleTilesCatergoryFilters = [
    'All',
    'Tiles',
    'Sanitary',
    'Bathroom Fittings',
    'Bathroom Accessories',
    'Kitchen Sinks',
    'Kitchen Chimney',
    'Electronics'];

const Search = () => {

    const [catergoryFilters, setCatergoryFilters] = React.useState(sampleTilesCatergoryFilters);
    const [filters, setFilters] = React.useState([]);
    const [localsearchTerm, setlocalSearchTerm] = React.useState('');

    const dispatch = useDispatch();

    const handleFilterClick = (e) => {
        const filter = e.target.textContent;
        if(filter === 'All')
        {
            return setFilters([]);
        }
        if (filters.includes(filter)) {
            setFilters(filters.filter(item => item !== filter));
        } else {
            setFilters([...filters, filter]);
        }
    }

    const handleSearchClick = async () => {
        // Search using searchTerm and filters
        dispatch(setSearchTerm(localsearchTerm));
        const filtersString = filters.join(',');
        dispatch(setStoreFilters(filtersString));
    }

    const handleSearchTermChange = (e) => {
        setlocalSearchTerm(e.target.value);
    }

  return (
    <>
      <section>
        <div className="searchbar flex gap-8 pb-10">
            <input type="text" placeholder="Search" value={localsearchTerm} className="border p-3 rounded-md md:w-[60vh]" onChange={handleSearchTermChange}/>
            <button type="submit" className="btn btn-primary bg-primary px-5 text-center rounded-lg" onClick={handleSearchClick}><SearchIcon className="text-secondary"/></button>
        </div>
      </section>
      <section>
        <div className="catagory-filters">
            <ul className="flex flex-wrap gap-2 md:gap-5">
                {catergoryFilters.map((item, index) => {
                    const isSelected = filters.includes(item);
                    return (
                        <li key={index} className={`px-5 py-2 text-secondary text-center rounded-md cursor-pointer text-xs md:text-base ${isSelected ? "bg-tertiary" : "bg-primary"}`} onClick={handleFilterClick}>
                            <p>{item}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
      </section>
    </>
  )
}

export default Search
