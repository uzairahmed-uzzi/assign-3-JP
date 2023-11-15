import React,{useEffect, useState} from 'react'
import './ProductDetails.css'
import { useParams } from 'react-router-dom'
import Axios from 'axios'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea } from "@mui/material";
const ProductDetails = () => {
    const [data,setData]=useState({});
    const {id}=useParams();
    const getSingleProduct=async()=>{
        try{
            const res=await Axios.get(`https://fakestoreapi.com/products/${id}`);
            setData(res.data);
        }catch(e){
            console.error(e);
        }
    }
    useEffect(()=>{
        getSingleProduct();
    })
    console.log(data);
    
    return (
    <>
  { data && <Card sx={{ width: '90vw', boxShadow: "2px 2px 5px black",height:'100vh',marginInline:'auto',padding:'0px' }}>
      <CardActionArea
        sx={{ height: "100%",width:'100%', borderBlockEnd: "1px solid black" }}
      >
        <CardMedia
          component="img"
          image={data.image}
          alt="green iguana"
          sx={{ height: "50%",width:'400px', border: "10px solid black" }}
        />
        <CardContent sx={{ height: "40%", borderBlockEnd: "1px solid black" }}>
        <Typography gutterBottom variant="h6" component="div" sx={{fontSize:'1.5em'}}>
           Category: {data.category}  
          </Typography>
          <Typography gutterBottom variant="h5" component="div" sx={{fontSize:'2.5em'}}>
            {data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{height:'68%',width:'100%',textOverflow:'----',fontSize:'2em'}} >
            {data.description}
          </Typography>
          <Typography variant="p" sx={{fontSize:'1.5rem'}}>Only for: Rs.{data.price}</Typography>

        </CardContent>
        {/* <Box sx={{display:'flex',justifyContent:'space-between',alignContent:'center',width:'100%',height:'10%'}}>
          <Button variant="button" onClick={()=>navigate(`/product-details/${data.id}`)} >Details</Button>
          <Button variant="button">Buy</Button>
        </Box> */}
      </CardActionArea>
    </Card>}
    </>
  )
}

export default ProductDetails