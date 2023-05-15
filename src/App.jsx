// import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import AllBeers from "./pages/AllBeers";
import RandomBeer from "./pages/RandomBeer";
import CreateBeer from "./pages/CreateBeer";
import Beer from "./pages/Beer";

function App() {
	// const [count, setCount] = useState(0);

	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/beers" element={<AllBeers />} />
				<Route path="/beers/:id" element={<Beer />} />
				<Route path="/random-beer" element={<RandomBeer />} />
				<Route path="/new-beer" element={<CreateBeer />} />

				<Route path="*" element={<h2>NOT FOUND</h2>} />
			</Routes>
		</div>
	);
}

export default App;
