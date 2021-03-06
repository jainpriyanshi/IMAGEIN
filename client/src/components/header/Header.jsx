import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo from './photo-camera.png';
import FontLoader from 'react-google-font-loader';


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
          <a href="/">
           <img style={{height:"50px"}}src={logo} />
          </a>
          </IconButton>
            <Typography variant="h6" className={classes.title} style={{textAlign:"left", fontFamily:'Roboto'}}>
              IMAGEIN
          </Typography>
          
          <a href="/inpainting" >
          <Button style={{color:"white"}}>Inpainting</Button>
          </a>
          <a href="/grayscale" >
          <Button style={{color:"white"}}>grayscale</Button>
          </a>
          <a href="/blur">
          <Button style={{color:"white" }}>blur</Button>
          </a>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;