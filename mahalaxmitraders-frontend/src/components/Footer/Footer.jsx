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
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    <Grid item xs className="items-center flex justify-center">
                        {/* logo */}
                        <img src={logo} alt="" className="h-1/2" />
                    </Grid>
                    <Grid item xs={6} className=" flex  justify-around">
                        {/* Social media links (Facebook, Instagram, Gmail) */}
                        <div className="flex gap-2 items-center">
                            <InstagramIcon />
                            <p>Instagram</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <FacebookIcon />
                            <p>Facebook</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <EmailRoundedIcon />
                            <p>Gmail</p>
                        </div>
                    </Grid>
                    <Grid item xs className="items-center flex flex-col justify-center">
                        {/* Shop Address */}
                        <div>
                            <p>Shop Address</p>
                            <p>Mahalaxmi Traders</p>
                            <p>Shop No. 1, Shreeji Complex,</p>
                            <p>Opp. Shreeji Complex,</p>
                            <p>Belagavi, Karnataka</p>
                        </div>
                    </Grid>
                </Grid>
                <div className="flex justify-center">
                    {/* Copy right */}
                    <p>Designed and Developed By Basavaraj Patil</p>
                </div>
            </Box>
        </div>
    )
}

export default Footer
