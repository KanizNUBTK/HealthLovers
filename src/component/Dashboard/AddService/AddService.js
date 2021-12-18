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

const AddService = () => {
    const[dietChatName, setDietChatName ] = useState('');
    const[deitPdf, setDeitPdf] = useState(null);
    const[success, setSuccess] = useState(false);
    const UpdateUserProfile = e =>{
        if(!deitPdf){
            return;
        }
        const formData = new FormData();
        formData.append('dietChatName',dietChatName);
        formData.append('deitPdf',deitPdf);
        fetch('https://agile-tundra-92856.herokuapp.com/services', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(result => {
            console.log('Success:', result);
            setSuccess(true);
            setDietChatName('');
            setDeitPdf('');
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
                    <Typography variant ="h4" sx={{fontWeight:'bold', color:'blue'}}>Update Your Profile...</Typography>
                    <form onSubmit={UpdateUserProfile}>
                    <br />
                    <label htmlFor="contained-button-file" >
                        <Input accept="*" 
                        id="contained-button-file" 
                        type="file" 
                        onChange = {e => setDeitPdf(e.target.files[0])}
                        />
                        <Button variant="contained" sx={{ mt:1}} component="span">Upload Diet Chat</Button>
                    </label>
                    <br />
                    <TextField 
                    sx={{width:'75%'}}
                    required 
                    label="Diet Chat Name" 
                    name="dietChatName"
                    type="text"
                    onChange = {e => setDietChatName(e.target.value)}
                    variant="standard" /> 
                    <Button type="submit" variant="contained" sx={{width: '75%', mt:1}}>PDF Added</Button>
                    </form>
                    {success && <Alert severity="success">Profile is completed</Alert>}
                
                </Box>
            </Container>
        </div>
    );
};

export default AddService;