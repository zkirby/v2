$(document).ready(function() {

	var $main = $(".primary");
	var balltype = "blue";

	if (balltype == "blue") {
		$("div").click(function() {
			bubbleFactory(8);
			clearBubbles();
		});

		document.onkeydown = function(e) {
			console.log(e.which);
			if (e.which == 88) {
				$main.css("top", "241px");
	    		$main.css("left", "571px");
			} else if (e.which == 56){
				$("body").css("background", "white")
			} else {
			    bubbleFactory(4);
				clearBubbles();
			}
	    }

	 	$main.draggable({
	 		addClass: false,
	 		containment: ".playground",
	 		scroll: false,
	 		drag: function(event, ui) { detectLine(); }
	 	})
	 } else if (balltype == "pink") {
	 	
	 }


	function bubbleFactory(numBubbles) {

		var $primary = $(".primary");

		for (var i = 1; i <= numBubbles; i++) {
			var bubbleHTML = $("<div id=\"ball\" class=\"second stick\"></div>");
			bubbleHTML.insertBefore($primary);
			bubbleHTML.addClass("spread-s" + i);
			bubbleHTML.css("top", $primary.css("top"));
			bubbleHTML.css("left", $primary.css("left"));

		}

	}


	function clearBubbles() {
		var $second = $(".second");

		$second.each(function() {
	   	 	var selectedOption = $(this)
	    	if (selectedOption.width() == 0) {
	    		selectedOption.remove();
	    	}
		});
	}

	function detectLine() {
		let top = $main.css("top");
		console.log(top.slice(0, top.length - 2))
		if (parseInt(top.slice(0, top.length - 1)) > 500) {
			balltype = "pink";
		}
 
	}

});



/* 

X - recenter - Find your center 
T - change colors - Know your true colors 
C - draggable on - life can be... chaotic 

*/










