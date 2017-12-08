$(document).ready(function(){
	"use strict"; 

	$(".nav-item[class~=active]").click(function(event) {
		var name = this.className.slice(9, this.className.indexOf("active")-1);
		console.log(name)
		if (!(name == "resume")) {
			window.open("assets/templates/" + name + ".html", '_self');
		} else {
			window.open("assets/resources/resume/resume.pdf", '_blank')
		}
	});

	var flip = false;

	$(".invis").click(function(event) {
		if (flip) {
			$(".nav-spine").css("color", "#00ADB5");
			$(".border").css("background", "#00FFF5");
			$(".text-3").css("fill", "#00FFF5");
			$(".text-2").css("fill", "#00BFBA");
			$(".text-1").css("fill", "#00807C");
		} else {
			$(".nav-spine").css("color", "#E557BA");
			$(".border").css("background", "#E52478");
			$(".text-3").css("fill", "#E52478");
			$(".text-2").css("fill", "#BC1E63");
			$(".text-1").css("fill", "#9A1952");
		}
		flip = !flip;
	});


	//$("#nav-item").css("opacity", "1");

	// $(".invis").hover(
	// 	function() {
	// 	$(".logo").css("transform", "scale(1.1, 1.1)");
	// 	$(".logo").css("opacity", "1");
	// },
	// function() {
	// 	$(".logo").css("transform", "scale(1, 1)");
	// 	$(".logo").css("opacity", "0.7");
	// }); 

	// var switchBool = false;
	// $(".invis").click(function() {
	// 	if (!switchBool) {
	// 		$(".trans-circle").css("top", "100%");
	// 		setTimeout(() => {$(".face").show();}, 320);
	// 	} else {
	// 		$(".trans-circle").css("top", "-100%");
	// 		setTimeout(() => {$(".face").hide();}, 320);
	// 	}
	// 	switchBool = !switchBool;
	// });

});



