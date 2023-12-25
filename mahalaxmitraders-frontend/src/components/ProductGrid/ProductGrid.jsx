import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';

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


  const sampleApiResponseWithPagination = {
    "count": 18,
    "next": "http://localhost:5000/api/v1/product?page=2",
    "previous": null,
    "total_pages": 10,
    "results": [
        {
            "id": 1,
            "name": "Product 1",
            "img": "https://source.unsplash.com/random",
            "category": "Tiles"
        },
        {
            "id": 2,
            "name": "Product 2",
            "img": "https://source.unsplash.com/random",
            "category": "Sanitary"
        },
        {
            "id": 3,
            "name": "Product 3",
            "img": "https://source.unsplash.com/random",
            "category": "Bathroom Fittings"
        },
        {
            "id": 4,
            "name": "Product 4",
            "img": "https://source.unsplash.com/random",
            "category": "Bathroom Accessories"
        },
        {
            "id": 5,
            "name": "Product 5",
            "img": "https://source.unsplash.com/random",
            "category": "Kitchen Sinks"
        },
        {
            "id": 6,
            "name": "Product 6",
            "img": "https://source.unsplash.com/random",
            "category": "Kitchen Chimney"
        },
        {
            "id": 7,
            "name": "Product 7",
            "img": "https://source.unsplash.com/random",
            "category": "All"
        },
        {
            "id": 8,
            "name": "Product 8",
            "img": "https://source.unsplash.com/random",
            "category": "Tiles"
        },
        {
            "id": 9,
            "name": "Product 9",
            "img": "https://source.unsplash.com/random",
            "category": "Sanitary"
        },
        {
            "id": 10,
            "name": "Product 10",
            "img": "https://source.unsplash.com/random",
            "category": "Bathroom Fittings"
        },
        {
            "id": 11,
            "name": "Product 11",
            "img": "https://source.unsplash.com/random",
            "category": "Bathroom Accessories"
        },
        {
            "id": 12,
            "name": "Product 12",
            "img": "https://source.unsplash.com/random",
            "category": "Kitchen Sinks"
        },
        {
            "id": 13,
            "name": "Product 13",
            "img": "https://source.unsplash.com/random",
            "category": "Kitchen Chimney"
        },
        {
            "id": 14,
            "name": "Product 14",
            "img": "https://source.unsplash.com/random",
            "category": "All"
        },
        {
            "id": 15,
            "name": "Product 15",
            "img": "https://source.unsplash.com/random",
            "category": "Tiles"
        },
        {
            "id": 16,
            "name": "Product 16",
            "img": "https://source.unsplash.com/random",
            "category": "Sanitary"
        },
        {
            "id": 17,
            "name": "Product 17",
            "img": "https://source.unsplash.com/random",
            "category": "Bathroom Fittings"
        },
        {
            "id": 18,
            "name": "Product 18",
            "img": "https://source.unsplash.com/random",
            "category": "Bathroom Accessories"
        }
    ]
}

const sampleApiResponseWithPagination2 = {
    "count": 18,
    "next": "http://localhost:5000/api/v1/product?page=3",
    "previous": "http://localhost:5000/api/v1/product?page=1",
    "total_pages": 10,
    "results": [
        {
            "id": 19,
            "name": "Product 19",
            "img": "https://source.unsplash.com/random",
            "category": "Tiles"
        },
        {
            "id": 20,
            "name": "Product 20",
            "img": "https://source.unsplash.com/random",
            "category": "Sanitary"
        },
        {
            "id": 21,
            "name": "Product 21",
            "img": "https://source.unsplash.com/random",
            "category": "Bathroom Fittings"
        },
        {
            "id": 22,
            "name": "Product 22",
            "img": "https://source.unsplash.com/random",
            "category": "Bathroom Accessories"
        },
        {
            "id": 23,
            "name": "Product 23",
            "img": "https://source.unsplash.com/random",
            "category": "Kitchen Sinks"
        },
        {
            "id": 24,
            "name": "Product 24",
            "img": "https://source.unsplash.com/random",
            "category": "Kitchen Chimney"
        }
        ]
}

const ProductGrid = () => {

    const [deviceType, setDeviceType] = React.useState('mobile');
    const [page, setPage] = React.useState(1);
    const [response, setResponse] = React.useState(sampleApiResponseWithPagination);
    const [products, setProducts] = React.useState(response.results);
    const [total_pages, setTotalPages] = React.useState(response.total_pages);
    

    React.useEffect(() => {
        if (window.innerWidth < 768) {
            setDeviceType('mobile');
        } else if (window.innerWidth < 1024) {
            setDeviceType('tablet');
        } else {
            setDeviceType('desktop');
        }
    }
    , []);

    const handleChange = (event, value) => {
        setPage(value);
        setResponse(sampleApiResponseWithPagination2);
        setProducts(response.results);
        setTotalPages(response.total_pages);
        // make an api call to get the products of the page
    };
    return (
        <div>
            <section>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {products ? products.map((product, index) => (
                            <Grid xs={2} sm={4} md={4} key={index} className="">
                                <Item className="h-full md:h-[30rem] min-h-[15rem]">
                                    <img src={product.img} alt="" className="h-[80%] w-full object-cover" />
                                    <p>{product.category}</p>
                                    <p>{product.name}</p>
                                </Item>
                            </Grid>
                        )) : <h1>Sorry No Products</h1>}
                    </Grid>
                </Box>
            </section>
            <section className="flex justify-center mt-5 w-full">
                <Pagination count={total_pages} page={page} variant="outlined" size={deviceType === "mobile" ? "small" : "large"} onChange={handleChange}  />
            </section>
        </div>
    )
}

export default ProductGrid
