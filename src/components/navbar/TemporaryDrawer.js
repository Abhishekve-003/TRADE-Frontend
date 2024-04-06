
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import NavigationList from './NavigationList';

export default function TemporaryDrawer({ open, onClose, children }) {
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={onClose}>
      <List> 
        <NavigationList/>
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer open={open} onClose={onClose}>
        {DrawerList}
      </Drawer>
      {children}
    </div>
  );
}
