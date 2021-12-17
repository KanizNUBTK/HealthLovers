import React, { useState } from 'react';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

const BMI = () => {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [bmiResult, setBmiResult] = useState(null);
    const [status, setStatus] = useState("");
    
    const HandlecalculateBMI = e =>{
        e.preventDefault(); 
            let bmi = Number(weight / (height / 100) ** 2).toFixed(2);
            setBmiResult(bmi);
            let bmiStatus = getStatus(bmi);
            setStatus(bmiStatus);
            setHeight("");
            setWeight("");
    };
        const getStatus=bmi=> {
            if (bmi < 18.5) return "Underweight" ;
            else if (bmi >= 18.5 && bmi < 24.9) return "Normal";
            else if (bmi >= 25 && bmi < 29.9) return "Overweight";
            else return "Obese";
        }
      
    
    
    return (
        <div>
            <Container sx={{my:10}}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid xs={12} sm={4} md={4}>
                    </Grid>
                    <Grid xs={12} sm={4} md={4} sx={{p:5,boxShadow: 3}}>
                    <Typography variant ="h4" sx={{fontWeight:'bold', color:'blue', textAlign:'center'}}> BMI Calculator</Typography>
                        <Box>
                            <form onSubmit={HandlecalculateBMI}>
                                <TextField 
                                sx={{width:'100%',mt:4}}
                                required  
                                label="Enter your Height in cm"
                                name="height"
                                type="number"
                                onBlur = {e => setHeight(e.target.value)}
                                variant="outlined" /> <br />
                                <TextField 
                                sx={{width:'100%',mt:2}}
                                required  
                                label="Enter your Weight in kg"
                                name="weight"
                                type="number"
                                onBlur = {e => setWeight(e.target.value)}
                                variant="outlined" /> <br />
                                <Button type="submit" variant="contained" sx={{width: '100%', mt:2}}>Calculate BMI</Button>
                                {bmiResult && <Box sx={{m:3}}>
                                    <Typography variant ="h6" sx={{m:1}}> Your BMI is: {bmiResult}</Typography>
                                    <Typography variant ="h6" sx={{m:1}}> 
                                    You are currently: <Link to={`/pdfBmi`} style={{textDecoration:'none'}}>{status}</Link> 
                                    </Typography>
                                </Box>
                                }
                            </form>   
                        </Box>
                    </Grid>
                    <Grid xs={12} sm={4} md={4}>
                    </Grid>
                </Grid>
            </Container>
        </div>         
    );
};

export default BMI;