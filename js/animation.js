// Animation
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			if(animItemHeight > window.innerHeight){
				animItemPoint = window.innerHeight - animItemHeight - animStart;
			}

			if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
				animItem.classList.add('_active');
			}else {
				animItem.classList.remove('_active');
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
	}
	animOnScroll();
}







// Tabs
const tabsBtn = document.querySelectorAll(".in-btn");
const tabsItems = document.querySelectorAll(".commission-in-bgr");



tabsBtn.forEach(function(item) {
	item.addEventListener("click", function(){
		let currentBtn = item;
		let tabId = currentBtn.getAttribute("data-tab");
		let currentTab = document.querySelector(tabId);


		

		tabsBtn.forEach(function(item) {
			item.classList.remove('active');
		});

		tabsItems.forEach(function(item) {
			item.classList.remove('active');
		});

		currentBtn.classList.add('active');
		currentTab.classList.add('active');
	});
});

document.querySelector('.in-btn').click();
