/*
 * https://cocreate.app
 * https://github.com/CoCreate-app/CoCreate-conditional-logic
 * Released under the MIT license
 * https://github.com/CoCreate-app/CoCreate-conditional-logic/blob/master/LICENSE
 */
/*globals CustomEvent, CoCreate*/
import observer from "@cocreate/observer";
import action from "@cocreate/actions";
import { queryElements } from "@cocreate/utils";

// TODO: update to listen to document events, find closest action return
function init() {
	let elements = document.querySelectorAll(`[show],[hide]`);
	initElements(elements);
}

function initElements(elements) {
	for (let el of elements) initElement(el);
}

function initElement(el) {
	if (el.tagName.toLowerCase() == "option") el = el.closest("select");
	let actions = el.getAttribute("actions");
	if (actions && actions.includes("validate")) {
		el.removeEventListener("change", selectShowHideEle);

		el.addEventListener("change", selectShowHideEle);
	} else {
		el.removeEventListener("change", selectShowHideEle);
		el.removeEventListener("click", clickShowHideEle);

		el.addEventListener("change", selectShowHideEle);
		el.addEventListener("click", clickShowHideEle);
	}
}

function selectShowHideEle(e) {
	e.preventDefault();
	var select = this;
	if (typeof select.options != "undefined")
		for (var i = 0, len = select.options.length; i < len; i++) {
			var opt = select.options[i];
			var value = opt.value;
			if (value != "") {
				var show = opt.getAttribute("show");
				if (typeof show != "undefined") {
					for (let el of queryElements({
						element: document,
						selector: show,
						type: "selector"
					}))
						el.setAttribute("hidden", "");
					if (opt.selected === true) {
						for (let el of queryElements({
							element: document,
							selector: show,
							type: "selector"
						}))
							el.removeAttribute("hidden");
					}
				}
			}
		}
}

function clickShowHideEle(e) {
	let element = e.currentTarget;
	if (!element) element = e.element;
	var show = element.getAttribute("show");
	var hide = element.getAttribute("hide");
	let tagName = element.tagName.toLowerCase();

	if (
		tagName == "input" &&
		element.getAttribute("type").toLowerCase() == "radio"
	) {
		let key = element.getAttribute("key");
		let radios = document.querySelectorAll(tagName + '[key="' + key + '"]');
		for (let radio of radios) {
			show = radio.getAttribute("show");

			for (let el of queryElements({
				element: document,
				selector: show,
				type: "selector"
			}))
				el.setAttribute("hidden", "");

			if (radio.checked) {
				for (let el of queryElements({
					element: document,
					selector: show,
					type: "selector"
				}))
					el.removeAttribute("hidden");
			}
		}
	} else {
		let updated_els = [];

		if (show)
			for (let el of queryElements({
				element: document,
				selector: show,
				type: "selector"
			})) {
				if (el.hasAttribute("hidden")) {
					el.removeAttribute("hidden");
					updated_els.push(el);
				}
			}

		if (hide)
			for (let el of queryElements({
				element: document,
				selector: hide,
				type: "selector"
			})) {
				let existEqual = false;
				for (let uel of updated_els) {
					if (el.isEqualNode(uel)) {
						existEqual = true;
						break;
					}
				}

				if (!existEqual) el.setAttribute("hidden", "");
			}
	}

	element.dispatchEvent(
		new CustomEvent("showHide", {
			detail: {}
		})
	);
}

document.addEventListener("fetchedData", () => {
	init();
});

observer.init({
	name: "CoCreateConditionalLogic",
	types: ["addedNodes"],
	selector: "[show], [hide]",
	callback: function (mutation) {
		initElement(mutation.target);
	}
});

action.init({
	name: "showHide",
	endEvent: "showHide",
	callback: (action) => {
		clickShowHideEle(action);
	}
});

init();

const CoCreateConditionalLogic = {
	initElements,
	selectShowHideEle,
	clickShowHideEle
};
export default CoCreateConditionalLogic;
