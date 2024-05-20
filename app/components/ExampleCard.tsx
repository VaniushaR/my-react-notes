import { CollapsibleCode } from "./CollapsibleCode";

interface ExampleCardProps {
	title?: string;
	componentName?: string;
	code?: string;
	children?: React.ReactNode;
}

const ExampleCard = ({
	title,
	componentName,
	code,
	children,
}: ExampleCardProps) => {
	return (
		<>
			<div className="example-card p-4">
				<h4 className="mb-4">
					<i className="bi bi-code-square me-3"></i>
					<em>{title}</em>
				</h4>
				<div className="d-flex justify-content-between p-2">{children}</div>
				<CollapsibleCode componentName={componentName} code={code} />
			</div>
			<hr />
		</>
	);
};

export { ExampleCard };
