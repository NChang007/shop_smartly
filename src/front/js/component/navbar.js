import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Login from "./Login";


export const Navbar = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<nav className="navbar navbar-expand-lg bg-color02">
			<div className="container-fluid">
				<a className="navbar-brand color01" href="#">SHOP SMARTLY</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				
				<form className="search d-flex" role="search">
					<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
					{/* <button className="btn btn-outline-success" type="submit">Search</button> */}
				</form>

				{/* <ul className="navbar-nav ">
					<li className="nav-item">
						<a className="nav-link color05" aria-current="page" href="#">LogIn</a>
					</li>					
				</ul> */}
				<Button variant="primary" onClick={handleShow}>
					LogIn
				</Button>

				<Offcanvas show={show} placement='end' onHide={handleClose} >
					<Offcanvas.Header closeButton>
						<Offcanvas.Title>LogIn</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						<Login />
					</Offcanvas.Body>
				</Offcanvas>			
			</div>
		</nav>
	);
};
