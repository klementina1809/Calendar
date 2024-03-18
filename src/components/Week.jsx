import React from "react";
import Day from "./Day";

function Week({ firstDay, firstNumber }) {
	const getWeek = () => {
		let week = [];
		const lastIndex = 7 - (firstDay - 1);
		for (let i = 1; i < firstDay; i++) {
			week.push("");
		}
		for (let i = 0; i < lastIndex; i++) {
			week.push(firstNumber);
			firstNumber++;
		}
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
