import {AppBar,Toolbar,Typography,IconButton} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

function Navbars() {
  return (
<AppBar position="sticky" color='success'>
  <Toolbar variant="dense">
    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" color="inherit" component="div">
      UZZIVERSE
    </Typography>
  </Toolbar>
</AppBar>
  );
}

export default Navbars;