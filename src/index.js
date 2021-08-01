/*
 * https://cocreate.app
 * https://github.com/CoCreate-app/CoCreate-conditional-logic
 * Released under the MIT license
 * https://github.com/CoCreate-app/CoCreate-conditional-logic/blob/master/LICENSE
 */
 
import observer from '@cocreate/observer'

function init() {
	let elements = document.querySelectorAll(`[show],[hide]`);
	initElements(elements);
}

function initElements(elements) {
	for (let el of elements)
		initElement(el);
}

function initElement(el) {
	if (el.tagName.toLowerCase() == "option")
		el = el.closest('select');

	el.removeEventListener('change', selectShowHideEle);
	el.removeEventListener("click", clickShowHideEle);

	el.addEventListener("change", selectShowHideEle);
	el.addEventListener("click", clickShowHideEle);
}

function selectShowHideEle(e) {
	e.preventDefault();
	var select = this;
	if (typeof select.options != 'undefined')
	for (var i = 0, len = select.options.length; i < len; i++) {
		var opt = select.options[i];
		var value = opt.value;
		if (value != '') {
			var show = opt.getAttribute('show');
			if (typeof show != 'undefined') {
				for (let el of document.querySelectorAll(show))
					el.classList.add('hidden');
				if (opt.selected === true) {
					for (let el of document.querySelectorAll(show))
						el.classList.remove('hidden');
				}
			}
		}
	}
}

function clickShowHideEle(e) {
	var show = this.getAttribute('show');
	var hide = this.getAttribute('hide');
	let tagName = this.tagName.toLowerCase();

	if (tagName == 'input' && this.getAttribute("type").toLowerCase() == 'radio') {
		let name = this.getAttribute("name");
		let radios = document.querySelectorAll(tagName + '[name="' + name + '"]');
		for (let radio of radios) {

			show = radio.getAttribute('show');

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

document.addEventListener('fetchedTemplate', () => {
	init();
});

init();

observer.init({
	name: 'CoCreateConditionalLogic',
	observe: ['addedNodes'],
	target: '[show], [hide]',
	callback: function(mutation) {
		initElement(mutation.target);
	}
});

const CoCreateConditionalLogic = { initElements, selectShowHideEle, clickShowHideEle };
export default CoCreateConditionalLogic;
