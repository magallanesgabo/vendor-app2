import React from 'react';
import { Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
//import { useNavigate } from "react-router-dom";
import { Return } from '../components/BackButton/backButton';
//import theme from '../theme';
import Table from '../components/TableReport';
import Nav from '../components/Nav';

function VendorReport() {

   //const navigate = useNavigate();
   const styleTitle = { padding: 0, height: '73vh', width: 300, margin: "0 auto", boxShadow: 'none' }
   const header = { padding: 20, textAlign: 'center', fontSize: '1.2em', fontWeight: 'bolder', color:'#373737'}
   /*const initialValues = {
      email: '',
      password: ''
   }*/
   
    return (
      <ThemeProvider>
         <div>
               <Return />
               <Typography style={ header } color='primary'>
                Vendor Report
               </Typography>
               <div style={styleTitle}>
                  <Table />
               </div>
               <Nav/>
         </div>
      </ThemeProvider>
    );
  } 
  
  export default VendorReport;