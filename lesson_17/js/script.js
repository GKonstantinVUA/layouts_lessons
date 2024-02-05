// TODO Progress Bar
function svgCircleSetProgress(svg, value) {
	let circle = svg.querySelector('circle'); 
	
	let length = circle.getTotalLength();
  
	circle.style.strokeDasharray = length;
	circle.style.strokeDashoffset = Math.max(0, length * ((100 - value) / 100)); 
  
	circle.style.fill  =  '#37393F';
	circle.style.stroke  =  '#40ddb6';
	circle.style.strokeWidth  =  '5px';
  }
   
  function progressIndex(div, pos) {
	svgCircleSetProgress(div.querySelector('svg'), pos);
   
	div.querySelector('span').innerHTML = `${pos}%`;
  }
  
  let speedBar = 10;
  const scrollCallBackBar = function() {
	const progressBarElementsIndex = document.querySelectorAll('[data-index]');
   
	progressBarElementsIndex.forEach(element => {
		const rectIndex = element.getBoundingClientRect();
		const windowHeightIndex = window.innerHeight || document.documentElement.clientHeight;
	  
		if(((rectIndex.top+ rectIndex.height) >= 0 && (rectIndex.bottom - rectIndex.height) <= windowHeightIndex)) {
		  if(!element.intervalProgressIndex) {
			  const maxValueIndex = parseInt(element.getAttribute('data-index'));
			  element.pos = 0;
			  element.intervalProgressIndex = setInterval(() => {
				  if(element.pos <= maxValueIndex) {
					  progressIndex(element, element.pos++);
				  } else {
					  clearInterval(element.intervalProgressIndex);
				  }
			  }, speedBar);
		  }
		} else {
			  progressIndex(element, 0);
		  if(element.intervalProgressIndex) {
			  clearInterval(element.intervalProgressIndex);
		  }
		  element.intervalProgressIndex  = false;
		}
	});
  };
   
  window.addEventListener('scroll', scrollCallBackBar);
  scrollCallBackBar();

  // TODO Number
  function counterNumbers() {
	const SELECTORS = {
			wrapper: ".row-block__statistics",
			numbers: ".code-js",
			number: ".code-js__number",
	};

	const $wrappers = document.querySelectorAll(SELECTORS.wrapper);

	if (!$wrappers.length) return;

	const TIME_COUNT = 950;  // Время счета

	function counter ($wrapper, timeCount) {
			const $numbers = $wrapper.querySelectorAll(SELECTORS.numbers);
			if (!$numbers.length) return;

			const $numbersText = $wrapper.querySelectorAll(SELECTORS.number);
			 
			const endValues = [];
				
			$numbers.forEach(($numberWrapper) => {
					const endValue = parseInt($numberWrapper.dataset.number);
					endValues.push (endValue);
			})

			const timeStart = performance.now();
				
			function showNumbers (currentTime) {
					let part = (currentTime - timeStart) / timeCount;
					if (part > 1) part = 1;
					for (let i = 0; i < $numbersText.length; i++) {
							let lang ='';
							const ptl = $numbersText[i].closest('[lang]');
							if (ptl) {
									lang = ptl.getAttribute('lang')
							}
							const form = new Intl.NumberFormat(lang);
							const value = Math.round( part * endValues[i]);
							$numbersText[i].textContent = form.format(value);
					}
					if (part < 1) requestAnimationFrame(showNumbers);
			}
			 
			requestAnimationFrame(showNumbers);
	}

	$wrappers.forEach(($wrapper) => {
			counter ($wrapper, TIME_COUNT);
	});
}
window.addEventListener("load", () => {
	counterNumbers();
});

//TODO СКРОЛЛ
const check = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				counterNumbers();
			}
		});
	},
	{
		root: null,
		rootMargin: "0px", 
		threshold: 1,
	}
);

check.observe(document.querySelector(".row-block__statistics"));


