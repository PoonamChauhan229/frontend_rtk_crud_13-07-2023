import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { taskListUrl } from '../utils/constants';

export default function Navbar() {

  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const isAuthenticated = !!sessionStorage.getItem('token');

  const handleLogout = () => {
    setLoading(true);
    axios
      .post(taskListUrl + '/users/logout', {}, {
        headers: {
          token: sessionStorage.getItem('token'),
        },
      })
      .then(() => {
        sessionStorage.removeItem('token');
        setLoading(false);
        alert('Logged out successfully');
       window.location.reload(true)
      })
      .catch((error) => {
        setLoading(false);
        console.error('Error logging out', error);
      });
  };

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <AppBar component="nav">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              ToDo App
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Button sx={{ color: '#fff' }} onClick={() => { navigate('/'); }}>
                Home
              </Button>
              {isAuthenticated && (
                <>
                  <Button sx={{ color: '#fff' }} onClick={() => { navigate('/addTask'); }}>
                    Add Task
                  </Button>
                  <Button sx={{ color: '#fff' }} onClick={() => {handleLogout()}} disabled={loading}>
                    Logout
                  </Button>
                </>
              )}
              {!isAuthenticated && (
                <>
                  <Button sx={{ color: '#fff' }} onClick={() => { navigate('/users/signup'); }}>
                    SignUp
                  </Button>
                  <Button sx={{ color: '#fff' }} onClick={() => { navigate('/users/login'); }}>
                    Login
                  </Button>
                </>
              )}
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
