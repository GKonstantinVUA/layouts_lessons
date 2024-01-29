//?Вариант #1 (Progress Bar)

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

//TODO Вариант #1 (Progress Bar) - скролл страницы

const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
					startProgress();
			}
		});
	},
	{
		root: null,
		rootMargin: "0px",
		threshold: 0.9,
	}
);

observer.observe(document.querySelector(".progress-bar__block-bar"));

//?Вариант #2 (Progress Bar)

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


//TODO Вариант #2 (Progress Bar) - скролл страницы

const progress = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
					startProgress();
			}
		});
	},
	{
		root: null,
		rootMargin: "0px",
		threshold: 0.9,
	}
);

progress.observe(document.querySelector(".circular-bar__block"));


//TODO Вариант #2 (Progress Bar) - скролл страницы при анимации Bar-ов

//Настройки
let options = {
	root: null,
	rootMargin: "0px",
	threshold: 0.5,
}

let callback = function (entries, observer) {
	entries.forEach(entry => {
		
		if (entry.isIntersecting) {
			console.log('find', entry);
			
			entry.target.classList.add('circular-bar__active');
		}
	});
}

let observerTwo = new IntersectionObserver(callback, options);

let targets = document.querySelectorAll('.circular-bar__anim')
targets.forEach(target => {
	observerTwo.observe(target);
});



