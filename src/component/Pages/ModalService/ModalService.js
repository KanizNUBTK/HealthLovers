import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useAuth from '../../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const ModalService = ({handleBookingClose,setSuccess,openbooking}) => {
    // const {name,time, price}= booking;
    const {user} = useAuth();
    //console.log(user.displayName);
    const initialInfo = {customerName:user.displayName, email:user.email}
    const [bookingInfo, setBookingInfo] = useState(initialInfo);

    const handleOnBlur = e =>{
      const field = e.target.name;
      const value = e.target.value;
      const newInfo = {...bookingInfo};
      newInfo[field]=value;
      console.log(newInfo);
      setBookingInfo(newInfo);
    }

    const handleBookSubmit = e =>{
        //collect data
        const appointment ={
          ...bookingInfo,
        //   time,
        //   price,
        //   serviceName: name,
        //   date: date.toLocaleDateString()
        }
        //send server
        fetch('https://floating-scrubland-06607.herokuapp.com/appointments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
        .then(res => res.json())
        .then(data => {
          if(data.insertedId){
            setSuccess(true);
            handleBookingClose();
          }
        });
        e.preventDefault();
    }
    return (
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openbooking}
        onClose={handleBookingClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openbooking}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {/* {name} */}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                <form onSubmit={handleBookSubmit}>
                    <TextField
                        disabled
                        sx={{width: '90%', m: '1'}}
                        id="outlined-size-small"
                        // defaultValue={time}
                        size="small"
                    />
                    <TextField
                        sx={{width: '90%', m: '1'}}
                        id="outlined-size-small"
                        name="patientName"
                        onBlur={handleOnBlur}
                        defaultValue={user.displayName}
                        size="small"
                    />
                     <TextField
                        sx={{width: '90%', m: '1'}}
                        id="outlined-size-small"
                        name="email"
                        onBlur={handleOnBlur}
                        defaultValue={user.email}
                        size="small"
                    />
                    <TextField
                        sx={{width: '90%', m: '1'}}
                        id="outlined-size-small"
                        name="phone"
                        onBlur={handleOnBlur}
                        defaultValue="Your phone number"
                        size="small"
                    />
                    <TextField
                        disabled
                        sx={{width: '90%', m: '1'}}
                        id="outlined-size-small"
                        // defaultValue={date.toDateString()}
                        size="small"
                    />
                    <Button type ="submit" variant="contained">Submit</Button>
                </form>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    );
};

export default ModalService;