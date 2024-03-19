import React from "react";
import Day from "./Day";

function Week({ firstDay, firstNumber, days }) {
	const getWeek = () => {
		let week = [];
		for (let i = 1; i <= days + firstDay - 1; i++) {
			if (i < firstDay) {
				week.push("");
			} else {
				week.push(firstNumber);
				firstNumber++;
			}
		}
		return week;
	};

	return (
		<div className="week">
			{getWeek().map((n, index) => {
				return index === 5 ||
					index === 6 ||
					index === 12 ||
					index === 13 ||
					index === 19 ||
					index === 20 ||
					index === 26 ||
					index === 27 ? (
					<Day number={n} isWeekend={true} />
				) : (
					<Day number={n} isWeekend={false} />
				);
			})}
		</div>
	);
}

export default Week;
