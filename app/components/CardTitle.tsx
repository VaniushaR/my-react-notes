interface CardTitleProps {
	number: number;
	title: string;
	labelTitle: string;
	labelColor: string;
	newLabel?: boolean;
}

const CardTitle = ({
	number,
	title,
	labelTitle,
	labelColor,
	newLabel,
}: CardTitleProps) => {
	return (
		<>
			<h2 className="mb-0">
				#{number} Hook: {title}
			</h2>
			<span className={`badge bg-${labelColor} position-absolute top-0 end-0`}>
				<h3 className="mb-0">{labelTitle}</h3>
			</span>
			{newLabel ? (
				<span className="position-absolute top-0 start-50 translate-middle">
					<h4 className="badge bg-primary"> New! v.19 </h4>
				</span>
			) : null}
			<hr />
		</>
	);
};

export { CardTitle };
