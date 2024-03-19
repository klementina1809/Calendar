import React from "react";
import Week from "./Week";

function Month({ firstDay, days }) {
	const days_of_week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

	return (
		<div>
			{days_of_week.map((d) => (
				<span className="day-of-week" key={d}>{d}</span>
			))}
			<Week firstDay={firstDay} firstNumber={1} days={days} />
		</div>
	);
}

export default Month;
