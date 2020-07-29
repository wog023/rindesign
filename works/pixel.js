
$(document).ready(function(){

	function workBox1(){
			$('.workBox1 a').attr('href','#')
			$('.workBox1 .title h4').text('呆呆獸')
			$('.workBox1 .title p').text('pixel art (50*50px)')
			$('.workBox1 .workImg').css('background-image','url(works/pixel/呆呆獸.png)')
			$('.workBox1 .workImg').css('background-size','64%')
			$('.workBox1 .workImg').css('background-color','#d4d4d4')
			$('.workBox1 .workImg').css('border-radius','5px')
		}
	function workBox2(){
			$('.workBox2 a').attr('href','#')
			$('.workBox2 .title h4').text('鬼斯')
			$('.workBox2 .title p').text('pixel art (50*50px)')
			$('.workBox2 .workImg').css('background-image','url(works/pixel/鬼斯.png)')
			$('.workBox2 .workImg').css('background-size','64%')
			$('.workBox2 .workImg').css('background-color','#fff')
			$('.workBox2 .workImg').css('border-radius','5px')			
		}
	function workBox3(){
			$('.workBox3 a').attr('href','https://wog023.github.io/Redesign-louisacoffee/')
			$('.workBox3 .title h4').text('Louisa Coffee')
			$('.workBox3 .title p').text('website')
			$('.workBox3 .workImg').css('background-image','url(works/redesign/louisa.png)')
		}
	function workBox4(){
			$('.workBox4 a').attr('href','https://wog023.github.io/Redesign-louisacoffee/')
			$('.workBox4 .title h4').text('Louisa Coffee')
			$('.workBox4 .title p').text('website')
			$('.workBox4 .workImg').css('background-image','url(works/redesign/louisa.png)')
		}







$('.pixel').click(function(){
	type = 'pixel'

	$('.workImg').css('background-size','100%')
	$('.cover').css('display','none')
	$('.container').css({'overflow':'unset'})

	workBox1()
	workBox2()
	workBox3()
	workBox4()
	console.log(type)
})







})