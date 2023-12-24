import React from 'react'
import heroImg from './resources/images/hero-image.png';
import './Home.styles.css'
const Home = () => {
  return (
    <>
      <div className="hero-section flex justify-center md:justify-around items-center h-screen">
        <div className="hero-section__content flex flex-col gap-5 justify-center items-center md:items-start">
          <h1 className="hero-section__content__heading text-5xl md:text-7xl font-secondary font-extrabold text-center">Mahalaxmi Traders</h1>
          <p className="hero-section__content__sub-heading text-3xl font-tertiary">Find the perfect tiles <br /> for your modern home</p>
          <p className="font-tertiary text-3xl md:text-2xl text-center">Classy tiles that inspire your creativity</p>
            <div className="hero-section__content__cta self-center mt-10">
                <a href="/search" className="hero-section__content__cta__link bg-tertiary p-4 rounded-md text-secondary font-extrabold hover:bg-primary">Search Now</a>
            </div>
        </div>
        <div className="hero-section__image self-center hidden lg:flex">
            <img src={heroImg} alt="Hero" className="h-screen-70" />
        </div>
      </div>
    </>
  )
}

export default Home
