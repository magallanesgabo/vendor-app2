import * as React from 'react';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import { Link, useLocation } from 'react-router-dom';


export default function Nav() {
  const [value, setValue] = React.useState(0);
 
  return (
    
    <Box sx={{ display: 'block', margin: '0 auto'}}>
      <Paper>
      <BottomNavigation sx={{ position: 'fixed', bottom: 0, width: 1.0, /*backgroundColor: '#000',*/ }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        //Atention Login PATH
      >
        <BottomNavigationAction component={Link} to="/home" label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction component={Link} to="/scan-code" label="Scan QR" icon={<QrCodeScannerIcon />} />
        <BottomNavigationAction component={Link} to="/vendor-report" label="Vendor Rp" icon={<AssignmentIcon />} />
      </BottomNavigation>
      </Paper>
    </Box>
  
  );
}


