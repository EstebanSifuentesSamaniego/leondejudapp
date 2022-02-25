import * as React from 'react'
import {    List , Drawer, ListItem, ListItemIcon, 
            ListItemText, Button, IconButton, Typography, Toolbar,
            Box, AppBar, Divider
        } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import EventIcon from '@mui/icons-material/Event';

export default function Header() {

    const [state, setState] = React.useState({
        isDrawerOpen: false,
    });

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, isDrawerOpen: open });
    };

    const list = () => (
        <Box
          sx={{ width: 'auto' }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {['Cantos', 'Eventos'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
    );
    

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
        >

            <MenuIcon />
        </IconButton>
    )

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={ AppBarStyle }>
                <Toolbar>
                    <React.Fragment>
                        <Button onClick={toggleDrawer(true)}>{iconButton}</Button>
                        <Drawer
                            open={state.isDrawerOpen}
                            onClose={toggleDrawer(false)}
                        >
                            <Box
                                sx={{ width: 250 }}
                                role="presentation"
                                onClick={toggleDrawer(false)}
                                onKeyDown={toggleDrawer(false)}
                                >
                                <List>
                                    
                                    <ListItem button key={"Cantos"}>
                                        <ListItemIcon>
                                            <LibraryMusicIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={"Cantos"} />
                                    </ListItem>

                                    <Divider />

                                    <ListItem button key={"Eventos"}>
                                        <ListItemIcon>
                                            <EventIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={"Eventos"} />
                                    </ListItem>

                                    <Divider />
                                    
                                </List>
                            </Box>                           
                        </Drawer>
                    </React.Fragment>
                    

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> 
                        Judapp
                    </Typography>

                </Toolbar>
            </AppBar>
        </Box>
    )
}