import React, { useState } from 'react';
import { Grid, Paper, TextField, Button, Typography, Link } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
/*import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';*/
import axios from 'axios';
import * as Yup from 'yup';

import theme from '../theme';
import logo from '../assets/logobarley-black.png';
import UserAlert from '../components/AlertMessages/userAlert';


const Login = ({ actualizarUsuarioLogueado }) => {
     
    const navigate = useNavigate(); // <-- useNavigate

    const paperStyle = { padding: 20, paddingTop: 40, width: 300, margin: "0 auto", }
    const logoStyle = { height: 70, display: 'block', margin: '0 auto' }
    const logoContainer = { padding: 60, marginTop: 20 }
    const [condicion, condicion2] = useState(false);
    const btnstyle = { margin: '8px 0', marginTop: 30 }
    const initialValues = {
        email: 'arneiraz@gmail.com',
        password: 'Contrasena01.'
    }
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('please enter valid email').required("Required"),
        password: Yup.string().required("Required")
    })
    const onSubmit = (values, props) => {
        axios({
            method: 'POST',
            url: 'https://api.devrudolf.com/users/login',
            data: (values)
        })
        .then(function (response) {
            console.log(response);
            if(response.statusText === "OK"){
                localStorage.setItem("token", response.data.authorization_token);
                navigate('/home'); 
            }
        })
        .catch(function (response) {
            console.log(response);
            if(response.status === 401, 400){
                condicion2(true)
                setTimeout(()=>condicion2(false), 5000)
            }
        });

        console.log(values)
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(false)
        }, 2000)
    
    }
    
    return (
        <ThemeProvider theme={theme}>
        <Grid container>
            <Grid item xs={12}>
            <Paper elevation={0} style={paperStyle}>
                <div style={logoContainer}>
                    <img alt='logo' style={logoStyle}
                        src={ logo }
                    />
                </div>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {(props) => (
                        <Form>
                            <Field as={TextField} label='Email' name="email"
                                placeholder='Enter email' fullWidth required
                                helperText={<ErrorMessage name="email" />}
                            />
                            <Field as={TextField} label='Password' name="password"
                                placeholder='Enter password' type='password' fullWidth required
                                helperText={<ErrorMessage name="password" />} 
                            />
                            <Button type='submit' color='primary' variant="contained" disabled={props.isSubmitting}
                                style={btnstyle} fullWidth >{props.isSubmitting ? "Loading" : "Sign in"}</Button>

                        </Form>
                    )}
                </Formik>
                <Typography color="primary">
                    <Link href="http://localhost:3000/reset-password" >
                        Reset password ?
                    </Link>
                </Typography>
             <div>
                { condicion && <UserAlert/> }
             </div>
            </Paper>
            </Grid>
        </Grid>
        </ThemeProvider>
    )
}

export default Login;