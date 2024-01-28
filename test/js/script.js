let barProducts = document.querySelector(".clients-bar__circular"),
	productsCount = document.querySelector(".clients-bar__value"),
	barClients = document.querySelector(".products-bar__circular"),
	clientsCount = document.querySelector(".products-bar__value");

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
		root: null, // используется viewport, для отслеживания в пределах другого элемента укажите его здесь
		rootMargin: "0px", // маржа вокруг root
		threshold: 0.9, // пороговое значение видимости (90% элемента)
	}
);

observer.observe(document.querySelector(".progress-bar__block-bar"));
