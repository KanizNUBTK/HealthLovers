import React from 'react';
import { Container} from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Moto = () => {
    return (
        <div style={{backgroundColor:'rgb(223, 223, 236)'}}>
            <Container sx={{p:10}} >
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 12, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        <Typography variant ="h4" sx={{fontWeight:'bold', color:'rgb(48, 48, 83)',textAlign:'center', m:5}}> “If it was about knowledge, we would all be skinny and rich. It’s not about what you know but what you do!</Typography>
                    </Grid>
                </Box>
            </Container>
           
        </div>
    );
};

export default Moto;