import React,{useEffect, useState} from "react";
import axios from 'axios';

import Product from "../components/Product";
import { Row, Col, Container } from "react-bootstrap";
import  { useDispatch, useSelector} from 'react-redux' ;
import { listProducts } from "../actions/productAction";
const HomeScreen = () => {
  //const [products,setProducts]=useState([]);

const dispatch = useDispatch();

const productList = useSelector(state=>state.productsList); // select a part of the state in the combined reducer in store
const {loading,error,products} = productList;  

useEffect(()=>{

    // const fetchProducts = async()=>{
    //   const {data} = await axios.get('/api/products');

    //   setProducts(data);
    // }
    // fetchProducts();
    //instead if using above, wer using the below redux based action
dispatch(listProducts())

   
  },[]);

  
  return (
    <Container>
      <h1>Latest Products</h1>
      {loading? <h2>Loading...</h2>:error?<h3>{error}</h3>:
      (<Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Product product={product}></Product>
          </Col>
        ))}
      </Row>)}
    </Container>
  );
};

export default HomeScreen;
