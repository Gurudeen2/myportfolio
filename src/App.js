import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Notfound from "./pages/404";

import "./app.css";

function App() {
	

	return (
		<div className="App">
			<Routes>
				<Route path="/"  element={<Homepage />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				{/* <Route path="/articles" element={<Articles />} /> */}
				{/* <Route path="/article/:slug" element={<ReadArticle />} /> */}
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<Homepage />} />
			</Routes>
		</div>
	);
}

export default App;
