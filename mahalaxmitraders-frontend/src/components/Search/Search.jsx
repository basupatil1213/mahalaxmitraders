import React from 'react'
import SearchIcon from '@mui/icons-material/Search';


const sampleTilesCatergoryFilters = [
    'All',
    'Tiles',
    'Sanitary',
    'Bathroom Fittings',
    'Bathroom Accessories',
    'Kitchen Sinks',
    'Kitchen Chimney'];

const Search = () => {

    const [catergoryFilters, setCatergoryFilters] = React.useState(sampleTilesCatergoryFilters);
    const [filters, setFilters] = React.useState([]);
    const [searchTerm, setSearchTerm] = React.useState('');

    // React.useEffect(() => {
    //     // fetch('http://localhost:5000/api/v1/category')
    //     // .then(res => res.json())
    //     // .then(data => {
    //     //     setCatergoryFilters(data);
    //     // })
    //     // .catch(err => console.log(err));
    // }
    // , []);

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

    const handleSearchClick = () => {
        // Search using searchTerm and filters
        fetch(`http://localhost:5000/api/v1/product?search=${searchTerm}&category=${filters.join(',')}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(err => console.log(err));
    }

  return (
    <>
      <section>
        <div className="searchbar flex gap-8 pb-10">
            <input type="text" placeholder="Search" value={searchTerm} className="border p-3 rounded-md md:w-[60vh]"/>
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
