const days = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

const currentday = days[new Date().getDay()];

if (currentday === "Sunday") {
	document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent =
		currentday;
} else {
	document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent =
		'Today is not Sunday. It"s' + currentday;
}

const currentDate = new Date();
const timeString = "11:32:37";
const timeParts = timeString.split(":");
const customDate = new Date(
	currentDate.getFullYear(),
	currentDate.getMonth(),
	currentDate.getDate(),
	timeParts[0],
	timeParts[1],
	timeParts[2]
);

const utcMilliseconds = customDate.getTime();
document.querySelector('[data-testid="currentUTCTime"]').textContent =
	utcMilliseconds;
