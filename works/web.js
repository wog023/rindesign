var type


$(document).ready(function(){

	function workBox1(){
			$('.workBox1 a').attr('href','https://wog023.github.io/Redesign-louisacoffee/')
			$('.workBox1 .title h4').text('4CloveR')
			$('.workBox1 .title p').text('website')
			$('.workBox1 .workImg').css('background-image','url(works/redesign/louisa.png)')
		}
	function workBox2(){
			$('.workBox2 a').attr('href','https://wog023.github.io/Redesign-louisacoffee/')
			$('.workBox2 .title h4').text('4CloveR')
			$('.workBox2 .title p').text('website')
			$('.workBox2 .workImg').css('background-image','url(works/redesign/louisa.png)')
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







$('.web').click(function(){
	type = 'web'

	$('.workImg').css({'background-size':'100%','background-color':'transparent'})
	$('.cover').css('display','none')
	$('.container').css({'overflow':'unset'})
	
	workBox1()
	workBox2()
	workBox3()
	workBox4()
})







})