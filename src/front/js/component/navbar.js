import React from "react";
import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Login from "./Login";
import { Context } from "../store/appContext";
import queryString from "querystring-es3";
import SearchBar from "./SearchBar";


export const Navbar = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const { store, actions } = useContext(Context);
	// const [items, setItems] = useState();
	// setItems(store.specials)

	


	return (
		<nav className="navbar navbar-expand-lg bg-color02">
			<div className="container-fluid">
				<a className="navbar-brand color01" href="#">SHOP SMARTLY</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				
				<SearchBar />

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
