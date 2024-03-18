import React from "react";
import Day from "./Day";
import _ from "lodash";

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
			{getWeek().map((n) => (
				<Day number={n} isWeekend={false} />
			))}
		</div>
	);
}

export default Week;
