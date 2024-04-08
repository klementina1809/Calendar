import React from "react";
import Day from "./Day";

function Week({ firstDay, firstNumber, lastNumber }) {
	const getWeek = () => {
		let number = firstNumber;
		let week = [];
		for (let i = 1; i < 7; i++) {
			if (i < firstDay-1) {
				week.push("");
			} else {
				if (number <= lastNumber) {
					week.push(number);
					number++;
				} else week.push("");
			}
		}
		return week;
	};

	return (
		<div className="week">
			{getWeek().map((n, index) => (
				<Day
					key={index}
					number={n}
					isWeekend={index === 5 || index === 6}
				/>
			))}
		</div>
	);
}

export default Week;
