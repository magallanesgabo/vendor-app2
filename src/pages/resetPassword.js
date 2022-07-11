import React from 'react'
import { Grid, Paper, TextField, Button, Typography, Link } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import axios from 'axios';
import * as Yup from 'yup';
import theme from '../theme';



const ResetPassword = () => {
    const paperStyle = { padding: 20, height: '73vh', width: 300, margin: "0 auto" }
    const headerStyle = { marginTop: 40, padding: 60}
    const btnstyle = { margin: '8px 0', marginTop: 30 }
    const initialValues = {
        email: ''
    }
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('please enter valid email').required("Required")
    })

    const onSubmit = (values, props) => {
        axios({
            method: 'POST',
            url: 'http://18.223.68.169/users/password/reset',
            data: (values)
        })
        .then(function (response) {
            console.log(response);
        })

        console.log(values)
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(false)
        }, 2000)

    }

    return (
        <ThemeProvider theme={theme}>
        <Grid>
            <Paper elevation={0} style={paperStyle}>
                <Grid align='center'>
                     <h2 style={headerStyle}>Reset Password</h2>
                </Grid>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {(props) => (
                        <Form>
                            <Field as={TextField} label='Email' name="email"
                                placeholder='Enter username' fullWidth required
                                helperText={<ErrorMessage name="email" />}
                            />
                            <Button type='submit' color='primary' variant="contained" disabled={props.isSubmitting}
                                style={btnstyle} fullWidth>{props.isSubmitting ? "Loading" : "Reset Password"}</Button>

                        </Form>
                    )}
                </Formik>
                <Typography color="primary">
                    <Link href="/" >
                        Go to Login Page 
                    </Link>
                </Typography>
            </Paper>
        </Grid>
        </ThemeProvider>
    );
}

export default ResetPassword;