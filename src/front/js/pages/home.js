import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Card from "../component/Card"
import Banner from "../component/Banner";



export const Home = () => {
	return (
		<div className="text-center bodyCont bg-color04">
			<Banner />
			{/* <h2 className="color01">Specials!</h2>
			<div className="itemCont">
				{specials.map((item, idx) => {
					return (
						<div className="itemDiv" key={idx}>
							<Card item={item} id={idx} />
						</div>
					)
				})}
			</div>
			<h2 className="color01">Electronics!</h2>
			<div className="itemCont">
				{electronics.map((item, idx) => {
					return (
						<div className="itemDiv" key={idx}>
							<Card item={item} id={idx} />
						</div>
					)
				})}
			</div>
			<h2 className="color01">Home!</h2>
			<div className="itemCont">
				{homeStuff.map((item, idx) => {
					return (
						<div className="itemDiv" key={idx}>
							<Card item={item} id={idx} />
						</div>
					)
				})}
			</div> */}
		</div>
	);
};
