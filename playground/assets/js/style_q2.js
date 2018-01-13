$(document).ready(function()  {

	$(".q2-nav-item").click(function() {


		let button_name = $(this).text();
		let button_active = $(this).hasClass("q2-active");


		if (!button_active) {
			$(this).addClass("q2-active");
			$(this).removeClass("q2-inactive");

			if (button_name == "FRUIT") {
				$(".q2-fruit").css("display", "inline-block");
			} else if (button_name == "BREAD") {
				$(".q2-bread").css("display", "inline-block");
			} else {
				$(".q2-water").css("display", "inline-block");
			}

		} else {
			$(this).addClass("q2-inactive");
			$(this).removeClass("q2-active");

			if (button_name == "FRUIT") {
				$(".q2-fruit").css("display", "none");
			} else if (button_name == "BREAD") {
				$(".q2-bread").css("display", "none");
			} else {
				$(".q2-water").css("display", "none");
			}
		}
	})



})