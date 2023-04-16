import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HomeWorkIcon from '@mui/icons-material/HomeWork';


export function ListItems({setPageNum}) {
  return(
  <>
    <ListSubheader component="div" inset>
      Verification
    </ListSubheader>
      <ListItemButton onClick={()=>{setPageNum(1)}}>
        <ListItemIcon>
          <PeopleIcon/>
        </ListItemIcon>
        <ListItemText primary="Users" />
      </ListItemButton>
    <ListItemButton onClick={()=>{setPageNum(2)}}>
      <ListItemIcon>
        <HomeWorkIcon />
      </ListItemIcon>
      <ListItemText primary="Properties" />
    </ListItemButton>
  </>
  )
};
