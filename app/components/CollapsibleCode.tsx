"use client";
import { useState } from "react";

interface CollapsibleCodeProps {
	componentName?: string;
	code?: string;
}

const CollapsibleCode = ({ componentName, code }: CollapsibleCodeProps) => {
	const [collapse, setCollapse] = useState(false);
	return (
		<div>
			<button
				className="btn btn-light btn-sm mt-4 "
				onClick={() => setCollapse(!collapse)}
			>
				{collapse ? "Hide " : "Show "} code
			</button>
			{collapse ? (
				<div className="card card-body mt-2 bg-light">
					<div className="card-title">
						<mark>{componentName}</mark>
					</div>
					<div className="card-text" id={`collapse-${componentName}`}>
						<code>{code}</code>
					</div>
				</div>
			) : null}
		</div>
	);
};

export { CollapsibleCode };
