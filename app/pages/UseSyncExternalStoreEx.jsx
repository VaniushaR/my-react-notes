import { References } from "../shared/References";
import { Considerations } from "../shared/Considerations";
import { SubNav } from "../shared/SubNav";
import { ExampleCard } from "../shared/ExampleCard";
import { CardTitle } from "../shared/CardTitle";
import { CardContent } from "../shared/CardContent";
import { QuestionsAndAnswers } from "../shared/Q&A";

const UseSyncExternalStoreExample = () => {
	return (
		<main className="container">
			<SubNav pageTitle={"React Hooks Handbook"} customHTMLTag={"h2"} />
			<div className="card border-gray-100 p-4 mb-4">
				<CardTitle
					number={2}
					title={"useSyncExternalStore"}
					labelTitle={"State Management"}
					labelColor={"pastel-blue"}
				/>
				<CardContent>
					<p>...</p>
				</CardContent>
				<ExampleCard />
				<Considerations />
				<QuestionsAndAnswers />
				<References />
			</div>
		</main>
	);
};

export { UseSyncExternalStoreExample };
