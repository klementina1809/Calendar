import React from "react";
import Month from "./Month";

function Year({year}) {
	const months = [
		{ name: "January", days: 31 },
		{ name: "February", days: 28 },
		{ name: "March", days: 31 },
		{ name: "April", days: 30 },
		{ name: "May", days: 31 },
		{ name: "June", days: 30 },
		{ name: "July", days: 31 },
		{ name: "August", days: 31 },
		{ name: "September", days: 30 },
		{ name: "October", days: 31 },
		{ name: "November", days: 30 },
		{ name: "December", days: 31 },
	];

	const getFirstDayOfYear = () => {
		const d = new Date(year, 0, 1);
		const firstDay = d.getDay();
		return firstDay;
	};

	const getYear = () => {
		const year = [];
		let currentDay;

		const getCurrentDay = (month) => {
			const delta = months[month-1].days - 28;
			let result = currentDay + delta;
			if (result > 7) result -= 7;
			return result;
		};

		for (let i = 0; i < 12; i++) {
			currentDay = i === 0 ? getFirstDayOfYear() : getCurrentDay(i);

			year.push(
				<Month
					key={i}
					firstDay={currentDay}
					days={months[i].days}
					name={months[i].name}
				/>
			);
		}

		return year;
	};

	return <div className="year">{getYear()}</div>;
}

export default Year;
