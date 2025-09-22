import "./App.css";
import StandardPlaceholder from "components/StandardPlaceholder";
import PrimevalHorizon from "components/PrimevalHorizon";
import useIsMobile from "components/useIsMobile";
import { BrowserRouter, Routes, Route, Link, useNavigate, Navigate } from "react-router-dom";
import Home from 'components/Home';

function App() {
	const isMobile: boolean = useIsMobile();
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/PrimevalHorizon" element={<PrimevalHorizon />} />
			</Routes>
		</BrowserRouter>
	);
}
//      <PrimevalHorizon />

export default App;
