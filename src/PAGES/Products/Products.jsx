import React, { useEffect, useState } from "react";
import Navbars from "../../COMPONENTS/Navbars/Navbars";
import Axios from "axios";
import ActionAreaCard from "../../COMPONENTS/Card/ActionAreaCard";
import './Products.css'

const Products = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getData = async () => {
    const res = await Axios.get("https://fakestoreapi.com/products");
    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    if (data.length > 0) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [data]);
  console.log(data);
  return (
    <>
    <div className="nav-bar">

      <Navbars />
    </div>
      <div className="card-container">
        {isLoading
          ? ""
          : data.map((ele, ind) => {
              return (
                <ActionAreaCard
                  image={ele.image}
                  title={ele.title}
                  description={ele.description}
                  price={ele.price}
                  key={ele.id}
                  id={ele.id}
                />
              );
            })}
      </div>
    </>
  );
};

export default Products;
