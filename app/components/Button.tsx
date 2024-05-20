interface ButtonProps {
	btnTitle: string;
	path: string | "/";
	iconClasses?: string;
}

const Button = ({ btnTitle, path, iconClasses }: ButtonProps) => {
	return (
		<div className="d-flex justify-content-end mt-3 mb-3">
			<button className="btn btn-light">
				<a href={path}>
					<i className={iconClasses}></i> {btnTitle}
				</a>
			</button>
		</div>
	);
};

export { Button };
