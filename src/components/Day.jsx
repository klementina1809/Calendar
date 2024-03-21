import React from "react";

function Day({ number, isWeekend }) {
	const getColor = () => {
		return isWeekend ? "red" : "black";
	};
	return (
		<div className="day">
			<span className={"number " + getColor()}>{number}</span>
		</div>
	);
}

export default Day;
