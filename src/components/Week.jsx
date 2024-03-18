import React from "react";
import Day from "./Day";

function Week({ firstDay, firstNumber }) {
	const getWeek = () => {
		let week = [];
		for (let i = 1; i <= 7; i++) {
			if (i < firstDay) {
				week.push("");
			} else {
				week.push(firstNumber);
				firstNumber++;
			}}
		return week;
	};

	return (
		<div className="week">
			{getWeek().map((n, index) => {
				return index === 5 || index === 6 ? (
					<Day number={n} isWeekend={true} />
				) : (
					<Day number={n} isWeekend={false} />
				);
			})}
		</div>
	);
}

export default Week;
