import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import useAuth from '../../../hooks/useAuth';
import { NavLink } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';

const Navbar = () => {
    const {user,logOut} = useAuth();
    const[viewProfile, setViewProfile]=useState([]);
    const theme = useTheme();
    const useStyle = makeStyles({
        nabItemMD:{
            color:'white',
            textDecoration:'none',
        },
        nabItem:{
            color:'black',
            textDecoration:'none',
        },
        navIcon:{
            [theme.breakpoints.up('sm')]: {
                display:'none!important',
            },
        },    
        navContainer:{
            width:'40%',
            display:'inline-flex',
            [theme.breakpoints.down('sm')]: {
                display:'none!important',
            },
        },
        navLogo:{
            [theme.breakpoints.down('sm')]: {
                textAlign:'right',
            },
        },
        mobileNavItem:{
            backgroundColor:'white',
        }
    })
    const {nabItemMD,nabItem,navIcon,navContainer,navLogo,mobileNavItem} = useStyle();
    //drawer style
    const [state, setState] = React.useState(false);

    const list  =(
        <Box
          sx={{ width : 200 }}
          role="presentation"
          className={mobileNavItem}
        >
            <List>
                <ListItem button>
                    <ListItemText ><Link className={nabItem} to="/home">Home</Link></ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemText><Link className={nabItem} to="/services">Services</Link></ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemText><Link to="/dashboard" className={nabItem}>Dashboard</Link></ListItemText>
                </ListItem>
                <Divider />
                <Avatar alt="Cindy Baker" src={`data:image/png;base64,${viewProfile[0]?.profilePictute}`} />
                {user.email && <span style={{ padding:'10px', color: 'black' }}>{user.displayName} </span>}
                {
                    user?.email ?
                    <Button onClick={logOut} color="inherit">Logout</Button>
                    :
                    <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/login">
                        <Button sx={{color:'black'}}>Login</Button>
                    </NavLink>
                }
            </List>
        </Box>
      );
      //view profile picture
      useEffect(()=>{
        fetch('https://agile-tundra-92856.herokuapp.com/profile')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setViewProfile(data);
        })
    },[]);

    return (
      <>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    //   sx={{ mr: 2 }}
                    className={navIcon}
                    onClick={()=>setState(true)}
                    >
                    <MenuIcon />
                    </IconButton>
                    <Typography className={navLogo} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Hello Health lovers
                    </Typography>
                    <Box className={navContainer}>
                        <Link to="/home" className={nabItemMD}><Button color="inherit">Home</Button></Link>
                        <Link to="/services" className={nabItemMD}><Button color="inherit">Services</Button></Link>
                        <Link to="/dashboard" className={nabItemMD}><Button color="inherit">Dashboard</Button></Link>
                        <Avatar alt="" src={`data:image/png;base64,${viewProfile[0]?.profilePictute}`} />
                        {user.email && <span style={{ padding:'10px', color: 'white' }}>{user.displayName} </span>}
                        {
                        user?.email ?
                            <Button onClick={logOut} color="inherit">Logout</Button>
                            :
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                <Button color="inherit">Login</Button>
                            </NavLink>
                        }
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
        <div>
            <React.Fragment>
                <Drawer
                    open={state}
                    onClose={()=>setState(false)}
                >
                    {list}
                </Drawer>
            </React.Fragment>
        </div>
      </>
    );
};

export default Navbar;