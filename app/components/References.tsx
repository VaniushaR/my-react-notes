interface referencesProps {
	referencesList?: [reference];
}
interface reference {
	url: string;
	title: string;
	description: string;
}
const References = ({ referencesList }: referencesProps) => {
	return (
		<>
			<h5 className="mb-4">
				<i className="bi bi-eyeglasses me-3"></i>References & more learning
				resources:{" "}
			</h5>
			{referencesList && referencesList.length > 0
				? referencesList.map((item, i) => (
						<div className="ms-2 d-flex" key={i}>
							<p className="me-2">
								<i className="bi bi-bookmark-heart me-2"></i>
								<a href={item.url} target="_blank" rel="noreferrer">
									{item.title}.
								</a>
							</p>

							<p>{item.description}</p>
						</div>
				  ))
				: null}
		</>
	);
};

export { References };
