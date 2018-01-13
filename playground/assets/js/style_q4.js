$(document).ready(function(){

	/* GAME FACTORS */
	const PLAYER_MOVE_FACTOR = 50;   // How far you move per action
	const SMOOTH_FACTOR = 0.1;       // How long it takes you to move PLAYER_MOVE_FACTOR pixels
	const BLOCK_MOVE_FACTOR = 100;  // How fast the blocks move 
	const NUM_BLOCKS = 4;  		     // How many blocks will be generated per cycle
	const FRAME_RATE = 10;		     // How often blocks are generated

	const STAFF = ['ziqi','bradley','sheryl','jemma','ryan','jarrod','lucy','zachary','emily','seth']; // For evil blocks
	const COLORS = ['peachpuff', 'salmon', 'powderblue', 'palegreen', 'plum', 'lavender', 'lemonchiffon', 'aqua', 'salmon', 'pink'];
	const ENCOURAGEMENT = ['nice', 'good job!', 'i love web design', 'you\'re doin\' great!', 'ayo', 'JS master!']
	const FUN_SCORES = [20, 50, 100, 200, 300, 500, 700, 1000]

	/* The Player */
	let $player = $("#q4-player");
	$player.css("transition", SMOOTH_FACTOR + "s");


	/* Handle Player Movement */
	$("body").on('keydown keypress', (event) => {
		let y = $player.css("top");
		let x = $player.css("left");

		if (event.which == 119 || event.which == 38) { // W or UP
			let new_top = (parseInt(y.slice(0,y.indexOf("p"))) - PLAYER_MOVE_FACTOR) 
			$player.css("top", new_top + "px");
			if (new_top < -100) { // Checking if too far up
				stop_game()
			}
		} else if (event.which == 100 || event.which == 39) { // D or RIGHT
			let new_left = (parseInt(x.slice(0,x.indexOf("p"))) + PLAYER_MOVE_FACTOR) 
			$player.css("left", new_left + "px");
		} else if (event.which == 115 || event.which == 40) { // S or DOWN
			let new_top = (parseInt(y.slice(0,y.indexOf("p"))) + PLAYER_MOVE_FACTOR)
			$player.css("top", new_top + "px");
			if (new_top > $(window).height()) { // Checking if too far down
				stop_game()
			}
		} else if (event.which == 97 || event.which == 37) { // A or LEFT
			let new_left = (parseInt(x.slice(0,x.indexOf("p"))) - PLAYER_MOVE_FACTOR)
			$player.css("left", new_left + "px");
			if (new_left < -100) { // Checking if too far back
				stop_game()
			}
		}
	});

	let current_frame = 0;

	

	generate_blocks = (num_blocks) => {

		for (let i = 0; i<num_blocks; i++) {
			let ypos = Math.random();
			let index = Math.floor(ypos * 100) % STAFF.length;
			let img = "<img src='http://www.wdd.io/static/images/" + STAFF[index] + ".jpg' />";
			let overlay = "<div class='tint red-animation'></div>"
			let block_string = "<div class='block' style='top: " + ((ypos * 100) + "%") + ";'>" + overlay + img + "</div>";
			$("#q4-wall-spawn").append(block_string);
		}
	}

	move_blocks = () => {

		$(".block").each(function() {
			let new_left = parseToIntAt($(this), "left", "p") - BLOCK_MOVE_FACTOR;
			$(this).css("left",  new_left + "px");
		});
			
	}

	detect_collision = ($player) => {

		$('.block').each(function() {
			if (collide($player, $(this))) {
				return stop_game();
			}
		})
	}

	stop_game = () => {
		clearInterval(game_self);
		$("#nice").hide();
		$player.removeClass("blue-animation");
		$(".tint").removeClass("red-animation");
		$(".block, #q4-player, #q4-game-score").addClass("end");
		$("#q4-end-score").text("Final " + $("#q4-game-score").text());
		$("#q4-overlay").show();
		$("#q4-game-over").show();
	}

	$("#q4-play-again").click(function() {
		location.reload();
	})


	collide = ($div1, $div2) => {
	  let x1 = $div1.offset().left;
	  let y1 = $div1.offset().top;
	  let h1 = $div1.outerHeight(true);
	  let w1 = $div1.outerWidth(true);
	  let b1 = y1 + h1;
	  let r1 = x1 + w1;
	  let x2 = $div2.offset().left;
	  let y2 = $div2.offset().top;
	  let h2 = $div2.outerHeight(true);
	  let w2 = $div2.outerWidth(true);
	  let b2 = y2 + h2;
	  let r2 = x2 + w2;

	  if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
	  return true;
	}

	remove_blocks = () => {

		$(".block").each(function(){

			let left = parseToIntAt($(this), "left", "p");
			if (left < -101) {
				$(this).remove();
			}

		})
			
	}

	update_score = (score) => {
		$("#q4-game-score").text("Score: " + score);
		if (FUN_SCORES.includes(score) || (score > 1000 && score % 500 == 0)) {
			congrats()
		}
	}

	congrats = () => {
		let message = ENCOURAGEMENT[Math.floor(Math.random() * ENCOURAGEMENT.length)];
		let color1 = COLORS[Math.floor(Math.random() * COLORS.length)];
		let color2 = COLORS[Math.floor(Math.random() * COLORS.length)];
		$("#nice").css("color", color1);
		$("#nice").css("text-shadow", "5px 7px 0px " + color2);
		$("#nice").text(message);
		$("#nice").show();
		setTimeout(function() {
			$("#nice").fadeOut();
		}, 1000)
	}

	parseToIntAt = ($obj1, property, end) => {
		return parseInt($obj1.css(property).slice(0, $obj1.css(property).indexOf(end)))
	}


	/* The Main Game Loop */
	game_loop = () => {
		current_frame += 1;

		if (current_frame == 1 || current_frame % FRAME_RATE == 0) {
			generate_blocks(NUM_BLOCKS);
		}

		move_blocks();

		detect_collision($player);

		remove_blocks();

		update_score(current_frame);
	}

	// Start the game
	let game_self = setInterval(game_loop, 200);
})





