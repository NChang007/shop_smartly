import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Card from "../component/Card"

const specials = [
	{
		"name":"chair",
		"cost":"$1",
		"discription": "this is some text bc what else am i going to use lorem?? thas not smart"
	},
	{
		"name":"the rise and fall of the third Reich",
		"cost":"$1",
		"discription": "this is some text bc what else am i going to use lorem?? thas not smart"
	}
]
export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h2>Specials!</h2>
			{/* <div className=" peopleCont">
				{specials.map((item, idx) => {
					return (
						<div className="peopleDiv" key={idx}>
							<Card person={item} id={idx} />
						</div>

					)
				})}
			</div> */}
		</div>
	);
};
