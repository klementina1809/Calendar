import Year from "./components/Year";
import "./App.css";

function App() {
	const getCurrentYear = () => {
		const d = new Date();
		const year = d.getFullYear();
		return year;
	};
	const year = getCurrentYear();

	return (
		<>
			<h1> Calendar for {year}</h1>
			<Year year={year} />
		</>
	);
}

export default App;
