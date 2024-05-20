import Link from "next/link";
import { fillArrayPalette } from "./utils/randomColor";
import { colorPalette } from "./static-data/color-palette";
import notebooksData from "./static-data/notebooks.json";

export default function Home() {
	interface Notebook {
		title: string;
		url: string;
	}
	interface Notebooks {
		[key: string]: Notebook;
	}
	//asserting the Type of Imported data conformed to Notebooks interface
	const notebooks: Notebooks = notebooksData as Notebooks;

	const notebooksArr = notebooksData ? Object.keys(notebooksData) : null;

	const extendedPalette = notebooksArr
		? fillArrayPalette(notebooksArr.length, colorPalette)
		: null;

	return (
		<main className="book-shelf d-flex flex-column align-items-center justify-content-center">
			<section className="book-shelf__icon-container m-4">
				<i className="bi bi-journal-code"></i>
			</section>
			<div className="card">
				<div className="card-body">
					<h1 className="card-title">My React JS Notes</h1>
				</div>
			</div>
			<hr />
			<section className="book-shelf__notebooks-container d-flex flex-wrap gap-4 p-5 align-items-center justify-content-center">
				{notebooksArr && notebooksArr.length > 0
					? notebooksArr.map((book, i) => (
							<Link href={notebooks[book].url} key={book}>
								<div
									className={`book-shelf__notebook card text-center bg-pastel-${extendedPalette[i]}`}
								>
									<h4 className="my-4 text-bg-text-white rounded">
										{notebooks[book]?.title}
									</h4>
									<i className="bi bi-code-slash"></i>
								</div>
							</Link>
					  ))
					: null}
			</section>
		</main>
	);
}
