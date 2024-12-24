// import React from "react";
import {Box, Button, FormHelperText, Link, Paper, Stack, TextField, Typography, useMediaQuery, useTheme} from '@mui/material'
import {useForm} from 'react-hook-form';
// import {Link} from 'react-router-dom';


export const Login = () => {
    const theme = useTheme();
    const {register, formState: {errors}} = useForm()
    // const is900 = useMediaQuery(theme.breakpoints.down(900));
    const is480 = useMediaQuery(theme.breakpoints.down(480));

    return (
        <Paper width={'100vw'} height={'100vh'} flexDirection={'row'} sx={{overflow: 'hidden', p:4}}>
         <Stack flex={1} justifyContent={'center'} alignItems={'center'}>
            <Stack flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                <Stack columnGap={'.4rem'}>
                    <Typography variant="h4" fontWeight={'600'} color={theme.palette.primary.main}>FinPay</Typography>
                    <Typography variant="h2">Login to your account</Typography>
                    <Typography variant="body2" >Securely login to your FinPay account</Typography>
                </Stack>
            </Stack>

            <Stack mt={4} spacing={2} width={is480 ? '95vw' : '28rem'} component={'form'}> 
                <Box sx={{display: 'flex', flexDirection: 'column', gap: 1}}>
                    <Typography variant="h6" sx={{display: 'flex'}}>Email Address or Phone Number*</Typography>
                    <TextField fullWidth {...register('email', {required: 'Email is required', pattern: {value:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g, message:"Enter a valid email"}})} placeholder='Enter your email address'/>
                    {errors.email && <FormHelperText sx={{mt: 1}} error>{errors.email.message}</FormHelperText>}
                </Box>


                <Box sx={{display: 'flex', flexDirection: 'column', gap: 1}}>
                    <Typography variant="h6" sx={{display: 'flex'}}>Password*</Typography>
                    <TextField type="password" fullWidth {...register('password', {required: 'Password is required'})} placeholder="Create a password"/>
                    {errors.password && <FormHelperText sx={{mt: 1}} error>{errors.password.message}</FormHelperText>}
                </Box>

                <Button  fullWidth sx={{height: '2.5rem', color: '#ffffff', fontWeight: 600}} variant="contained" type='submit'>Login</Button>

                <Stack flexDirection={'column'} gap={2} justifyContent={'space-between'} alignItems={'center'}>
                    <Link mr={'1.5rem'}>Forgot password</Link>

                    <Link>Do not have an account? 
                        <span style={{color: theme.palette.primary.dark}}>Register</span>
                    </Link>
                </Stack>
            </Stack>
         </Stack>
        </Paper>  
    )
}