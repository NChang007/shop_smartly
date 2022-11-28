import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
// import Pagination from "../component/Pagination";
import Card from "../component/Card"
import Banner from "../component/Banner";
import BudgetBuddy from "../component/BudgetBuddy";



export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="text-center bodyCont bg-color04">
			<Banner />
			<h2 className="color01">Specials!</h2>
			<div className="itemCont">
				{store.specials.map((item, idx) => {
					return (
						<div className="itemDiv" key={idx}>
							<Card item={item} id={idx} type="specials"/>
						</div>
					)
				})}
			</div>
			<h2 className="color01">Electronics!</h2>
			<div className="itemCont">
				{store.electronics.map((item, idx) => {
					return (
						<div className="itemDiv" key={idx}>
							<Card item={item} id={idx} type="electronics"/>
						</div>
					)
				})}
			</div>
			<h2 className="color01">Home!</h2>
			<div className="itemCont">
				{store.homeStuff.map((item, idx) => {
					return (
						<div className="itemDiv" key={idx}>
							<Card item={item} id={idx} type="homeStuff"/>
						</div>
					)
				})}
			</div>

			<BudgetBuddy />
		</div>
	);
};
