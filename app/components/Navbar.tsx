import logo from "../../public/logo.svg";
import Image from "next/image";

const Navbar = () => {
	return (
		<header className="App-header d-flex align-items-center ">
			<a href="/">
				<Image
					src={logo}
					className="App-logo p-1"
					alt="logo"
					height={60}
					width={60}
				/>
			</a>
			<h1 className="ms-4 fs-4 mt-1">My React JS Notes </h1>
		</header>
	);
};

export { Navbar };
