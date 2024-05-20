"use client";
import { useState } from "react";

interface questionsAnswersProps {
	questionsAnswers?: [pairProps];
}
interface pairProps {
	question: string;
	answer: string;
}

const QuestionsAndAnswers = ({ questionsAnswers }: questionsAnswersProps) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [isOpen, setIsOpen] = useState(false);

	const setOpenOnActiveIndex = (index: number) => {
		setActiveIndex(index);
		setIsOpen(!isOpen);
	};
	return (
		<>
			<h5>
				<i className="bi bi-question-circle-fill me-3"></i> Q&A
			</h5>
			<div className="accordion accordion-flush" id="accordionFlushQ&A">
				{questionsAnswers && questionsAnswers.length
					? questionsAnswers.map((pair, i) => (
							<div className="accordion-item" key={i}>
								<h6 className="accordion-header">
									<button
										className={`accordion-button ${
											activeIndex === i && isOpen ? "" : "collapsed"
										}`}
										type="button"
										data-bs-target={`#flush-collapse${i}`}
										aria-expanded={
											activeIndex === i && isOpen ? "true" : "false"
										}
										aria-controls="flush-collapseOne"
										onClick={() => setOpenOnActiveIndex(i)}
									>
										<b>{pair.question}</b>
									</button>
								</h6>
								<div
									id={`flush-collapse${i}`}
									className={`accordion-collapse ${
										activeIndex === i && isOpen ? "show" : "collapse"
									}`}
									data-bs-parent="#accordionFlushQ&A"
								>
									<div className="accordion-body">{pair.answer}</div>
								</div>
							</div>
					  ))
					: null}
			</div>
			<hr />
		</>
	);
};

export { QuestionsAndAnswers };
