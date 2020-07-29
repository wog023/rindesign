
$(document).ready(function(){

	function workBox1(){
			$('.workBox1 a').attr('href','#workBox1')
			$('.workBox1 .title h4').text('Sell Phone')
			$('.workBox1 .title p').text('website')
			$('.workBox1 .workImg').css('background-image','url(works/ui/sellphone.png)')
		}
	function workBox2(){
			$('.workBox2 a').attr('href','#')
			$('.workBox2 .title h4').text('Checkout')
			$('.workBox2 .title p').text('checkout page')
			$('.workBox2 .workImg').css('background-image','url(works/ui/checkout.png)')
		}
	function workBox3(){
			$('.workBox3 a').attr('href','#')
			$('.workBox3 .title h4').text('Sign Up')
			$('.workBox3 .title p').text('sign-up page')
			$('.workBox3 .workImg').css('background-image','url(works/ui/sign-up.png)')
		}
	function workBox4(){
			$('.workBox4 a').attr('href','#')
			$('.workBox4 .title h4').text('Calculator')
			$('.workBox4 .title p').text('app')
			$('.workBox4 .workImg').css('background-image','url(works/ui/calculator.png)')
			$('.workBox4 .workImg').css('background-size','73%')
		}
////////////////////////////////////////////////////////////////////////////////////////
	function ui1(){
		$('.workBox1').click(function(){
			if(type==='ui'){
				$('.container').css({'overflow':'hidden'})
				$('.cover').css('display','block')
				$('.cover img').attr('src','works/ui/ui1.jpg')
			}
		})
	}
	
	function coverOff(){
	
			$('.cover').click(function(){
			$('.cover').css('display','none')
			$('.container').css({'overflow':'unset'})
		})
		}



		







$('.ui').click(function(){
	type = 'ui'

	$('.workImg').css({'background-size':'100%','background-color':'transparent'})
	workBox1()
	workBox2()
	workBox3()
	workBox4()

	
	ui1()
	
	console.log(type)
	coverOff()
})







})