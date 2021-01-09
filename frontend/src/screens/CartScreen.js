import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import Message from "./../components/Message";
import { addToCart } from "./../Actions/cartActions";
import { Link } from "react-router-dom";
const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id;
  //   console.log(location);
  const qty = location.search ? Number(location.search.split("=")[1]) : 1; //after the question mark ?qt=1
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  //   console.log(cartItems);
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);
  return (
    <Row>
      <Col md={8}>
          <h1>Shopping Cart</h1>
          {cartItems.length===0?<Message>Your cart is empty<Link to='/'>Go Back</Link></Message>:(
              <ListGroup varient='flush'></ListGroup>
          )}
      </Col>
      <Col md={2}></Col>
      <Col md={2}></Col>
    </Row>
  );
};

export default CartScreen;
