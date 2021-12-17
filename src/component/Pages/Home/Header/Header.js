import React from 'react';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import './Header.css';


const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400,
}

const Header = () => {
    return (
        <div className="bgBanner" >
            <Container sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} style={{...verticalCenter}}>
                   <Box>
                        <Typography variant="h3" sx={{fontWeight:'600'}}>
                                Let start Again... <br />
                                Diet And Exercise
                        </Typography>
                   </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                   
                </Grid>
            </Grid>
            </Container>
        </div>
    );
};

export default Header;