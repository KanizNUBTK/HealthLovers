import React, { useState,useEffect }  from 'react';
import { Container} from '@mui/material';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Navbar from '../../../Shared/Navbar/Navbar';
import Footer from '../../../Shared/Footer/Footer';

const PdfBMI = () => {
    const[dietChart,setDietChart]=useState([]);
  
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>{
            setDietChart(data);
        });
    },[])    
    return (
        <>
            <Navbar></Navbar>
            <Container sx={{my:10}}>
                <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {dietChart.map(pdf=>
                        <Grid xs={12} sm={4} md={4}>
                            <Card sx={{ maxWidth:300, px:5, py:5 }}>
                                <Typography variant ="h6" sx={{m:1, fontWeight:'bold'}}>{pdf.chatname}</Typography>
                                <iframe src={`data:application/pdf;base64,${pdf.deitPdf}`} />
                            </Card>    
                        </Grid>
                    )}     
                </Grid>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default PdfBMI;