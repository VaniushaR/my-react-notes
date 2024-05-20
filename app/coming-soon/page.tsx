import Image from "next/image";
import ComingSoonImg from "../../public/comming-soon.png";
import Link from "next/link";

export default function ComingSoon() {
	return (
		<section className="container text-center">
			<Link href="/">
				<Image src={ComingSoonImg} alt="Coming Soon" height={600} width={600} />
			</Link>
		</section>
	);
}
