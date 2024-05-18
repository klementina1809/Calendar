import { useState, useEffect } from "react";
import Year from "./components/Year";
import "./App.css";

function App() {
	const [year, setYear] = useState("");

	useEffect(() => {
		const d = new Date();
		const currentYear = d.getFullYear();
		setYear(currentYear);
	}, []);

	const handleSelect = (e) => {
		const selected = e.target.value;
		setYear(selected);
	};
	const generateYearOptions = () => {
		const startYear = 1980;
		const endYear = 2030;
		const yearOptions = [];
		for (let year = startYear; year <= endYear; year++) {
			yearOptions.unshift(
				<option key={year} value={year}>
					{year}
				</option>
			);
		}
		return yearOptions;
	};

	return (
		<>
			<select onChange={(e) => handleSelect(e)} name="" id="">
				<option value="">Choose the year</option>
				{generateYearOptions()}
			</select>

			<h1> Calendar for {year}</h1>
			<Year year={year} />
		</>
	);
}

export default App;
