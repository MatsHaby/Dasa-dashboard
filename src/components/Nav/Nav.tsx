import * as React from 'react';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import { Box, List, IconButton, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { navbarItems } from '../../constants/navbarItems'
import { iNavItem } from "../../interfaces/nav"
import {
  useNavigate,
} from "react-router-dom";
import { navStyles } from "./styles"

const drawerWidth = 290;

export default function Nav() {
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);
  const [mobileOpen, setMobileOpen] = React.useState<boolean>(false);
  const [open, setOpen] = React.useState<boolean>(false);

  const navigate = useNavigate()

  const handleListItemClick = (index: number): void => {
    setSelectedIndex(index);
  };

  const handleDrawerOpen = (): void => {
    setOpen(true);
  };

  const handleDrawerClose = (): void => {
    setOpen(false);
  };

  const handleDrawerToggle = (): void => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = (
    <List sx={navStyles.list}>
      {navbarItems.map((item: iNavItem, index: number) => (
        <ListItem sx={navStyles.listItem} button key={item.id} onClick={() => navigate(item.route)}>
          <ListItemButton sx={navStyles.selected} selected={selectedIndex === index}
            onClick={() => handleListItemClick(index)}>
            <ListItemIcon sx={{ color: selectedIndex === index ? "#F50157" : "#831D43" }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  )

  const chevronIcon = (
    open === true ?
      <>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </>
      :
      <>
        <IconButton onClick={handleDrawerOpen}>
          <ChevronRightIcon />
        </IconButton>
      </>
  )

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Hamburger icon */}
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={navStyles.IconButton}
      >
        <MenuIcon />
      </IconButton>

      {/* Mobile Drawer */}
      <MuiDrawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: "#363636" },
        }}
      >
        {menuItems}
      </MuiDrawer>

      {/* Desktop Drawer */}
      <Drawer variant="permanent" open={open} sx={navStyles.drawer}>
        <DrawerHeader sx={{ justifyContent: open ? 'flex-end' : 'center' }}>
          {chevronIcon}
        </DrawerHeader>
        {menuItems}
      </Drawer>
    </Box>
  );
}

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

