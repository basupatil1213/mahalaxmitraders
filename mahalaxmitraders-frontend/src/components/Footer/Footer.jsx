import React from 'react'
import logo from '../../resources/mt-logo.png'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';

const Footer = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1, paddingBottom:'5rem', height:'fit-content' }}>
                <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-footer md:grid-rows-1 " >
                    <Grid item xs className="items-center md:items-start justify-center flex col-start-1 md:justify-start md:col-start-2">
                        {/* logo */}
                        <img src={logo} alt=""/>
                    </Grid>
                    <Grid item xs={6} className=" flex">
                        {/* Social media links (Facebook, Instagram, Gmail) */}
                        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-0 pt-10 md:pt-0 md:justify-around w-full mx-0 md:mx-10 h-fit md:h-full">
                        <a href='/' className="flex gap-2 items-center">
                            <InstagramIcon />
                            <p>Instagram</p>
                        </a>
                        <a href='/' className="flex gap-2 items-center">
                            <FacebookIcon />
                            <p>Facebook</p>
                        </a>
                        <a href='/' className="flex gap-2 items-center">
                            <EmailRoundedIcon />
                            <p>Gmail</p>
                        </a>
                        </div>
                    </Grid>
                    <Grid item xs className="shop-address items-center flex h-fit md:h-full  justify-center md:justify-end">
                        {/* Shop Address */}
                        <div className=" flex flex-col items-center justify-start hover:cursor-pointer md:items-start">
                            <h1 className="mb-5"><b className="border-b-2 border-black">Shop Address</b></h1>
                            <p>Mahalaxmi Traders</p>
                            <p>Shop No. 1, Shreeji Complex,</p>
                            <p>Opp. Shreeji Complex,</p>
                            <p>Belagavi, Karnataka</p>
                            <a href="https://maps.app.goo.gl/YaeNoTz93Asbk3zt6" target="_blank" rel="noreferrer" className=" mt-5 p-3 bg-tertiary text-center rounded-md text-secondary font-bold hover:text-tertiary hover:bg-primary hover:transition-all">View Location</a>
                        </div>
                    </Grid>
                </div>
                <div className="flex justify-center">
                    {/* Copy right */}
                    <p>&copy; Designed and Developed By <a href="https://master--basavaraj-patil-portfolio.netlify.app/" target="_blank" rel="noreferrer" className="font-bold text-tertiary hover:border-b hover:border-primary">Basavaraj Patil</a></p>
                </div>
            </Box>
        </div>
    )
}

export default Footer
