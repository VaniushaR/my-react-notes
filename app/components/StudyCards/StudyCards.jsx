import questionarie from "../../static-data/study-cards-questionarie.json";
import { fillArrayPalette } from "../../utilities/randomColor";
import { colorPalette } from "../../static-data/color-palette";
import { SubNav } from "../SubNav";
import "./study-cards.scss";

const StudyCards = () => {
	const newLenght = questionarie.questionarie.length;
	const extendedPalette = fillArrayPalette(newLenght, colorPalette);

	return (
		<section className="container study-cards">
			<SubNav pageTitle={"Study Cards"} customHTMLTag={"h1"} />

			<div className="d-flex flex-wrap justify-content-center study-cards__board pt-4 pb-4">
				{questionarie.questionarie && questionarie.questionarie.length
					? questionarie.questionarie.map((pair, i) => (
							<div className="study-cards__flip-card m-4" key={i}>
								<div className="study-cards__inner-card">
									<div
										className={`study-cards__front-card shadow-lg p-2 d-flex justify-content-center align-items-center text-center rounded ${`bg-pastel-${extendedPalette[i]}`}`}
									>
										<p>{pair.question}</p>
									</div>
									<div className="card study-cards__back-card p-2 d-flex justify-content-center align-items-center text-center">
										<p>{pair.answer}</p>
									</div>
								</div>
							</div>
					  ))
					: null}
			</div>
		</section>
	);
};

export { StudyCards };
