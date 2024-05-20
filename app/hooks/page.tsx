import indexData from "../static-data/index-hooks.json";
import { IndexTopics } from "../components/IndexTopics";

export default function ReactHooks() {
	return (
		<main className="container">
			<div className="card mt-4">
				<p className="p-4">
					After the release of the 16th version or React, and since the Hook
					concept was introduced and until the 18th version, recently released,
					we can have a count of 19 different Hooks, clasificated in 8 different
					categories related to its purpose, as{" "}
					<span className="badge bg-primary">Sate Management</span>, Context,
					Transition, Effect, Reference, Performance and Random hooks, for this
					matter, the Hooks recently added in the v.19 are clasified in the
					latest hooks category.
				</p>
			</div>
			<section className="text-start mt-5">
				<div className="card shadow-lg p-2 mb-4 text-center">
					<h2>React Hooks Handbook</h2>
				</div>
				<nav>
					<IndexTopics indexData={indexData} />
				</nav>
				<section className="d-grid gap-2 d-md-flex justify-content-md-between flex-wrap ">
					<button className="btn btn-outline-info btn-lg mt-4 p-2">
						<i className="bi bi-card-checklist me-2"></i>
						<a href="/study-cards-hooks">Study Cards</a>
					</button>
					<button className="btn btn-outline-pastel-pink btn-lg mt-4 p-2">
						<i className="bi bi-keyboard me-2"></i>
						<a href="/create-my-own-hook">Create my own Hook</a>
					</button>
					<button className="btn btn-outline-pastel-green btn-lg mt-4 p-2">
						<i className="bi bi-share me-2"></i>
						Send to a friend
					</button>
					<button className="btn btn-outline-pastel-coral btn-lg mt-4 p-2">
						<i className="bi bi-chat-right-heart me-2"></i>
						<a href="/social-network">Connect & Collaborate</a>
					</button>
					<button className="btn btn-outline-pastel-lilac btn-lg mt-4 p-2">
						<i className="bi bi-cup-hot me-2"></i>
						<a href="/thank-you">Invite me a coffee</a>
					</button>
				</section>
			</section>
		</main>
	);
}
