import React,{useEffect} from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,MDBInputGroup
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getCartTotal } from '../features/cartSlice';

export default function App() {
    const {totalQuantity,cart}= useSelector((state)=>state.allCart)

    const dispatch=useDispatch();
    useEffect(() => {
     dispatch(getCartTotal())
    }, [cart]);
  return (
    <MDBNavbar light bgColor='light'>
      <MDBContainer fluid>
      <div className='.d-flex .justify-content-between .align-items-center'>
        <MDBNavbarBrand>Phone Cart</MDBNavbarBrand>
        </div>
        {/* <MDBInputGroup tag="form" className='d-flex w-auto mb-3'> */}
          {/* <input className='form-control' placeholder="Type query" aria-label="Search" type='Search' /> */}
          {/* <MDBBtn outline>Search</MDBBtn> */}
        {/* </MDBInputGroup> */}
        <span> <Link to='/'>All Product</Link></span>
        {/* <MDBBtn color='light' rippleColor='dark'>
        Light
      </MDBBtn> */}
      <MDBBtn color='dark'>
      <Link to='/cart'>Cart({totalQuantity})</Link>
        
      </MDBBtn>

      </MDBContainer>
    </MDBNavbar>
   
  );
}