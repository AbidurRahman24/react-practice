import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import SearchBar from '../Menu/SearchBar';
import './SideBar.css'
export default function SideBar() {
  return (
    <Box >
      <Drawer
       
        variant="permanent"
        anchor="left"
      >
        <SearchBar />
        <List>
          {['Order 1', 'Order 2', 'Order 3', 'Order 4'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <LocalGroceryStoreIcon /> : <LocalGroceryStoreIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />

      </Drawer>

    </Box>
  );
}
