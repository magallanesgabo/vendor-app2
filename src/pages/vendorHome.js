import React from 'react';
import { Typography, Paper, Button, Container, Grid } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { useNavigate, Link } from "react-router-dom";
import Nav from '../components/Nav';
import Stack from '@mui/material/Stack';
import theme from '../theme';
import logo from '../assets/logobarley-black.png';
import { Logout } from '../components/LogoutButton/logoutButton';

function Vendor() {

  const paperStyle = { padding: 20, paddingTop: 50, width: 300, margin: "0 auto", }
  const header = { padding: 25, textAlign: 'center', fontSize: '1.2em', fontWeight: 'bolder', color:'#373737'}
  const headerLogout = { padding: 15, paddingTop: 15.5, marginLeft: 45,  textAlign: 'left', fontSize: '1.5em', fontWeight: '500', color:'#0A0A0A'}
  const buttonStyles = { minWidth: '250px', minHeight: '120px' }
  const logoStyle = { height: 70, display: 'block', margin: '0 auto' }
  const logoContainer = { padding: 5 , paddingTop: 20 }

  return (
    <Grid>
      <ThemeProvider theme={theme}>
        
      <Paper elevation={0} style={paperStyle}>
      <div style={logoContainer}>
          <img style={logoStyle}
                 src={ logo }/>
      </div>
      <Typography style={ header } color='primary'>
          Hello, Calgary Pizza!
      </Typography>
      <div>
      <Stack justifyContent="center" alignItems="center" spacing={4}>
        <Button style={buttonStyles} variant="contained" size="large" color="primary" component={Link} to="/scan-code" label="Vendor Rp">
          Scan Passport
        </Button>
        <Button style={buttonStyles} variant="contained" size="large" color="primary" component={Link} to="/vendor-report" label="Scan QR">
          Vendor Report
        </Button>
      </Stack>
     </div>
     </Paper>
     </ThemeProvider>
     <Nav/>
    </Grid>
    
  );
} 

export default Vendor;