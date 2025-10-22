import React from 'react'
import { Container, Logo, NavRight, NavWrap } from './style'
import logo from '../assets/Logo.svg'
import { Link, Links } from 'react-router'
const Navbar = () => {
  return (
    <div>
      <NavWrap>
      <Container>
        <Link to={'/home'}><Logo src={logo}/></Link>
        <NavRight>
            <Link to={'/product'} style={{ textDecoration: 'none', color: 'black' }}><p>Product</p></Link>           
            <Link to={'/services'} style={{ textDecoration: 'none', color: 'black' }}><p>Services</p></Link>         
            <Link to={'/about'} style={{ textDecoration: 'none', color: 'black' }}><p>About</p></Link>
            <Link to={'/login'} style={{ textDecoration: 'none', color: 'black' }}><button>Log In</button></Link>
        </NavRight>
      </Container>
      </NavWrap>
    </div>
  )
}

export default Navbar
