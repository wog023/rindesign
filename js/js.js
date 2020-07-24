$(document).ready(function(){

	var count = 1 //只觸發1次
	var web1 = $('.web').html()

	function B(){

	

	let webWrap = $('.web .wrap').wrapAll('<div class="wrapBox webWrap"></div>')
	let redesignWrap = $('.redesign .wrap').wrapAll('<div class="wrapBox redesignWrap"></div>')
	let uiWrap = $('.ui .wrap').wrapAll('<div class="wrapBox uiWrap"></div>')
	let pixelWrap = $('.pixel .wrap').wrapAll('<div class="wrapBox pixelWrap"></div>')

		if(count>0){
			$('.web').append(webWrap)
			$('.redesign').append(redesignWrap)
			$('.ui').append(uiWrap)
			$('.pixel').append(pixelWrap)
			count = count - 1
		}
	}

	function A(){


		var w = $(window).width();  //RWD
		if(w>992){			
			B()
		}else{
			

			count = 1
		}
	}

	$(window).resize(function(){
		A()
		console.log(count)	
	})


})