import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./CardComponent.css"
const CardComponent = ({name, img, description}) => {
    return(
      <div clasName="card">
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component='img' height='340' image={img} alt='green iguana' />
       <CardContent>
         <Typography gutterBottom variant="h5" component="div">
           {name} <br/>
           {description}
         </Typography>
         <Typography variant="body2" color="text.secondary">
           
         </Typography>
       </CardContent>
     </Card>
     </div>
   )
    
}
export default  CardComponent;
