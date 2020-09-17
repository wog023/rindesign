$(document).ready(function(){


	function isMobile() {
 	 	try{ document.createEvent("TouchEvent"); return true; }
		catch(e){ return false;}
	}
	if(isMobile()){
		sideMobile()
		go()
		homeClickMobile()
	}else{	
		homeClickPC()
		sidePC()
	}

home()
// works()
// about()
// contact()
		setTimeout(function(){
			$('.loading').fadeOut(700)
		},3500)


	
})