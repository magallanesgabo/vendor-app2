import { Box, IconButton } from '@mui/material';
import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router';

export const Logout = () => {

    const handleReturn = () =>{
        navigate(-1);
    }

    const navigate = useNavigate();

  return (
    <Box
      sx={{
        alignItems: 'left',
        display: 'flex',
        justifyContent: 'left',
        p: 1,
        position: 'fixed', 
        zIndex:30
      }}
    >
        <IconButton 
            aria-label="LogoutIcon"
            onClick={handleReturn}>
            <LogoutIcon fontSize="large" color='#0A0A0A' />
        </IconButton>
      
    </Box>
  )
}