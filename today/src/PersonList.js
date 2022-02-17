import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AndroidIcon from '@mui/icons-material/Android';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const person =[
  {name: "Bot", icon: AndroidIcon},
  {name: "Некто", icon: AccountCircleIcon}
]

export default function PersonList() {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, color: "white" }}>
      <nav aria-label="main mailbox folders">
        <List> {person.map((item, index)=>(
          <ListItem key={index+"LI"} disablePadding>
            <ListItemButton >
              <ListItemIcon >
                <item.icon/>
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
        </List>
      </nav>
    </Box>
  );
}