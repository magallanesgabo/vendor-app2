import { Box, IconButton } from '@mui/material';
import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router';

export const Return = () => {

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
            aria-label="ArrowBackIcon"
            onClick={handleReturn}>
            <ArrowBackIcon fontSize="large" color='#0A0A0A' />
        </IconButton>
      
    </Box>
  )
}