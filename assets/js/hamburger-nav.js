$(document).ready(function() {

	var currpage = $(".nav-menu").attr("name");
	$('[data-toggle="tooltip"]').tooltip(); 

	$(".hamburger").click(function() {
		if ($(this).hasClass("is-active")) {
			$(this).removeClass("is-active");
			triggerCollapse();
		} else {
			$(this).addClass("is-active");
			triggerExpand();
		}
	}) 

	$("div > .invis-c").click(function() {
		let name = $(this).attr("name");
		if (!(name == "resume")) {
			window.open(name + ".html", "_self");
		} else {
			window.open("../resources/resume/resume.pdf", "_blank").focus();
		}
	});
});


function triggerExpand() {
	let $items = $(".nav-item1");
	let count = 100;
	$items.each(function() {
		let select = $(this);
		setTimeout(()=> select.css("opacity", "1"), count);
		count += 100;
	});

	let $invis = $(".invis-c");
	$invis.each(function() { $(this).show(); });

}

function triggerCollapse() {
	let $items = $(".nav-item1");
	let count = 400;
	$items.each(function() {
		let select = $(this);
		setTimeout(()=> select.css("opacity", "0"), count);
		count -= 100;
	});

	let $invis = $(".invis-c");
	$invis.each(function() { $(this).hide(); });
}




