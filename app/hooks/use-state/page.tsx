import { References } from "../../components/References";
import { Considerations } from "../../components/Considerations";
import { SubNav } from "@/app/components/SubNav";
import { ExampleCard } from "../../components/ExampleCard";
import { CardTitle } from "../../components/CardTitle";
import { CardContent } from "../../components/CardContent";
import { QuestionsAndAnswers } from "../../components/Q&A";

export default function UseStateHook() {
	return (
		<main className="container">
			<SubNav
				pageTitle={"React Hooks Handbook"}
				customHTMLTag={"h2"}
				path={"/hooks"}
			/>
			<div className="card border-gray-100 p-4 mb-4">
				<CardTitle
					number={2}
					title={"useState"}
					labelTitle={"State Management"}
					labelColor={"pastel-green"}
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
}
