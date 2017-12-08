$(document).ready(function() {

	var $logo = $(".invis"); // the logo selector
	var $cf = $(".ghost-selector"); // the codefights selector;
	var weblinks = {
		"linkedin" : "https://www.linkedin.com/in/zachary-kirby-66b7b9125/",
		"github" : "https://github.com/zkirby",
		"behance" : "https://www.behance.net/zkirby49fe",
		"facebook" : "https://www.facebook.com/zachary.kirby.58",
		"codefights" : "https://codefights.com/profile/zkirby"
	}

	$logo.click(function() {
		window.open("../../index.html", "_self");
	});

	$logo.hover(function() {
		$(".logo").css("opacity", "1");
		//$(".logo").css("transform", "rotate(360deg)");

	}, function() {
		$(".logo").css("opacity", "0.6");
		//$(".logo").css("transform", "rotate(0deg)");
	});

	$cf.hover(function() {
		$(".cfsvg").css("background", "#FFFBFC");
		$("polygon").css("fill", "#393E46"); 
	}, function(){
		$(".cfsvg").css("background", "transparent");
		$("polygon").css("fill", "#FFFBFC"); 
	});

	$("div > #contact-item, #custom-item").click(function() {
		var name = this.className;
		if (!(name === "email")) {
			window.open(weblinks[name], "_blank");
		} else {
			$(".modal-container").show();
		}
	});

});