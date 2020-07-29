$('.inner').click(function(){

	console.log('13543513')
})



$(document).ready(function(){

	function workBox1(){
			$('.workBox1 a').attr('href','works/redesign/louisa.html')
			$('.workBox1 .title h4').text('Louisa Coffee')
			$('.workBox1 .title p').text('website')
			$('.workBox1 .workImg').css('background-image','url(works/redesign/louisa.png)')
		}
	function workBox2(){
			$('.workBox2 a').attr('href','#')
			$('.workBox2 .title h4').text('碳佐麻里')
			$('.workBox2 .title p').text('mobile website')
			$('.workBox2 .workImg').css('background-image','url(works/redesign/tan.png)')
			$('.workBox2 .workImg').css('background-size','71%')
		}
	function workBox3(){
			$('.workBox3 a').attr('href','https://wog023.github.io/Redesign-louisacoffee/')
			$('.workBox3 .title h4').text('******')
			$('.workBox3 .title p').text('website')
			$('.workBox3 .workImg').css('background-image','url(works/redesign/louisa.png)')
		}
	function workBox4(){
			$('.workBox4 a').attr('href','https://wog023.github.io/Redesign-louisacoffee/')
			$('.workBox4 .title h4').text('Louisa Coffee')
			$('.workBox4 .title p').text('website')
			$('.workBox4 .workImg').css('background-image','url(works/redesign/louisa.png)')
		}
//////////////////////////////////////////////////////////////////////////////////////////////
	





$('.redesign').click(function(){
	$('.workImg').css({'background-size':'100%','background-color':'transparent'})
	$('.cover').css('display','none')
	$('.container').css({'overflow':'unset'})

	workBox1()
	workBox2()
	workBox3()
	workBox4()
})








})