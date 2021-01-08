import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import axios from 'axios';
const HomeScreen = () => {
  const [loading,setLoading ]=useState(false);
  const [products,setProducts]=useState([])
  useEffect(()=>{
    setLoading(true);
    const fetchProduct=async ()=>{
      const {data}=await axios.get('./api/products')
      setProducts(data)
      setLoading(false)
    }
    fetchProduct()
  },[])

  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Row>
          {products.map((el) => (
            <Col sm={12} lg={4} xl={3}>
              <Product product={el} />
              {console.log(el)}
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};
export default HomeScreen;