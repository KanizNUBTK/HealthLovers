import React from 'react';
import Typography from '@mui/material/Typography';
import { Container} from '@mui/material';
import Navbar from '../../Shared/Navbar/Navbar';

const Payment = () => {

    return (
        <div>
            <Navbar></Navbar>
            <Container>
                    <Typography variant ="h4" sx={{fontWeight:'bold', color:'blue', m:5}}>
                        Payment is Recived Successfully <br /> Thank You...
                    </Typography>
            </Container>
        </div>
    );
};

export default Payment;