const days = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

const currentDay = days[new Date().getDay()];

if (currentDay === "Sunday") {
	document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent =
		currentDay;
} else {
	document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent =
		'Today is not Sunday. It"s' + currentDay;
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
