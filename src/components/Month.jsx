import React from "react";
import Week from "./Week";

function Month({ firstDay, days, name }) {
	const days_of_week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
	const weeksNumber = Math.ceil((days + firstDay - 1) / 7);
	const getMonth = () => {
		const month = [];
		for (let i = 0; i < weeksNumber; i++) {

			let currentDay = i == 0 ? firstDay : 1;
			let currentNumber = i == 0 ? 1 + 7 * i : 1 + 7 * i - (firstDay - 1);
			month.push(
				<Week
					key={i}
					firstDay={currentDay}
					firstNumber={currentNumber}
					lastNumber={days}
				/>
			);
		}

		return month;
	};

	return (
		<div>
			<h2>{name}</h2>
			<div className="days-of-week">
				{days_of_week.map((d) => (
					<span  key={d}>
						{d}
					</span>
				))}
			</div>
			{getMonth()}
		</div>
	);
}

export default Month;
