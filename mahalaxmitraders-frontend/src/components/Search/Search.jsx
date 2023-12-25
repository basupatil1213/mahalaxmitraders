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

    // React.useEffect(() => {
    //     // fetch('http://localhost:5000/api/v1/category')
    //     // .then(res => res.json())
    //     // .then(data => {
    //     //     setCatergoryFilters(data);
    //     // })
    //     // .catch(err => console.log(err));
    // }
    // , []);

  return (
    <>
      <section>
        <div className="searchbar flex gap-8 pb-10">
            <input type="text" placeholder="Search" className="border p-3 rounded-md md:w-[60vh]"/>
            <button type="submit" className="btn btn-primary bg-primary px-5 text-center rounded-lg"><SearchIcon className="text-secondary"/></button>
        </div>
      </section>
      <section>
        <div className="catagory-filters">
            <ul className="flex flex-wrap gap-2 md:gap-5">
                {catergoryFilters.map((item, index) => {
                    return (
                        <li key={index} className="px-5 py-2 bg-primary text-secondary text-center rounded-md cursor-pointer text-xs md:text-base">
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
