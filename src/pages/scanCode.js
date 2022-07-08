import React from 'react';
import { Container, Typography } from '@material-ui/core';
//import { useNavigate } from "react-router-dom";
import { Return } from '../components/BackButton/backButton';
import Nav from '../components/Nav';
import QrScanner from '../components/QrScanner';


function ScanCode() {
  
  const style = { paddingTop: 20, width: 350, margin: "0 auto" }
  const header = { padding: 15, textAlign: 'center', fontSize: '1.5em', fontWeight: 'bolder', color:'#373737'}

    return (
      <div>
        <Return />
          <Typography style={ header } color='primary'>
             Scan Qr Code
          </Typography>
      <Container style={style}>
          <QrScanner/>
      </Container>
      <Nav/>
      </div>
      
    );
  } 
  
  export default ScanCode;
  