  
    import React, { Component } from 'react';
    import axios from 'axios';
    import Grid from '@material-ui/core/Grid';
    import Button from '@material-ui/core/Button';
    import Fab from '@material-ui/core/Fab';
    import 'typeface-roboto';
    import { makeStyles } from '@material-ui/core/styles';
    import Card from '@material-ui/core/Card';
    import CardActionArea from '@material-ui/core/CardActionArea';
    import CardActions from '@material-ui/core/CardActions';
    import CardContent from '@material-ui/core/CardContent';
    import CardMedia from '@material-ui/core/CardMedia';
    import Typography from '@material-ui/core/Typography';
    import Input from '@material-ui/core/Input';
    import logo from './paint-palette.png';
import { BottomNavigation } from '@material-ui/core';
import PublishIcon from '@material-ui/icons/Publish';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import Background from './bg1.jpeg';


var sectionStyle = {
  backgroundImage: "url(" + { Background } + ")"
};
    class Inpainting extends Component {
      constructor() {
        super();
        this.state = {
          selectedFile: '',
        };
      }

      onChange = (e) => {
        switch (e.target.name) {
          case 'selectedFile':
            this.setState({ selectedFile: e.target.files[0] });
            break;
        }
      }

      onSubmit = (e) => {
        e.preventDefault();
        const { selectedFile } = this.state;
        let formData = new FormData();
        formData.append('selectedFile', selectedFile);

        axios.post('/inpainting', formData)
          .then((result) => {
          });
      }

      render() {
        const {  selectedFile } = this.state;
  
        return (
          <div>
          <section style={ sectionStyle }>
      </section>
          <Grid 
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: '100vh' }}
          > 
          <Card maxwidth='345'p={10} m={30}>
        


      <CardActionArea>
         
         
        <CardContent>
        
          <br>
          </br>
          <Typography variant="h2" component="h2">
          <img style={{height:"67px", marginRight: '40px'}}src={logo} />
             INPAINTING
          </Typography>
          <hr></hr>
          <br></br>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
      <form onSubmit={this.onSubmit} style={{color:"black"}}>
           
      <input
           type="file"
           name="selectedFile"
           onChange={this.onChange}
           style={{ display: "none" }}
           id="contained-button-file"
         />
               <label htmlFor="contained-button-file">
              


         <Button
        variant="contained"
        color="primary"
        component="span" size="medium"
        startIcon={<ImageSearchIcon />}
      >
        CHOOSE IMAGE
      </Button>
         </label>      
         
           



<Fab 
variant="round"
        color="primary"
        size="small"
        style={{marginLeft:"30px"}}
        type="submit">
  <PublishIcon />
      </Fab>

             <br></br>
             <br></br>          
             </form>
             

            
      </CardActions>
    
    </Card>



            </Grid>
          
          
            </div>

          );
      }
    }
  

export default Inpainting;