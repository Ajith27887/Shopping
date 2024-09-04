import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';
import { FaCartArrowDown } from "react-icons/fa";
import { IconContext } from "react-icons";

import './NavBar.css'
import SideMenu from './SideMenu';

function NavBar() {
  return (
    <>
		<Navbar expand="lg" className="bg-body-tertiary">
		<Container>
			{/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
			<Nav className="me-auto">
				<Link to="/">Home</Link>
			</Nav>
			<Nav className="me-auto">
				<Link to='./SideMenu'>side</Link>
			</Nav>

			<div className='cartIon p-2 rounded'>
				<IconContext.Provider value={{color : "yellow"}}>
					<FaCartArrowDown  style={{width: '25px'}}/>
				</IconContext.Provider>
			</div>
			</Navbar.Collapse>
		</Container>
		</Navbar>
    <Outlet/>
    </>
  
  );
}

export default NavBar;