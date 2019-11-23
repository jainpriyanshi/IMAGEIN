import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import BrushIcon from '@material-ui/icons/Brush';


const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 450,
    margin: '30px 50px',  
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  
 
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
     

      <br></br>
       <Grid 
        direction="column"
        justify="left"
        style={{ minHeight: '100vh'  }}
        container spacing={3}>


        <Grid item xs={12}>
    <Card className={classes.card} maxwidth='345'p={10} m={30}>
      <CardHeader 
        avatar={
          <Avatar>
            <IconButton>
            <BrushIcon />
          </IconButton>
          </Avatar>
        }
       
        title="Inpainting"/>
      <CardMedia
        className={classes.media}
        image="https://images.unsplash.com/photo-1461344577544-4e5dc9487184?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        title="Inpainting"
      />

      
      <CardContent>
        <Typography variant="body1">
        Digital Image Inpainting is a method wherein the scratched or damaged portion of the image is restored by using the pixel data of the undamaged portion. The modified convolution based image inpainting uses a kernel function 
       </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <Typography variant="overline"> know More</Typography>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant='h6'>Method:</Typography>
          <br></br>
          <Typography paragraph>
          1.  Take input(original image).Change all the pixel with value ‘0’ to ‘1’.

          </Typography>
          <Typography paragraph>
          2.  Create a mask,it has damaged part as ‘255’ and other part as ‘1’.
 </Typography>
          <Typography paragraph>
          3.  Mask and image are compared.The points having pixel value  greater than 250 equal to 255 in mask are replaced by value 0 in original image.
           </Typography>
          <Typography paragraph> 
          4.  Region to be inpainted is contained in mask function where 1 is damaged pixel and 0 is undamaged pixel.          
          </Typography>
          <Typography paragraph> 
          5.  The colored image is decomposed into its corresponding RGB components and the gradients of the pixel in near neighborhood are found.  
         </Typography>
          <Typography paragraph>
          6.  The weight of kernel and damaged pixel is found.Using the values of estimated pixels of RGB, the image is reconstructed.
  </Typography>
        </CardContent>
      </Collapse>
    </Card>
          
          
          </Grid>
          

    
      </Grid>
    </div>
  );
}