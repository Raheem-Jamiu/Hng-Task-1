function updateUTCDateTime() {
	const utcDate = new Date().toUTCString();
	const utcTimeInMilliseconds = new Date().getTime();
	document.getElementById("utcDateTime").textContent = ` ${utcDate} `;
}

setInterval(updateUTCDateTime, 1000);

updateUTCDateTime();
