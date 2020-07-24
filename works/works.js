$(document).ready(function(){

	var type = 1
	$('.web').click(
		function(){
			type = 1
			console.log(type)
			$('.chooseLine').removeClass('visible')
			$('.web .chooseLine').addClass('visible')
		})
	$('.redesign').click(
		function(){
			type = 2
			console.log(type)
			$('.chooseLine').removeClass('visible')
			$('.redesign .chooseLine').addClass('visible')
		})
	$('.ui').click(
		function(){
			type = 3
			console.log(type)
			$('.chooseLine').removeClass('visible')
			$('.ui .chooseLine').addClass('visible')
		})
	$('.pixel').click(
		function(){
			type = 4
			console.log(type)
			$('.chooseLine').removeClass('visible')
			$('.pixel .chooseLine').addClass('visible')
		})

		
	














})