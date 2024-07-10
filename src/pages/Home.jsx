// import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {add} from '../Redux/Createslice';
import {fetchProducts, mystatus} from '../Redux/ProductSlice'

function Home() {
//   const uri = "https://fakestoreapi.com/products";

  const dispatch = useDispatch();
  const {data:product,status} = useSelector((state)=> state.product);         /// here using data with name product

  useEffect(() => {
   
    dispatch(fetchProducts());
  }, []);

//   const fetchAPI = async () => {
//     const data = await axios.get(uri);
//     setproduct(data.data);

//   };

  const addProduct = (item)=>{
     dispatch(add(item));
  }

  if(status === mystatus.LOADING){
    return <h3>Fetching data.....</h3>
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
