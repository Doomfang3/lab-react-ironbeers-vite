import { useEffect, useState } from "react";

function RandomBeer() {
	const [randomBeerSt, setRandomBeerSt] = useState();

	const getRandomBeer = async () => {
		try {
			const response = await fetch(
				"https://ih-beers-api2.herokuapp.com/beers/random"
			);
			if (response.status === 200) {
				const randomBeer = await response.json();
				setRandomBeerSt(randomBeer);
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getRandomBeer();
	}, []);

	return randomBeerSt ? (
		<div>
			<img src={randomBeerSt.image_url} alt={randomBeerSt.name} />
			<h2>{randomBeerSt.name}</h2>
			<h3>{randomBeerSt.tagline}</h3>
			<h3>{randomBeerSt.attenuation_level}</h3>
			<p>{randomBeerSt.first_brewed}</p>
			<p>{randomBeerSt.description}</p>
			<p>{randomBeerSt.contributed_by}</p>
		</div>
	) : (
		<h2>Loading...</h2>
	);
}

export default RandomBeer;
