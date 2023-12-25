import React, { useState, useEffect } from 'react'
import heroImg from './resources/images/hero-image.png';
import ownerImg from './resources/images/owner-image.png'
import './Home.styles.css'


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Category = ({ category }) => {
    return (
        <div className="category-card mb-10 mx-5 h-96 flex w-[85%] md:w-auto flex-col gap-5 items-center justify-center px-5 shadow-2xl">
            <img src={category.image} alt={category.name} className="product--image" />
            <h1 className="">{category.name}</h1>
            <a href="/search" className="py-3 px-5 bg-tertiary rounded-md hover:text-secondary hover:bg-primary">See More</a>
        </div>
    )
}

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

// sampleData
const sampleData = [
    {
        name: 'Floor Tiles',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ADIVWc8UOcEKisA9LwWJcvQOCoJTLIgiEw&usqp=CAU'
    },
    {
        name: 'Wall Tiles',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ADIVWc8UOcEKisA9LwWJcvQOCoJTLIgiEw&usqp=CAU'
    },
    {
        name: 'Kitchen Tiles',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ADIVWc8UOcEKisA9LwWJcvQOCoJTLIgiEw&usqp=CAU'
    },
    {
        name: 'Bathroom Tiles',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ADIVWc8UOcEKisA9LwWJcvQOCoJTLIgiEw&usqp=CAU'
    },
    {
        name: 'Parking Tiles',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ADIVWc8UOcEKisA9LwWJcvQOCoJTLIgiEw&usqp=CAU'
    },
    {
        name: 'Outdoor Tiles',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ADIVWc8UOcEKisA9LwWJcvQOCoJTLIgiEw&usqp=CAU'
    },
]
const Home = () => {

    const [categories, setCategories] = React.useState(sampleData);

    const [deviceType, setDeviceType] = useState('desktop');

    useEffect(() => {
        // Update device type on window resize
        const handleResize = () => {
            setDeviceType(getDeviceType());
        };

        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [deviceType]);

    // Function to determine device type based on screen width
    const getDeviceType = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth < 768) {
            return 'mobile';
        } else if (screenWidth < 1024) {
            return 'tablet';
        } else {
            return 'desktop';
        }
    }

    React.useEffect(() => {
        // fetch('http://localhost:5000/api/categories')
        //     .then(res => res.json())
        //     .then(data => {
        //         setCategories(data);
        //     })
        //     .catch(err => console.log(err));
        setCategories(sampleData);
    }
        , []);

    return (
        <>
            {/*  Hero Section   */}
            <div className="hero-section flex justify-center md:justify-around items-center h-screen w-screen">
                <div class="blur-overlay"></div>
                <div className="relative z-10 hero-section__content flex flex-col gap-5 justify-center items-center md:items-start">
                    <h1 className="hero-section__content__heading text-5xl md:text-7xl font-italic-ibm font-extrabold text-center">Mahalaxmi Traders</h1>
                    <p className="hero-section__content__sub-heading text-3xl font-tertiary font-extralight">Find the perfect tiles <br /> for your modern home</p>
                    <p className="font-tertiary text-3xl md:text-2xl text-center font-extralight">Classy tiles that inspire your creativity</p>
                    <div className="hero-section__content__cta self-center mt-10">
                        <a href="/search" className="hero-section__content__cta__link bg-tertiary p-4 rounded-md text-secondary font-extrabold hover:bg-primary">Search Now</a>
                    </div>
                </div>
                <div className="hero-section__image self-center hidden lg:flex shadow-2xl">
                    <img src={heroImg} alt="Hero" className="h-screen-70" />
                </div>
            </div>
            {/* Category Section */}
            <div className="flex flex-col gap-5 px-0 md:px-10 my-10 md:mt-0">
                <div className="text-center flex flex-col gap-8">
                    <p className=" text-3xl font-italic-ibm">Quality and Style are to tiles what water and sunshine are to plants</p>
                    <h1 className="text-4xl font-primary font-bold">Categories</h1>
                </div>
                <div className="px-10 md:w-auto">
                    <Carousel swipeable={true}
                        draggable={true}
                        showDots={true}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        autoPlay={deviceType === "mobile" ? true : false}
                        autoPlaySpeed={2000}
                        keyBoardControl={true}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        deviceType={deviceType}
                        dotListClass="custom-dot-list-style"
                        itemClass=""
                        preventMovementUntilSwipeScrollTolerance={true}
                        className="w-full md:w-auto" >
                        {
                            categories.map((category, index) => (
                                <Category key={index} category={category} />

                            ))
                        }
                    </Carousel>
                </div>
            </div>
            {/* About Owner */}
            <section>
                <div>
                    <h1 className="sm:text-2xl md:text-4xl font-primary font-bold text-center sm:mb-5 md:mb-0">About Owner</h1>
                </div>
                <div className="flex flex-col-reverse lg:flex-row justify-around items-center gap-10 lg:gap-20  mx-20 mb-10 md:mb-20 md:mt-10">
                    <div className="owner-detail flex flex-col  gap-5 w-auto md:w-2/4">
                        <h1 className="text-3xl md:text-7xl lg:text-7xl font-primary">Arun <br />Muddennavar</h1>
                        <p className="text-2xl font-tertiary">Passionate owner dedicated to providing a curated selection of high-quality and stylish tiles for every customer's unique needs.</p>
                    </div>
                    <div className="owner-image shadow-2xl sm:w-auto md:w-1/3">
                        <img src={ownerImg} alt="Owner" className="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
