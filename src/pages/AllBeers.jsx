import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllBeers() {
	const [allBeersSt, setAllBeersSt] = useState([]);

	const getAllBeers = async () => {
		try {
			const response = await fetch("https://ih-beers-api2.herokuapp.com/beers");
			if (response.status === 200) {
				const allBeers = await response.json();
				setAllBeersSt(allBeers);
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getAllBeers();
	}, []);

	return (
		<div>
			{allBeersSt.map((beer) => {
				return (
					<div key={beer._id}>
						<img src={beer.image_url} alt={beer.name} />
						<Link to={`/beers/${beer._id}`}>
							<h2>{beer.name}</h2>
						</Link>
						<h3>{beer.tagline}</h3>
						<p>
							<strong>Contributed By: </strong>
							{beer.contributed_by}
						</p>
					</div>
				);
			})}
		</div>
	);
}

export default AllBeers;
