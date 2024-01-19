// в css предусмотреть для поля с числами класс .num и параметр data-val"0"

let valueDisplays = document.querySelectorAll(".unit__index");
let interval = 1200;

valueDisplays.forEach((valueDisplay) => {
	let startValue = 0;
	let endValue = parseInt(valueDisplay.getAttribute("data-val"));
	console.log(endValue);
	let duration = Math.floor(interval / endValue);

	let counter = setInterval(function () {
		startValue += 1;
		valueDisplay.textContent = startValue;
		if (startValue == endValue) {
			clearInterval(counter);
		}
	}, duration);
});
