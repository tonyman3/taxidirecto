$(document).on('ready', iniciando)
function iniciando () {
	//$("#ex12b").slider({ id: "slider12b", min: 0, max: 10, range: true, value: [3, 7] })
	/*$("#ex13").slider({
		ticks: [0, 100, 200, 300, 400],
		ticks_labels: ['$0', '$100', '$200', '$300', '$400'],
		ticks_snap_bounds: 30
	});*/
	//$('.menu').stickyMojo({footerID: '#clientes', contentID: '#cabesha'})

	$("#consumo").slider({
		id: "consumo", 
		range: true,		
		ticks: [0, 1000, 5000, 10000, 15000, 16000],
		ticks_labels: ['S/.1000 o menos', 'S/.1000', 'S/.5000', 'S/.10000', 'S/.15000', '+15000'],
		ticks_snap_bounds: 30,
		value: [5000, 10000] 
	})

	/*$("#ex12c").slider({ id: "slider12c", min: 0, max: 10, range: true, value: [3, 7] });]*/

	//$(".btn").on('click', sape)
	$(".continuar-ancla").on('click', continuar)
	$(".abir-menu").on('click', openMenu)
	$(".cerrar").on('click', cerrar)
	$(".contacto-headerM").on('click', openCoti)
	$("#menu-encima").hide()
	$(".form-fijo3").hide()
	
	$('a.smooth').smoothScroll({
		offset: -40,		  
		scrollTarget: $(this).val()
	})

	$('.post_article').waypoint(  
		function(direction) {
			if (direction ==='down') {            
				var wayID = $(this).attr('id')           
			} else {
				var previous = $(this).prev()
				var wayID = $(previous).attr('id')                  
			}

			var ape = $('a[href=#'+wayID+']').attr('href')

			if (ape == '#cabesha') {
				$(".contacto-header button").css('background', 'none')
				$(".menu").css({
					border: '1px solid',
					bordercolor:'#ffffff',
					color: '#ffffff'
				})
				$(".form-header, .contacto-header label, .contacto-header button, .contacto-header p").css('color', '#ffffff')
				$(".logo-fijo").hide()
			} else{
				$(".form-header, .contacto-header label, .contacto-header button, .contacto-header p").css('color', '#000000')
				$(".menu").css({
					border: '1px solid',
					bordercolor:'#333334',
					color: '#000000'
				})
				$(".contacto-header button").css('background', '#F6F6F6')
				$(".contacto-header").css('color', '#FBF3F6')
				$(".logo-fijo").show()
			}
			
			console.log(ape)
			$('.current').removeClass('current')
			//$('a[href=#'+wayID+']').css("color", "#6c6f70")
			$('a[href=#'+wayID+']').addClass('current')
			//$('a[href=#'+wayID+']').css("color", "#262626")
			
			
		}, { offset: '60%' })
}
/*function sape (e) {
	e.preventDefault()
	e.stopPropagation()
	var valor = $("#consumo").val()
	console.log(valor)
}*/
function continuar (e) {
	e.preventDefault()
	e.stopPropagation()
	var link =$(this).attr('href')
	$("html, body").stop().animate({
		scrollTop:$(link).offset().top}, 1000)
}
function openMenu (e) {
	e.preventDefault()
	e.stopPropagation()
	//$("#menu-encima").show()
	$(".form-fijo3").hide()
	$("#menu-encima").slideToggle('fast')
}
function cerrar (e) {
	e.preventDefault()
	e.stopPropagation()
	$("#menu-encima").hide()
}
function openCoti (e) {
	e.preventDefault()
	e.stopPropagation()
	$("#menu-encima").hide()
	$(".form-fijo3").slideToggle('fast')
}