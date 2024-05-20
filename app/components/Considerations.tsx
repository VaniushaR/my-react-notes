interface ConsiderationsProps {
	list?: [];
}

const Considerations = ({ list }: ConsiderationsProps) => {
	return (
		<>
			<h5 className="mt-4 mb-4">
				<mark>
					<i className="bi bi-highlighter me-3"></i>Considerations:{" "}
				</mark>
			</h5>
			{list && list.length !== 0
				? list.map((item, i) => (
						<p className="ms-2" key={i}>
							<i className="bi bi-pin me-2"></i>
							{item}
						</p>
				  ))
				: null}
			<hr />
		</>
	);
};

export { Considerations };
