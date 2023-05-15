import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Beer() {
	const { id } = useParams();
	const [oneBeerSt, setOneBeerSt] = useState();

	const getOneBeer = async () => {
		try {
			const response = await fetch(
				"https://ih-beers-api2.herokuapp.com/beers/" + id.toString()
			);
			if (response.status === 200) {
				const oneBeer = await response.json();
				setOneBeerSt(oneBeer);
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getOneBeer();
	}, []);

	return oneBeerSt ? (
		<div>
			<img src={oneBeerSt.image_url} alt={oneBeerSt.name} />
			<h2>{oneBeerSt.name}</h2>
			<h3>{oneBeerSt.tagline}</h3>
			<h3>{oneBeerSt.attenuation_level}</h3>
			<p>{oneBeerSt.first_brewed}</p>
			<p>{oneBeerSt.description}</p>
			<p>{oneBeerSt.contributed_by}</p>
		</div>
	) : (
		<h2>Loading...</h2>
	);
}

export default Beer;
