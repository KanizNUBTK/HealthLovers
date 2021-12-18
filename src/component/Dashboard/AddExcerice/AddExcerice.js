import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Container , Alert} from '@mui/material';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const Input = styled('input')({
    display: 'none',
  });

const AddExcerice = () => {
    const[gymEqpName, setGymEqpName ] = useState('');
    const[price, setPrice] = useState('');
    const[description, setDescription] = useState('');
    const[photoOfEqp, setPhotoOfEqp] = useState(null);
    const[success, setSuccess] = useState(false);
    const UpdateUserProfile = e =>{
        if(!photoOfEqp){
            return;
        }
        const formData = new FormData();
        formData.append('gymEqpName',gymEqpName);
        formData.append('price',price);
        formData.append('description',description);
        formData.append('photoOfEqp',photoOfEqp);
        fetch('https://agile-tundra-92856.herokuapp.com/gym', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(result => {
            console.log('Success:', result);
            setSuccess(true);
            setGymEqpName('');
            setPrice('');
            setDescription('');
            setPhotoOfEqp('');
        })
        .catch(error => {
            console.error('Error:', error);
        });
        e.preventDefault();
    }
    return (
        <div>
            <Container>
                <Box sx={{mx:5, my:5}}>
                    <Typography variant ="h4" sx={{fontWeight:'bold', color:'blue'}}>Upload Gym Equipment...</Typography>
                    <form onSubmit={UpdateUserProfile}>
                    <br />
                    <label htmlFor="contained-button-file" >
                        <Input accept="image/*" 
                        id="contained-button-file" 
                        type="file" 
                        onChange = {e => setPhotoOfEqp(e.target.files[0])}
                        />
                        <Button variant="contained" sx={{ mt:1}} component="span">Upload Gym Equipment Picture</Button>
                    </label>
                    <br />
                    <TextField 
                    sx={{width:'75%'}}
                    required 
                    label="Gym Equipment Name" 
                    name="gymName"
                    type="text"
                    onChange = {e => setGymEqpName(e.target.value)}
                    variant="standard" /> 
                    <TextField 
                    sx={{width:'75%'}}
                    required 
                    label="Gym Equipment Price" 
                    name="gymPrice"
                    type="number"
                    onChange = {e => setPrice(e.target.value)}
                    variant="standard" /> 
                    <TextField 
                    sx={{width:'75%'}}
                    required 
                    label="Gym Equipment Description" 
                    name="gymDescription"
                    type="text"
                    onChange = {e => setDescription(e.target.value)}
                    variant="standard" /> 
                    <Button type="submit" variant="contained" sx={{width: '75%', mt:1}}>Add Gym Equipment</Button>
                    </form>
                    {success && <Alert severity="success">Gym Equipment uploaded successfully</Alert>}
                
                </Box>
            </Container>
        </div>
    );
};

export default AddExcerice;