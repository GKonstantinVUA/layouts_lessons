//?Варіант #1 (Progress Bar)

let barProducts = document.querySelector(".clients-bar__circular"),
	productsCount = document.querySelector(".clients-bar__value"),
	barClients = document.querySelector(".project-bar__circular"),
	clientsCount = document.querySelector(".project-bar__value");

let productsStartValue = 0,
	productsEndValue = 95,
	clientsStartValue = 0,
	clientsEndValue = 85,
	speed = 10;

const startProgress = () => {
	let productsInterval = setInterval(() => {
		productsStartValue++;

		productsCount.innerHTML = `${productsStartValue}%`;
		barProducts.style.background = `conic-gradient(#40DDB6 ${productsStartValue * 3.7}deg, #37393F 0deg)`;

		if (productsStartValue == productsEndValue) {
			clearInterval(productsInterval);
		}
	}, speed);

	let clientsInterval = setInterval(() => {
		clientsStartValue++;

		clientsCount.innerHTML = `${clientsStartValue}%`;
		barClients.style.background = `conic-gradient(#40DDB6 ${clientsStartValue * 3.95}deg, #37393F 0deg)`;

		if (clientsStartValue == clientsEndValue) {
			clearInterval(clientsInterval);
		}
	}, speed);
};

//TODO Варіант #1 (Progress Bar) - скролл сторінки

const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				observer.disconnect();
				startProgress();
			}
		});
	},
	{
		root: null, // viewport, для відстеження в межах другого элементу (вказати в цьому місці)
		rootMargin: "0px", // маржа навколо root
		threshold: 0.9, // ороговое значення відображення (100% для элемента)
	}
);

observer.observe(document.querySelector(".progress-bar__block-bar"));

//?Варіант #2 (Progress Bar)

let numberProducts = document.getElementById("bar-products__value");
let numberClients = document.getElementById("bar-clients__value");
let counterProducts = 0;
let counterClients = 0;

setInterval(() => {
	if (counterProducts == 95) {
		clearInterval();
	} else {
		counterProducts += 1;
		numberProducts.innerHTML = counterProducts + "%";
	}
}, 10);

setInterval(() => {
	if (counterClients == 85) {
		clearInterval();
	} else {
		counterClients += 1;
		numberClients.innerHTML = counterClients + "%";
	}
}, 10);

// TODO Варіант #2 (Progress Bar)

//Налаштування
let options = {
	root: null,
	rootMargin: "0px",
	threshold: 0.5,
}


//Функція зворотнього визову
let callback = function (entries, observer) {
	entries.forEach(entry => {
		//якщо елемент спостерігач
		if (entry.isIntersecting) {
			console.log('find', entry);
			//додати класс active до нього
			entry.target.classList.add('circular-bar__active');
		}
	});
}
// Спостерігач
let observerTwo = new IntersectionObserver(callback, options);

// Визначення елементу для спостерігання
let targets = document.querySelectorAll('.circular-bar__anim')
targets.forEach(target => {
	observerTwo.observe(target);
});

//TODO Варіант #2 (Progress Bar) - скролл сторінки
const curcle = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				curcle.disconnect();
				setInterval();
			}
		});
	},
	{
		root: null, // viewport, для відстеження в межах другого элементу (вказати в цьому місці)
		rootMargin: "0px", // margin навколо root
		threshold: 1, // пороговое значення відображення (100% для элемента)
	}
);

curcle.observe(document.querySelector(".circular-bar__block"));


