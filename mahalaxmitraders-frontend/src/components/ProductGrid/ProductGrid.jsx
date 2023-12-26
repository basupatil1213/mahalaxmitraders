import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsBySearchAndFilters } from '../../services/ProductServices/ProductServices';
import { setProducts as setStoreProducts } from '../../store/slices/product-slice';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
}));

const ProductGrid = () => {
  const [deviceType, setDeviceType] = useState('mobile');
  const [response , setResponse] = useState();
  const searchTerm = useSelector((state) => state.products.searchTerm);
    const filters = useSelector((state) => state.products.filters);
  const [products, setProducts] = useState(response?.results || []);
  const [total_pages, setTotalPages] = useState(response?.total_pages || 1); // Added total_pages state
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  const getProductsWithFilters = async () => {
    try {
      const response = await getProductsBySearchAndFilters(page, 18, searchTerm, filters);
      return response;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

    useEffect(() => {
        getProductsWithFilters()
            .then((response) => {
                dispatch(setStoreProducts(response));
                setResponse(response);
                setProducts(response?.results || []);
                setTotalPages(response?.totalPages || 1)
            })
            .catch((err) => console.log(err));
    }, [page, searchTerm, filters]); // Added page as dependency


  const updateDeviceType = () => {
    if (window.innerWidth < 768) {
      setDeviceType('mobile');
    } else if (window.innerWidth < 1024) {
      setDeviceType('tablet');
    } else {
      setDeviceType('desktop');
    }
  };

  useEffect(() => {
    getProductsWithFilters()
      .then((response) => {
        dispatch(setStoreProducts(response));
      })
      .catch((err) => console.log(err));

    updateDeviceType();
    window.addEventListener('resize', updateDeviceType);

    return () => {
      window.removeEventListener('resize', updateDeviceType);
    };
  }, []); // Added empty dependency array to run only once on mount


  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div>
      <section>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {products.length > 0 ? (
              products.map((product, index) => (
                <Grid xs={2} sm={4} md={4} key={index} className="">
                  <Item className="h-full md:h-[30rem] min-h-[15rem] cursor-pointer">
                    <img src={product.img} alt="" className="h-[80%] w-full object-cover" />
                    <p>{product.category}</p>
                    <p>{product.name}</p>
                  </Item>
                </Grid>
              ))
            ) : (
              <h1>Sorry No Products</h1>
            )}
          </Grid>
        </Box>
      </section>
      <section className="flex justify-center mt-5 w-full">
        <Pagination count={total_pages} page={page} variant="outlined" size={deviceType === 'mobile' ? 'small' : 'large'} onChange={handleChange} />
      </section>
    </div>
  );
};

export default ProductGrid;
