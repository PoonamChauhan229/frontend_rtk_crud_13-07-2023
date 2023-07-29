import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useSelector } from 'react-redux';

export default function Navbar({mode,setMode}) { 
  // const cartItems=useSelector(store=>store.cart.items)
    const navigate = useNavigate();
  return (
    <>
    <Box sx={{ display: 'flex' }}>
        <AppBar component="nav">        
          <Toolbar>          
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >ToDo App
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            
                <Button sx={{ color: '#fff' }} onClick={
                  ()=>{navigate('/')}
                }>
                  Home
                </Button>
                <Button sx={{ color: '#fff' }} onClick={
                  ()=>{navigate('/addTask')}
                }>
                  Add Task
                </Button>

                <Button sx={{ color: '#fff' }} onClick={
                  ()=>{navigate('/users/signup')}
                }>
                  SignUp
                </Button>
                               
            </Box>
          </Toolbar>
        </AppBar>
        
        <Box component="main" sx={{ p: 1 }}>
          <Toolbar />
        </Box>
        
    </Box>
    </>
      
  );
}