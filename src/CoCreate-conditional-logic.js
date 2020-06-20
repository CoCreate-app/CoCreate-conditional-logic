	/*!
 * https://cocreate.app
 * https://github.com/CoCreate-app/Conditional_Logic
 * Released under the MIT license
 * https://github.com/CoCreate-app/Conditional_Logic/blob/master/LICENSE
 */

initShowHideEles();

document.addEventListener('fetchedTemplate', () => {
	initShowHideEles();
})

function initShowHideEles() {
	// var showHideEles = document.getElementsByClassName("show_hide");
	var showHideEles = document.querySelectorAll('[data-show_id],[data-hide_id]');
	
	for (let el of showHideEles) {
		
		if(el.tagName.toLowerCase() == "option")
			el = el.closest('select');
		
		el.removeEventListener('change', selectShowHideEle);
		el.removeEventListener("click", clickShowHideEle);
		
		el.addEventListener("change", selectShowHideEle);
		el.addEventListener("click", clickShowHideEle);	
	}	
}

function selectShowHideEle(e) {
	console.log(this, 'select');
	e.preventDefault()
	var select = this;
	if (typeof select.options != 'undefined')
  	for ( var i = 0, len = select.options.length; i < len; i++ ) {
  		var opt = select.options[i];
      var value = opt.value
      if (value != ''){
        var show_id = opt.dataset.show_id
       // var show_class = opt.dataset.showClass
        if(typeof show_id!='undefined'){
        	for (let el of document.querySelectorAll(show_id)) 
        		el.classList.add('hidden');
        	if ( opt.selected === true ) {
	        	for (let el of document.querySelectorAll(show_id))
        			el.classList.remove('hidden');
	        }
        }
      }//end value is not empty
  }//end for
}

function clickShowHideEle(e) {
	console.log(this, 'click');
	var show_id = this.dataset.show_id;
	var hide_id = this.dataset.hide_id;
	let tagName = this.tagName.toLowerCase();
	
	if(tagName =='input' && this.getAttribute("type").toLowerCase()=='radio') {
		let name = this.getAttribute("name")
		let radios = document.querySelectorAll(tagName+'[name="'+name+'"]');
		for (let radio of radios) {
			
			show_id = radio.dataset.show_id;
			
			for (let el of document.querySelectorAll(show_id)) {
				el.classList.add('hidden');
			}
				
			if(radio.checked){
				for (let el of document.querySelectorAll(show_id)) 
					el.classList.remove('hidden');
			}
		}
		
	} else {
		
		let updated_els = [];
		
		for (let el of document.querySelectorAll(show_id)) {
			if(el.classList.contains('hidden')){
				el.classList.remove('hidden');
				updated_els.push(el);
			}
		}
		
		for (let el of document.querySelectorAll(hide_id)) {
			let existEqual = false;
			for(let uel of updated_els){
				if(el.isEqualNode(uel)){
					existEqual = true;
					break;
				}	
			}
			
			if(!existEqual) el.classList.add('hidden');
		}
	}
}

