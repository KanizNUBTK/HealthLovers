import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button } from '@mui/material';

const DashboardHome = () => {
    const[service,setService]=useState([]);
    useEffect(()=>{
        fetch('https://agile-tundra-92856.herokuapp.com/cart')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setService(data);
        })
    },[]);

    //purchase
    const purchase=()=>{
        const orders={
            cus_name:service[0]?.customerName,
            cus_email:service[0]?.email,
            product_name:service[0]?.productName,
            total_amount:service[0]?.productPrice,
            product_image:service[0]?.photoOfEqp,
        }
        //console.log(orders);
        fetch(`https://agile-tundra-92856.herokuapp.com/init`,{
            method:'POST',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(orders)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            window.locations.replace(data);
        })
    }

    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Customer Name</TableCell>
                            <TableCell>Cusmoter Email</TableCell>
                            <TableCell>Product name</TableCell>
                            <TableCell>Product Price</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {service.map((row) => (
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">
                            {row.customerName}
                        </TableCell>
                        <TableCell>{row.email}</TableCell>
                        <TableCell>{row.productName}</TableCell>
                        <TableCell>{row.productPrice}</TableCell>
                        <TableCell>
                            <Button variant="contained" onClick={purchase}>Pay</Button>
                        </TableCell>
                        <TableCell>
                            <Button variant="contained" sx={{ bgcolor:'red'}}>Delete</Button>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default DashboardHome;