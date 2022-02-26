import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';

export default function SongsList(props) {

    let navigate = useNavigate()
    
    const boxStyle = {
        width: '100%', 
        bgcolor: 'background.paper',
    }

    function handleSongClick(id){
		navigate("/lyric/" + id)
	}

    return (
        <Box sx={ boxStyle }>
            <List style={{ margin: '10px', padding: '10px' }}>
            
                {
                    props.songs.map(c =>
                        <div key={c.id}>
                            <ListItem disablePadding>
                                <ListItemButton onClick={() => handleSongClick(c.id)}>
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
