import React from "react";

function Day({ number, isWeekend }) {

	const getNumberClass = () => {
    console.log(number);
		if (isWeekend) return "number red";
		if (!isWeekend) return "number black";
	};
	return (
		<div className="day">
			<span className={getNumberClass()}>{number}</span>
		</div>
	);
}

export default Day;
