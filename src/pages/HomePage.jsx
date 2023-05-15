import { Link } from "react-router-dom";
import beersImg from "../assets/beers.png";
import randomBeerImg from "../assets/random-beer.png";
import newBeerImg from "../assets/new-beer.png";

function HomePage() {
	return (
		<div>
			<section>
				<img src={beersImg} alt="beer" />
				<Link to="/beers">All Beers</Link>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
			</section>
			<section>
				<img src={randomBeerImg} alt="random beer" />
				<Link to="/random-beer">Random Beer</Link>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
			</section>
			<section>
				<img src={newBeerImg} alt="new beer" />
				<Link to="/new-beer">New Beer</Link>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
			</section>
		</div>
	);
}

export default HomePage;
