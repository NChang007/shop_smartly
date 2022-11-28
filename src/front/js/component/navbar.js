import React from "react";
import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Login from "./Login";
import { Context } from "../store/appContext";
import queryString from "querystring-es3";


export const Navbar = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const { store, actions } = useContext(Context);
	const [items, setItems] = useState([]);

	useEffect(() => {
		actions.searchHash("")
		const qs = queryString.parse(location.hash);
		console.log("This is parsed info: ", qs);
		searchFunction(qs.keyword);
	}, [store.specials]);
	
	// const searchFunction = keyword => {
	// 	console.log("Search function keyword: ", keyword);
	// 	let filteredArray = store.specials.filter(item => {
	// 		if (keyword == "" || keyword == undefined) {
	// 			return item;
	// 		} else if (item.breedName.toLowerCase().includes(keyword.toLowerCase())) {
	// 			return item;
	// 		}
	// 	});
	// 	setItems(filteredArray);
	// };
	
	// const searchHash = word => {
	// 	searchFunction(word);
	// 	if (word == "") {
	// 		setItems(store.specials);
	// 	}
	// 	location.hash = `keyword=${word}`;
	// };


	return (
		<nav className="navbar navbar-expand-lg bg-color02">
			<div className="container-fluid">
				<a className="navbar-brand color01" href="#">SHOP SMARTLY</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				
				<form className="search d-flex" role="search">
					<input 
						className="form-control me-2" 
						type="search" 
						placeholder="Search" 
						aria-label="Search"
						onChange={event => searchHash(event.target.value)}
					/>
					{/* <button className="btn btn-outline-success" type="submit">Search</button> */}
				</form>

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
