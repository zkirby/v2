$(document).ready(function() {

	var $logo = $(".invis"); // the logo selector
	var prev = focus($("#button")); // focus on the first button 'all'
	var $grid = $('.work-container').isotope({
  					itemSelector: '.work',
  					layoutMode: 'fitRows'
				}); // the grid selector

	$(".about-sub").typeIt({
		strings: "Hover over a project to see a short and sweet summary, click to view the project",
     	speed: 30
	});
	$(".tech-sub").typeIt({
		strings: "The technology used in each project",
		speed: 30
	});

	// The projects, [0] = link to website, [1] = about, [2] = tech
 	var projects = {
		"Old Personal Site" : ["https://zkirby.github.io/personal-website/", "My old personal website; has a cool bubble animation on home page", "SCSS, Bootstrap, JS/jQuery"],
		"EduBox" : ["https://github.com/zkirby/EduBox", "My first programming project. A comprehensive education platform with such tools as a built in derivative calculator", "Python - Gtk+3, Sympy, matplotlib, subprocess, and many more libraries"],
		"MathTutor" : ["https://zkirby.github.io/mathtutor/", "Module based math platform meant to help tutors learn how to be better tutors", "CSS, HTML, jQuery"],
		"HelpMeSpell" : ["https://github.com/zkirby/HelpMeSpell", "Desktop application that parsed online dictionary for definitions. Could parse single words or whole sentences and would cache the result in a db. Used simple character recognition to suggest words", "Python - lxml, request, TKinter, SQLite"],
		"Movie Cataloguer" : ["https://github.com/zkirby/movie_cataloguer", "A small desktop db application with a built in CLI that allows the user to view statistics and rankings on the movies I've viewed and rated", "Python, SQLite, CLI"],
		"Real Time Trivia" : ["https://github.com/zkirby/RealTimeTrivia", "A 1 v 1 speed trivia game where the contestants are flashed random questions. Correct questions drive a small handbuilt arduino car, first to answer ten and cross the finish line wins.", "Python - pygame, pyserial; Arduino - Uno; Circuitry"],
		"Scheme Interpreter" : [".con1", "The final project for CS61a. Was a fully functional Interpreter for the Scheme language built in Python", "Python, Scheme, Object-oriented design, parsing, delimiters"],
		"SQL Interpreter" : [".con3", "The largest of the projects for CS61b, was a fully functional SQL Interpreter built in Java", "Java, SQL, Object-oriented, parsing"],
		"Bear Maps" : [".con2", "The final project for CS61b. Involed intricate use of the data structures taught in the class to construct a mapping web-app of UC Berkeley campus that also allowed for one to find the shortest path between two destinations on the map", "Java, Quilt, A*/ shortest path"],
		"Personal Logo" : ["https://www.behance.net/gallery/54161849/Personal-Logo", "Three personal logos for my portfolio, one of which is used for this website", "Adobe Illustrator"],
		"Eatup Logo" : ["https://www.behance.net/gallery/54162299/Eatup-logo-done-during-KamusiGold-internship", "Logo designed for Kamusi internship while on the Eatup team", "Adobe Illustrator"],
		"Orenda Logo" : ["https://www.behance.net/gallery/54161339/Orenda-logo-design", "Logo designed for Orenda Financial", "Adobe Illustrator"],
		"Athena" : ["https://github.com/partyshah/athena", "An online education platform that lets teachers upload and download lesson plans to shorten their time writing curriculum", "React, Sass, Express, Neo4j"],
		"Explore!" : ["https://devpost.com/software/firebase_unity_controller", "Created at Hackthenorth, a web app that uses Firebase to send realtime phone orientation data to a VR environment so external users can interact with VR characters and objects", "Express, JS/Pug/Sass, Unity, Firebase"]
	};

	$logo.click(function() {
		window.open("../../index.html", "_self");
	});

	$(".selection-container > #button").click(function() {
		var filt = $(this).attr("data-filter");

		unfocus(prev)
		prev = focus($(this));

		$grid.isotope({ filter: filt });
	});

	$(".active").click(function() {
		var link = projects[$(this).find(".title-text").text()][0];
		if (link.slice(0, 4) == "http") {
			var win = window.open(link, "_blank");
			win.focus();
		} else {
			$(link).css("display", "block");
		}
		
	});

	$(".active").hover(
		function() {
			var project = projects[$(this).find(".title-text").text()];
			$(".heading-text").text($(this).find(".title-text").text());
			$(".about-sub").typeIt({
			    strings: project[1],
     			speed: 30
			});
			$(".tech-sub").typeIt({
				strings: project[2],
				speed: 30
			});

	}, function() {

	});

	$logo.hover(function() {
		$(".logo").css("opacity", "1");
		//$(".logo").css("transform", "rotate(360deg)");

	}, function() {
		$(".logo").css("opacity", "0.6");
		//$(".logo").css("transform", "rotate(0deg)");
	});

});


function unfocus(prev) {
	prev.removeClass("selected");
	prev.addClass("unselected");
	return prev;
}

function focus(now) {
	now.removeClass("unselected");
	now.addClass("selected");
	return now;
}