/*
 * https://cocreate.app
 * https://github.com/CoCreate-app/Conditional_Logic
 * Released under the MIT license
 * https://github.com/CoCreate-app/Conditional_Logic/blob/master/LICENSE
 */
import observer from '@cocreate/observer'
import { logger } from '@cocreate/utils';

let console = logger('off');
init();

document.addEventListener('fetchedTemplate', () => {
	init();
})

//. cocreate init section
function init() {
	let elements = document.querySelectorAll(`[data-show],[data-hide]`);
	initElements(elements)
}

function initElements(elements) {
	for (let el of elements)
		initElement(el)
}

function initElement(el) {
	if (el.tagName.toLowerCase() == "option")
		el = el.closest('select');

	el.removeEventListener('change', selectShowHideEle);
	el.removeEventListener("click", clickShowHideEle);

	el.addEventListener("change", selectShowHideEle);
	el.addEventListener("click", clickShowHideEle);
}
// CoCreateInit.register('CoCreateConditionalLogic', window, window.init);

observer.init({
	name: 'CoCreateConditionalLogic',
	observe: ['addedNodes'],
	target: '[data-show], [data-hide]',
	callback: function(mutation) {
		initElement(mutation.target)
	}
})

//. upgrade by jin (using document event)
// function init() {

// 	const selector = "[data-show],[data-hide]";
// 	document.removeEventListener("change", function(event) {
// 		const target = event.target.closest(selector);
// 		if (target) {
// 			selectShowHideEle(event)
// 		}
// 	});

// 	document.removeEventListener("click", function(event) {
// 		const target = event.target.closest(selector);
// 		if (target) {
// 			clickShowHideEle(event)
// 		}
// 	});

// 	document.addEventListener("change", function(event) {
// 		const target = event.target.closest(selector);
// 		if (target) {
// 			selectShowHideEle(event)
// 		}
// 	});

// 		document.addEventListener("click", function(event) {
// 		const target = event.target.closest(selector);
// 		if (target) {
// 			clickShowHideEle(event)
// 		}
// 	});
// }

function selectShowHideEle(e) {
	console.log(this, 'select');
	e.preventDefault()
	var select = this;
	if (typeof select.options != 'undefined')
		for (var i = 0, len = select.options.length; i < len; i++) {
			var opt = select.options[i];
			var value = opt.value
			if (value != '') {
				var show = opt.dataset.show
				// var show_class = opt.dataset.showClass
				if (typeof show != 'undefined') {
					for (let el of document.querySelectorAll(show))
						el.classList.add('hidden');
					if (opt.selected === true) {
						for (let el of document.querySelectorAll(show))
							el.classList.remove('hidden');
					}
				}
			} //end value is not empty
		} //end for
}

function clickShowHideEle(e) {
	console.log(this, 'click');
	var show = this.dataset.show;
	var hide = this.dataset.hide;
	let tagName = this.tagName.toLowerCase();

	if (tagName == 'input' && this.getAttribute("type").toLowerCase() == 'radio') {
		let name = this.getAttribute("name")
		let radios = document.querySelectorAll(tagName + '[name="' + name + '"]');
		for (let radio of radios) {

			show = radio.dataset.show;

			for (let el of document.querySelectorAll(show)) {
				el.classList.add('hidden');
			}

			if (radio.checked) {
				for (let el of document.querySelectorAll(show))
					el.classList.remove('hidden');
			}
		}

	}
	else {

		let updated_els = [];

		for (let el of document.querySelectorAll(show)) {
			if (el.classList.contains('hidden')) {
				el.classList.remove('hidden');
				updated_els.push(el);
			}
		}

		for (let el of document.querySelectorAll(hide)) {
			let existEqual = false;
			for (let uel of updated_els) {
				if (el.isEqualNode(uel)) {
					existEqual = true;
					break;
				}
			}

			if (!existEqual) el.classList.add('hidden');
		}
	}
}

const CoCreateConditionalLogic = { initElements, selectShowHideEle, clickShowHideEle };
export default CoCreateConditionalLogic;
