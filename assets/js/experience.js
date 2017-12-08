$(document).ready(function() {

	var $logo = $(".invis"); // the logo selector
	var $weblinks = {
		"Kamusi" : "https://www.kamusigold.org/",
		"Intuit" : "https://www.mint.com/",
		"CS98/198" : "http://wdd.io/",
		"ANova" : "https://www.berkeleyanova.org/",
		"RCSA" : "https://rohp.berkeley.edu/",
		"ADTP" : "https://atdp.berkeley.edu/",
		"March" : "https://www.marchfield.org/",
		"Vista" : "http://www.murrieta.k12.ca.us/domain/1674"
	} //web-links to the experience websites

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

	$("div > #card").click(function() {
		$t = $(this);
		if ($t.hasClass("flip")) {
			$t.removeClass("flip");
		} else {
			$t.addClass("flip");
		}
	});

	$("div > .web-link").click(function() {
		window.open($weblinks[$(this).attr("name")], "_blank").focus();
		$t = $(this).closest("#card");
		$t.click();
	});

});