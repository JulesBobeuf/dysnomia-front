import { Outlet } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Layout() {
	return (
		<div className="page-container">
			<Header />
			<main className="content">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
