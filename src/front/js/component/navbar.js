import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-dark nav-dark">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">Navbar</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				
				<form className="search d-flex" role="search">
					<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
					{/* <button className="btn btn-outline-success" type="submit">Search</button> */}
				</form>

				<ul className="navbar-nav ">
					<li className="nav-item">
						<a className="nav-link active" aria-current="page" href="#">LogIn</a>
					</li>					
				</ul>
				
			</div>
		</nav>
	);
};
