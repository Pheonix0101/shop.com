import axios from "axios";
import React, { useState, useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux'
import {add} from '../Redux/Createslice'

function Home() {
  const uri = "https://fakestoreapi.com/products";
  const [product, setproduct] = useState([]);

  useEffect(() => {
    fetchAPI();
  }, [uri, product]);

  const fetchAPI = async () => {
    const data = await axios.get(uri);
    setproduct(data.data);

  };
  const dispose = useDispatch();

  const addProduct = (item)=>{
     dispose(add(item));
  }

  return (
    <div className="productsWrapper">
      {product.map((prod, index) => (
        <div className="card" key={index}>
          <img src={prod.image} alt="prod" />
          <h4>{prod.title}</h4>
          <h5>{prod.price}</h5>

          <button className="btn" onClick={()=>addProduct(prod)}> Add to cart</button>
        </div>
      ))}
    </div>
  );
}

export default Home;
