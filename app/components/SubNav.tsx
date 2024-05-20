import { Button } from "./Button";

interface SubNavProps {
	pageTitle?: string;
	customHTMLTag?: string;
	path: string | "/";
}

const SubNav = ({ pageTitle, customHTMLTag, path }: SubNavProps) => {
	const CustomTag = customHTMLTag
		? `${customHTMLTag}`
		: ("p" as React.ElementType);
	return (
		<nav className="d-flex justify-content-between align-items-center mt-2">
			{pageTitle ? <CustomTag className="me-4">{pageTitle}</CustomTag> : null}
			<Button
				btnTitle={"Index"}
				iconClasses={"bi bi-arrow-bar-left me-2"}
				path={path}
			/>
		</nav>
	);
};

export { SubNav };
