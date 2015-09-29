		// Variables //
		var score = 0;
		
		// Click Handlers //
		$('#add5').on('click', addFive);
		$('#add10').on('click', addTen);
		$('#minus1').on('click', minusOne);
		$('#reset').on('click', reset)
		
		// Logic //
		function addFive() {
			score += 5;
			updateResult(score);
		}

		function addTen() {
			score += 10;
			updateResult(score);
		}

		function minusOne() {
			score -= 1;
			updateResult(score);
		}

		function reset() {
			score = 0;
			updateResult(score);
		}

		function updateResult(score) {
			$('#result').html(score);
		}

		// var score = value passed into function //