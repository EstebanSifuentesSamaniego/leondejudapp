import * as React from 'react'
import { IconButton, Typography, Toolbar, Box, AppBar, } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom'

export default function Header() {

    let navigate = useNavigate()

    function handleBackClick(){
        navigate(-1)
    }
    
    const AppBarStyle = {
        backgroundColor: "#ae2828"
    }

    const iconButton = (
        <IconButton
            size="large"
            edge="start"
            style={{ color: 'white' }}
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleBackClick}
        >

            <ArrowBackIcon />
        </IconButton>
    )

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={ AppBarStyle }>
                <Toolbar>
                    {iconButton}
                    
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> 
                        Judapp
                    </Typography>

                </Toolbar>
            </AppBar>
        </Box>
    )
}