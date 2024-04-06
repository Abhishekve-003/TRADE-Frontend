import React from 'react';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useNavigate } from 'react-router-dom';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';

const navDetails = [
  {
    title: "Dashboard",
    value: "/"
  },
  {
    title: "BTCUSD",
    value: "/btcusd"
  },
 
];

const getIcon = (title) => {
  switch (title) {
    case 'Dashboard':
      return <DashboardIcon />;
    case 'BTCUSD':
      return <CurrencyBitcoinIcon />;
   
    default:
      return null;
  }
};

const NavigationList = () => {
  const navigate = useNavigate();

  return (
    <List>
      {navDetails.map((text) => (
        <ListItem key={text.title} disablePadding onClick={() => navigate(text.value)}>
          <ListItemButton>
            <ListItemIcon>
              {getIcon(text.title)}
            </ListItemIcon>
            <ListItemText primary={text.title} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default NavigationList;
