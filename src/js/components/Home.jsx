import React from "react";

import { Footer } from "./Footer.jsx";
import { Navbar } from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import  Card  from "./Card.jsx";
import { Footer } from "./Footer.jsx";




//create your first component
const Home = () => {
	return (
	<>
		<Navbar />
        <Jumbotron />
	<div className="container mt-5">
		<div className="row">
			<Card
			title="Tarjeta1"
			text="title"
			imageUrl="https://picsum.photos/id/1018/300/200"
			/>
		    <Card 
			title= "Tarjeta 2"
			text="Tarjeta 2"
            imageUrl="https://picsum.photos/id/1018/300/200"
			/>
			<Card
			title="Tarjeta 3"
			text="Tarjeta3"
			imageUrl="https://picsum.photos/id/1018/300/200"
			/>
		</div>
	</div>
	<Footer />
 </>
);
};

export default Home;
