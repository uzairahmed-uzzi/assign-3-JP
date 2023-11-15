import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function ActionAreaCard(props) {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345, boxShadow: "2px 2px 5px black",height:'450px',padding:'0px' }}>
      <CardActionArea
        sx={{ height: "100%",width:'100%', borderBlockEnd: "1px solid black" }}
      >
        <CardMedia
          component="img"
          // height="140"
          image={props.image}
          alt="green iguana"
          sx={{ height: "35%", borderBlockEnd: "1px solid black" }}
        />
        <CardContent sx={{ height: "40%", borderBlockEnd: "1px solid black" }}>
          <Typography gutterBottom variant="h5" component="div" sx={{height:'20%',overflow:'hidden'}}>
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{height:'68%',width:'100%',overflow:'hidden',textOverflow:'----'}} >
            {props.description}
          </Typography>
          <Typography variant="p">Only for: Rs.{props.price}</Typography>
        </CardContent>
        <Box sx={{display:'flex',justifyContent:'space-between',alignContent:'center',width:'100%',height:'10%'}}>
          <Button variant="button" onClick={()=>navigate(`/product-details/${props.id}`)} >Details</Button>
          <Button variant="button">Buy</Button>
        </Box>
      </CardActionArea>
    </Card>
  );
}
