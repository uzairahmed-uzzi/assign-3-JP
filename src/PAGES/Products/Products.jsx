import React, { useEffect, useState } from "react";
import Navbars from "../../COMPONENTS/Navbars/Navbars";
import Axios from "axios";
import ActionAreaCard from "../../COMPONENTS/Card/ActionAreaCard";
import './Products.css'

const Products = () => {
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getData = async () => {
    const res = await Axios.get("https://dummyjson.com/products");

    setData(res.data);

  };
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    console.log(data)
    if (data.limit > 0) {
      setIsLoading(false);
      setProducts(data.products);
    } else {
      setIsLoading(true);
    }
  }, [data]);
  console.log(data.products);
  return (
    <>
    <div className="nav-bar">

      <Navbars>
      <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900"></h2> */}

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {isLoading
          ? ""
          : products.map((product) => {
            console.log("--->",product);
            return (
            <ActionAreaCard product={product} />
          )
          })}
        </div>
      </div>
    </div>
      </Navbars>
        
    </div>
      <div className="card-container">
        {/* {isLoading
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
            })} */}
      
      </div>
    </>
  );
};

export default Products;
