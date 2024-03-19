import React from "react";
import Week from "./Week";

function Month({ firstDay, days }) {
	const days_of_week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
	const weeksNumber = Math.ceil((days + firstDay - 1) / 7);

	const getMonth = () => {
		let currentDay = 1;
		const month = [
			<Week
				key={0}
				firstDay={firstDay}
				firstNumber={currentDay}
				days={days}
			/>,
		];

		for (let i = 0; i < weeksNumber; i++) {
			month.push(
				<Week
					key={i}
					firstDay={1}
					firstNumber={currentDay}
					days={days}
				/>
			);
			currentDay += 7;
		}

		return month;
	};

	return (
		<div>
			{days_of_week.map((d) => (
				<span className="day-of-week" key={d}>
					{d}
				</span>
			))}
			{getMonth()}
		</div>
	);
}

export default Month;
