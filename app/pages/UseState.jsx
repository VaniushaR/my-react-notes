import { useState } from "react";
import { References } from "../shared/References";
import { Considerations } from "../shared/Considerations";
import { SubNav } from "../shared/SubNav";
import { ExampleCard } from "../shared/ExampleCard";
import { CardTitle } from "../shared/CardTitle";
import { CardContent } from "../shared/CardContent";
import { QuestionsAndAnswers } from "../shared/Q&A";

const UseStateExample = () => {
	const [count, setCount] = useState(0);
	const [isActive, setIsActive] = useState(true);
	const [show, setShow] = useState(true);

	const increment = (n) => {
		return setCount(n + 1);
	};
	const decrement = (n) => {
		return setCount(n - 1);
	};

	const codeIncrementDecrement = `
	import { useState } from 'react';

	const CountStateSample = () => {

	//define the state as 0
	const [count, setCount] = useState(0);

	//increment and decrement pure functions:

	const increment = (n) => {
		return setCount(n + 1);
	};

	const decrement = (n) => {
		return setCount(n - 1);
	};
	
	return (
		<button onClick={() => increment(count)}>
			Increment
		</button>
		<button onClick={() => decrement(count)}>
			Decrement
		</button>

		<p>
			Count is: {count}
		</p>
	)}
`;

	const codeClassState = `
import { useState } from 'react';

const ClassStateSample = () => {

	const [ isActive, setIsActive ] = useState(true);

	return ( 
		<button className={${"`"}btn ${"${isActive"} ? 'btn-secondary' : 'btn-warning' ${"`"}} onClick={() => setIsActive(!isActive)}>
			Click on me to toggle boolean class state
		</button>
	)
}
`;

	const codeConditionalRendering = `
import { useState } from 'react';

const ConditionalRenderingSample = () => {
	const [ renderCard, setRenderCard ] = useState(false);

	return (
		<> 
		<button onClick={() => setRenderCard(!renderCard)}>
				Show or hide the card:
		</button>
		{renderCard ? (
			<div className="card w-50 ">
				<div className="card-body">
					<p className="card-text">
						Conditionally rendered if <i>renderCard </i> is true or false.
					</p>
				</div>
			</div>
		) : null}
		</>
	)
}
`;

	const considerationsUseState = [
		"The useState Hook ah",
		"another thing to consider is...",
	];

	const questionsAndAnswersUseState = [
		{
			question: "¿How many data types are allowed as satate values?",
			answer: "All the Javascript data values",
		},
		{ question: "", answer: "" },
		{ question: "", answer: "" },
		{ question: "", answer: "" },
		{ question: "", answer: "" },
	];
	const referencesList = [
		{
			title: "Oficial documentation of useState",
			url: "https://react.dev/reference/react/useState",
			description: "Great for deep understanding of useState.",
		},
		{ title: "", url: "", description: "" },
		{ title: "", url: "", description: "" },
		{ title: "", url: "", description: "" },
		{ title: "", url: "", description: "" },
	];
	return (
		<main className="container">
			<SubNav pageTitle={"React Hooks Handbook"} customHTMLTag={"h1"} />
			<div className="card border-gray-100 p-4 mb-4">
				<CardTitle
					number={1}
					title={"useState"}
					labelTitle={"State Management"}
					labelColor={"pastel-blue"}
				/>
				<CardContent
					basicSyntax={"const [count, setCount] = useState()"}
					returnValue={[
						"State: An independently mantained state variable initialiced in the useState() hook only argument.",
						"setState: a function to update the state.",
					]}
					keyPoints={["A state value have a...", "State can be set as..."]}
				>
					<p>
						The useState Hook, released in v16, is the most common Hook due to
						it's versatile nature.It's defined from an destreuctured array
						including an{" "}
						<mark>initial value and the function to update that value</mark>{" "}
						starting with set keyword. While updating triggers a re-render to
						update the current value, in this case count
						<code> const [count, setCount] = useState(0) </code> The flexibility
						of this Hook, allow us to have any type of data as initial state. Is
						certanly the most used component even for updating dynamic css
						classes on ui, or update any data value. Consider that on{" "}
						<mark>StrictMode</mark> this hook is reviewed to help to avoid 'side
						effects' on the code, as state management issues that may affect the
						app performance.
					</p>
				</CardContent>

				<ExampleCard
					title={"Example 1: Increment and Decrement Numeric State"}
					componentName={"Increment & Decrement State"}
					code={codeIncrementDecrement}
				>
					<button
						type="button"
						className="btn btn-success"
						onClick={() => increment(count)}
					>
						Increment
					</button>
					<span className="ms-4 me-4 p-4" width={"30px"}>
						Count is: <strong>{count}</strong>
					</span>
					<button
						type="button"
						className="btn btn-danger ms-2"
						onClick={() => decrement(count)}
					>
						Decrement
					</button>
				</ExampleCard>
				<ExampleCard
					title={"Example 2: Dynamic class based on a boolean state:"}
					componentName={"Increment & Decrement State"}
					code={codeClassState}
				>
					<button
						className={`btn ${isActive ? "btn-secondary" : "btn-warning"} `}
						onClick={() => setIsActive(!isActive)}
					>
						Click on me to update my class state
					</button>
				</ExampleCard>
				<ExampleCard
					title={"Conditional Rendering"}
					componentName={"Conditional Rendering Sample"}
					code={codeConditionalRendering}
				>
					<button className="btn btn-info mb-4" onClick={() => setShow(!show)}>
						Show or hide the card:
					</button>
					{show ? (
						<div className="card w-50 ">
							<div className="card-body">
								<p className="card-text">
									Conditionally rendered if <i>renderCard </i> is true or false.
								</p>
							</div>
						</div>
					) : null}
				</ExampleCard>
				<Considerations list={considerationsUseState} />
				<QuestionsAndAnswers questionsAnswers={questionsAndAnswersUseState} />
				<References referencesList={referencesList} />
			</div>
		</main>
	);
};

export { UseStateExample };
