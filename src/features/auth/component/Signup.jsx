import { Box, Button, FormHelperText, Grid2, Paper, Stack, TextField, Typography, useMediaQuery, useTheme } from "@mui/material"
import { useForm } from "react-hook-form"

export const Signup = () => {
    const {register, formState: {errors}} = useForm()
    const theme = useTheme()
    const is900 = useMediaQuery(theme.breakpoints.down(900))
    const is480 = useMediaQuery(theme.breakpoints.down(480))

    return (
        <Paper sx={{p:2}}>
            <Stack flex={1} justifyContent={'center'} alignItems={'center'}>
                <Stack flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
                    <Stack rowGap={'.4rem'}>
                        <Typography variant="h4" color={theme.palette.primary.main} fontWeight={'700'}>FinPay</Typography>
                        <Typography variant="h4" fontWeight={'600'}>Create a Secure Account</Typography>
                        <Typography variant="body2">Welcome to the future of Savings & Investments</Typography>
                    </Stack>
                </Stack>

                <Stack mt={4} spacing={2} width={is480 ? '95vw' : '28rem'} component={'form'} noValidate>
                    <Grid2 container spacing={2}>
                        <Box sx={{display: 'flex', flexDirection: 'column', gap: 1}}>
                            <Typography variant="h6" sx={{display: 'flex'}}>First Name*</Typography>
                            <TextField fullWidth {...register('firstName', {required: 'First name is required'})} placeholder="Enter your first name" />
                            {errors.firstName && <FormHelperText error>{errors.firstName.message}</FormHelperText>}
                        </Box>

                        <Box sx={{display: 'flex', flexDirection: 'column', gap: 1}}>
                            <Typography variant="h6" sx={{display: 'flex'}}>Last Name*</Typography>
                            <TextField {...register('lastName', {required: 'Last name is required'})} placeholder="Enter your last name"/>
                            {errors.lastName && <FormHelperText error>{errors.lastName.message}</FormHelperText>}
                        </Box>

                        <Box sx={{display: 'flex', flexDirection: 'column', gap: 1}}>
                            <Typography variant="h6" sx={{display: 'flex'}}>Email Address*</Typography>
                            <TextField {...register('email', {required: 'Email is required', pattern:{value:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,message:"Enter a valid email"}})} placeholder='Enter your email address'/>
                            {errors.email && <FormHelperText error>{errors.email.message}</FormHelperText>}
                        </Box>

                        <Box sx={{display: 'flex', flexDirection: 'column', gap: 1}}>
                            <Typography variant="h6" sx={{display: 'flex'}}>Phone Number*</Typography>
                            <TextField {...register('phoneNumber', {required: 'Phone number is required'})} placeholder="Enter your phone number"/>
                            {errors.phoneNumber && <FormHelperText error>{errors.phoneNumber.message}</FormHelperText>}
                        </Box>

                        <Box sx={{display: 'flex', flexDirection: 'column', gap: 1}}>
                            <Typography variant="h6" sx={{display: 'flex'}}>Password*</Typography>
                            <TextField type="password" {...register('password', {required: 'Password is required', pattern:{value:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,message:`at least 8 characters, must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number, Can contain special characters`}})} placeholder='Create a password'/>
                            <Typography variant="body2" sx={{display: 'flex'}}>*Must be at least 8 characters</Typography>
                            {errors.password && <FormHelperText error>{errors.password.message}</FormHelperText>}
                        </Box>

                        <Box sx={{display: 'flex', flexDirection: 'column', gap: 1}}>
                            <Typography variant="h6" sx={{display: 'flex'}}>Re-enter Password*</Typography>
                            <TextField type="password" {...register('password', {required: 'Password is required', pattern:{value:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,message:`at least 8 characters, must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number, Can contain special characters`}})} placeholder='Re-enter password'/>
                            {errors.password && <FormHelperText error>{errors.password.message}</FormHelperText>}
                        </Box>
                    </Grid2>

                    <Button sx={{height: '2.5rem', color: '#ffffff'}} type="submit" variant="contained" fullWidth>Create account</Button>
                </Stack>
            </Stack>
        </Paper>
    )
}