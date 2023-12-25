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

const sampleTileProducts = [
    {
        id: 1,
        name: 'Product 1',
        img: 'https://source.unsplash.com/random',

    },
    {
        id: 2,
        name: 'Product 2',
        img: 'https://source.unsplash.com/random',

    },
    {
        id: 3,
        name: 'Product 3',
        img: 'https://source.unsplash.com/random',

    },
    {
        id: 4,
        name: 'Product 4',
        img: 'https://source.unsplash.com/random',

    },
    {
        id: 5,
        name: 'Product 5',
        img: 'https://source.unsplash.com/random',

    },
    {
        id: 6,
        name: 'Product 6',
        img: 'https://source.unsplash.com/random',

    },
    {
        id: 7,
        name: 'Product 7',
        img: 'https://source.unsplash.com/random',

    },
    {
        id: 8,
        name: 'Product 8',
        img: 'https://source.unsplash.com/random',

    },
    {
        id: 9,
        name: 'Product 9',
        img: 'https://source.unsplash.com/random',

    },
    {
        id: 10,
        name: 'Product 10',
        img: 'https://source.unsplash.com/random',

    },
    {
        id: 11,
        name: 'Product 11',
        img: 'https://source.unsplash.com/random',

    },
    {
        id: 12,
        name: 'Product 12',
        img: 'https://source.unsplash.com/random',

    },
    {
        id: 13,
        name: 'Product 13',
        img: 'https://source.unsplash.com/random',

    },
    {
        id: 14,
        name: 'Product 14',
        img: 'https://source.unsplash.com/random',

    },
    {
        id: 15,
        name: 'Product 15',
        img: 'https://source.unsplash.com/random',

    },
    {
        id: 16,
        name: 'Product 16',
        img: 'https://source.unsplash.com/random',

    },
    {
        id: 17,
        name: 'Product 17',
        img: 'https://source.unsplash.com/random',

    },
    {
        id: 18,
        name: 'Product 18',
        img: 'https://source.unsplash.com/random',

    }];

const ProductGrid = () => {

    const [deviceType, setDeviceType] = React.useState('mobile');

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


    return (
        <div>
            <section>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {sampleTileProducts.map((product, index) => (
                            <Grid xs={2} sm={4} md={4} key={index} className="">
                                <Item className="h-full md:h-[30rem] min-h-[15rem]">
                                    <img src={product.img} alt="" className="h-[80%] w-full object-cover" />
                                    <p>{product.name}</p>
                                </Item>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </section>
            <section className="flex justify-center mt-5 w-full">
                <Pagination count={sampleTileProducts.length} variant="outlined" size={deviceType === "mobile" ? "small" : "large"}  />
            </section>
        </div>
    )
}

export default ProductGrid
