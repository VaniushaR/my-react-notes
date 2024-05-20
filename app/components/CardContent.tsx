interface CardContentProps {
	basicSyntax?: string;
	returnValue?: [];
	children?: React.ReactNode;
	keyPoints?: [];
	pictureSrc?: string;
	pictureAlt?: string;
}

const CardContent = ({
	basicSyntax,
	returnValue,
	children,
	keyPoints,
	pictureSrc,
	pictureAlt,
}: CardContentProps) => {
	return (
		<>
			<h4>
				<i className="bi bi-braces me-3"></i>Basic Syntax:
			</h4>
			<span className="p-4 bg-white">
				<code className="basic-syntax">
					<b>{basicSyntax}</b>
				</code>
			</span>
			<h4>
				<i className="bi bi-arrow-return-right me-3"></i>Return:
			</h4>
			<span className="p-4 bg-light">
				{returnValue && returnValue.length > 0
					? returnValue.map((value, i) => (
							<p key={i}>
								<i className="bi bi-play-fill me-2"></i>
								<b>{value}</b>
							</p>
					  ))
					: null}
			</span>
			<h4>
				<i className="bi bi-lightbulb me-3"></i>Description:
			</h4>
			<span className="mb-4">{children}</span>

			{pictureSrc && pictureAlt ? (
				<img
					src={pictureSrc}
					className="mb-4"
					alt={pictureAlt}
					height="500px"
					width="500px"
				></img>
			) : null}
			<h4>
				<i className="bi bi-gem me-3"></i>Key Points:{" "}
			</h4>
			<ul>
				{keyPoints && keyPoints.length > 0
					? keyPoints.map((point, i) => <li key={i}>{point}</li>)
					: null}
			</ul>
			<hr />
		</>
	);
};

export { CardContent };
