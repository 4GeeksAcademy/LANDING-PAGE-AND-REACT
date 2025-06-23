import React from "react";

import { Footer } from "./footer";
import { Navbar } from "./Navbar";
import  Card  from "./card.jsx";


//create your first component
const Home = () => {
	return (
	<div className="container mt-5">
		<div className="row">
			<Card
			title="Tarjeta1"
			text="title"
			imageUrl="https://via.placeholder.com/150"
			/>

		</div>
		
	</div>

	);

};

export default Home;
