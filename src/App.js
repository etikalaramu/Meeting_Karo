import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import InputBase from '@material-ui/core/InputBase';
import {alpha} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MoreIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import './App.css';
import Fab from './fab';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import Meetingkaro from './Meeting-karo-tab';
import Settings from './Settings';
import ContactUs from './Contact-us';
import Meetinghistory  from './Meeting-history';
import Faq from './Faq'
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
 root: {
   display:'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
   search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,

  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
const options = [
  'A-Z',
  'Upcoming Calls',
  'Recently Created',
  'Recent Calls',
  'Maximum Members',
];

const ITEM_HEIGHT = 48;
function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const drawer = (
    <div style={{boxShadow: '8px 1px 10px -6px rgba(0,0,0,0.44)',backgroundColor:'#738dbb26',
height:'100%'}}>
      <div className={classes.toolbar} style={{backgroundColor:'#007bff',minHeight:'70px'}}/>
      <div style={{display:'flex',marginTop:'-60px',justifyContent:'center'}}>
         <img src='https://i.pinimg.com/originals/17/56/8f/17568fcd478e0699067ca7b9a34c702f.png' style={{height:'50px'}}/>
         <div>
            <p className='p1'>User Name</p>
            <p className='p1'>9876543210</p>
         </div>
      </div>
      <div className="container-fluid p-4">
          <ul className="list-unstyled nav nav-pills flex-column h-100">
                    <li className="nav-item">
                        <a className="nav-link active" id="meetingkaro-tab" data-toggle="tab" href="#meeting-karo" role="tab" aria-controls="meeting" aria-selected="true">Meeting Karo</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="settings-tab" data-toggle="tab" href="#settings" role="tab" aria-controls="settings" aria-selected="false">Settings</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="meetinghistory-tab" data-toggle="tab" href="#meeting-history" role="tab" aria-controls="history" aria-selected="false">Meeting History</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="userguide-tab" data-toggle="tab" href="#userguide" role="tab" aria-controls="userguide" aria-selected="false">User Guide</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="requestcallback-tab" data-toggle="tab" href="#request-callback" role="tab" aria-controls="requestcallback" aria-selected="false">Request Callback</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="contactus-tab" data-toggle="tab" href="#contactus" role="tab" aria-controls="contactus" aria-selected="false">Contact Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="faqs-tab" data-toggle="tab" href="#faqs" role="tab" aria-controls="faqs" aria-selected="false">FAQs</a>
                    </li>
                </ul>
      </div>
   
    </div>

  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar} style={{backgroundColor:'#007bff',minHeight:'70px'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Responsive drawer
          </Typography>
          <ul className="ml-auto my-auto">
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
          </ul>
          <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={{color:'white'}}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
           <div className="container-fluid p-2">
                <div className="tab-content" id="myTabContent">
                    <div className="panel panel-default tab-pane fade show active" id="meeting-karo" role="tabpanel"
                        aria-labelledby="meetingkaro-tab">
                        <Meetingkaro/>
                    </div>
                    <div className="panel panel-default tab-pane fade show" id="settings" role="tabpanel"
                        aria-labelledby="settings-tab">
                        <Settings/>
                    </div>
                      <div className="panel panel-default tab-pane fade show" id="meeting-history" role="tabpanel"
                        aria-labelledby="meetinghistory-tab">
                       <Meetinghistory/>
                    </div>
                    <div className="panel panel-default tab-pane fade show" id="userguide" role="tabpanel"
                        aria-labelledby="userguide-tab">
                       <h1>User Guide Tab</h1>
                    </div>
                      <div className="panel panel-default tab-pane fade show" id="request-callback" role="tabpanel"
                        aria-labelledby="requestcallback-tab">
                       <h1>Request Callback Tab</h1>
                    </div>
                    <div className="panel panel-default tab-pane fade show" id="contactus" role="tabpanel"
                        aria-labelledby="contactus-tab">
                       <ContactUs/>
                    </div>
                      <div className="panel panel-default tab-pane fade show" id="faqs" role="tabpanel"
                        aria-labelledby="faqs-tab">
                       <Faq/>
                    </div>
                </div>
            </div>
          <Fab/>
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;

