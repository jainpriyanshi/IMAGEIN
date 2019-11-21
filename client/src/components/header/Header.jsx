import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo from './logo.png';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root} >
       <AppBar position="static" style={{backgroundColor:"black",width:"100%", align:"left"}}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton}>
          <a href="http://localhost:3001">
           <img style={{height:"50px"}}src={logo} />
          </a>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
              Image
          </Typography>
          
          <a href="http://localhost:3001/inpainting">
          <Button color="inherit">Inpainting</Button>
          </a>
          <Button color="inherit">Blur</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;