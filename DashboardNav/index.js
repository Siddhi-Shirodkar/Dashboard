import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import { AppBar, Link } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
const DashboardNav = ({open, setOpen}) => {

  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <div>
      <AppBar position="fixed" >
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Link href="/Dashboard">
            <Typography
              component="h1"
              variant="h6"
              color="white"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard
            </Typography>
            </Link>
          </Toolbar>
        </AppBar>
    </div>
  )
}

export default DashboardNav