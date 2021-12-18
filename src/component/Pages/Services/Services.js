import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Button from '@mui/material/Button';
import { Container} from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';

const Services = () => {
    const[service, setService]= useState([]);
    useEffect(()=>{
        fetch('https://agile-tundra-92856.herokuapp.com/gym')
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            setService(data);
        })
    },[])  
    return (
        <div>
            <Navbar></Navbar>
            <Container>
                <Typography variant ="h4" sx={{fontWeight:'bold', color:'blue', m:5}}>GYM Equipment...</Typography>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                        {service.map(sr=>
                            <Grid item xs={12} sm={3} md={4}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                        component="img"
                                        height="250"
                                        weight="100%"
                                        image={`data:image/png;base64,${sr.photoOfEqp}`}
                                        alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {sr.gymEqpName}
                                            </Typography>
                                            <Typography gutterBottom variant="h6" component="div">
                                                <span>$</span> {sr.price}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {sr.description}
                                            </Typography>
                                            <Link to={`/singleService/${sr._id}`} style={{textDecoration:'none'}}>
                                                <Button sx={{mt:1}} variant="contained">View Details</Button>
                                            </Link>  
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            )
                        }
                    </Grid>
                </Box>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Services;