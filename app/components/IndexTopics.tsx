"use client";
import { Fragment, useState } from "react";
import { colorPalette } from "../static-data/color-palette";

interface SubtopicProps {
	type: string;
	path: string;
}

interface IndexDataProps {
	[topic: string]: {
		hooks: SubtopicProps[];
		description?: string;
	};
}

const IndexTopics = ({ indexData }: { indexData: IndexDataProps }) => {
	const [collapse, setCollapse] = useState(false);
	const indexTopics = Object.keys(indexData);
	const [activeIndex, setActiveIndex] = useState(0);

	const toggler = (i: number) => {
		setActiveIndex(i);
		setCollapse(!collapse);
	};

	return (
		<>
			{indexTopics ? (
				<ul className="list-group">
					{indexTopics.map((topic, i) => (
						<Fragment key={topic + i}>
							<li
								className={`list-group-item text-bg-pastel-${colorPalette[i]} text-white d-flex justify-content-between `}
							>
								<h3>
									<i className="bi bi-journal-code me-3"></i> {topic}
								</h3>
								<button
									className="bg-transparent text-white border-0"
									data-index={i}
									onClick={() => toggler(i)}
									type="button"
								>
									<i
										data-index={i}
										className={
											activeIndex === i && collapse
												? "bi bi-caret-up-fill"
												: "bi bi-caret-down-fill"
										}
									></i>
								</button>
							</li>
							{activeIndex === i && collapse ? (
								<li className="list-group-item bg-white">
									<p>{indexData[topic].description}</p>
								</li>
							) : null}
							{indexData[topic].hooks
								? indexData[topic].hooks.map((subtopic, j) => (
										<li className="list-group-item" key={i + j}>
											<i className="bi bi-paperclip me-3"></i>
											<a href={subtopic.path}>{subtopic.type}</a>
										</li>
								  ))
								: null}
						</Fragment>
					))}
				</ul>
			) : null}
		</>
	);
};

export { IndexTopics };
