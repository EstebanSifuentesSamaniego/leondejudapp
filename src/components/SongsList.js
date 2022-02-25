import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

export default function SongsList(props) {
    
    const boxStyle = {
        width: '100%', 
        bgcolor: 'background.paper' 
    }

    return (
        <Box sx={ boxStyle }>
            <List>
            
                {
                    props.songs.map(c =>
                        <div key={c.id}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary={c.name} />
                                </ListItemButton>
                            </ListItem>
                            <Divider />
                        </div>
                    )
                }
            </List>
        </Box>
    );
}
