import { Container, Paper, Avatar, Typography, Box, TextField, FormControlLabel,Checkbox,Button,Link, Grid2, Grid } from '@mui/material'

import LockOutLinedIcon from '@mui/icons-material/LockOutLined'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom';

const LoginPage = () => {
    const handleSubmit = () => { console.log('Đăng nhập') }
  return (
    <Container maxWidth="xs">
        <Paper elevation={10} sx={{ marginTop:8, padding:2}}>
            <Avatar
            sx={{
                mx:'auto',
                bgcolor:'secondary.main',
                textAlign:'center',
                mb:1,
            }}>
                <LockOutLinedIcon/>
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ textAlign: "center"}}>
                Đăng nhập 
            </Typography>
            <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt:1 }}>
                <TextField
                  placeholder='Nhập username'
                  fullWidth
                  required
                  autoFocus
                  sx={{ mb:2 }}
                />
                <TextField
                  placeholder='Nhập password'
                  fullWidth
                  required
                  autoFocus
                  sx={{ mb:2 }}
                  type='password'
                />
                <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Nhớ mật khẩu" />
                <Button type="submit" variant="contained" fullWidth sx={{ mt: 1 }}>Đăng nhập ngay</Button>
                <Grid2 container justifyContent='space-between' sx={{ mt:1 }}>
                    <Grid2 item>
                        <Link to='/forgot'>Quên mật khẩu</Link>
                    </Grid2>
                    <Grid2 item>
                        <Link to='/register'>Đăng kí ngay</Link>
                    </Grid2>
                </Grid2>
                        
                 
            </Box>
        </Paper>
    </Container>
  )
}

export default LoginPage