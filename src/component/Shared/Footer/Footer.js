import React from 'react';
import { Container} from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import logo from '../../../images/logo2.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <Box>
                    <Grid container spacing={{ xs: 12, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        <Grid item xs={12} sm={3} md={4}>
                            <Box sx={{mt:5, mx:5}}>
                                <img style={{width:'100px'}} src={logo} alt="" />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={3} md={4}>
                        <Typography variant ="h6" sx={{fontWeight:'bold', color:'white', m:5}}>Hello Health Lovers</Typography>
                        </Grid>
                        <Grid item xs={12} sm={3} md={4}>
                            <Typography variant ="body1" sx={{fontWeight:'bold', color:'white', mt:5}}>Address</Typography>
                            <Typography variant ="body2" sx={{fontWeight:'bold', color:'white', mt:2}}>8801715000009</Typography>
                            <Typography variant ="body2" sx={{fontWeight:'bold', color:'white', mt:2}}>Khulna, Bangladesh</Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            
        </div>
    );
};

export default Footer;