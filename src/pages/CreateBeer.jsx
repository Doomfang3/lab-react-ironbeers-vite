import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateBeer() {
	const [beerInputSt, setBeerInputSt] = useState({
		name: "",
		tagline: "",
		description: "",
		first_brewed: "",
		brewers_tips: "",
		attenuation_level: 0,
		contributed_by: "",
	});
	const navigate = useNavigate();

	const handleInput = (e) => {
		setBeerInputSt({ ...beerInputSt, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const payload = beerInputSt;
		try {
			const response = await fetch(
				"https://ih-beers-api2.herokuapp.com/beers/new",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(payload),
				}
			);
			if (response.status === 200) {
				navigate(`/beers`);
			}
		} catch (error) {}
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>
					Name:
					<input name="name" value={beerInputSt.name} onChange={handleInput} />
				</label>
				<br />
				<label>
					Tagline:
					<input
						name="tagline"
						value={beerInputSt.tagline}
						onChange={handleInput}
					/>
				</label>
				<br />
				<label>
					Description:
					<input
						name="description"
						value={beerInputSt.description}
						onChange={handleInput}
					/>
				</label>
				<br />
				<label>
					First Brewed:
					<input
						name="first_brewed"
						value={beerInputSt.first_brewed}
						onChange={handleInput}
					/>
				</label>
				<br />
				<label>
					Brewers Tips:
					<input
						name="brewers_tips"
						value={beerInputSt.brewers_tips}
						onChange={handleInput}
					/>
				</label>
				<br />
				<label>
					Attenuation Level:
					<input
						type="number"
						name="attenuation_level"
						value={beerInputSt.attenuation_level}
						onChange={handleInput}
					/>
				</label>
				<br />
				<label>
					Contributed By :
					<input
						name="contributed_by"
						value={beerInputSt.contributed_by}
						onChange={handleInput}
					/>
				</label>
				<button type="submit">Create!</button>
			</form>
		</div>
	);
}

export default CreateBeer;
