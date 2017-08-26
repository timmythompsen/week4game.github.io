
$(document).ready(function() {
    
	var wins =0;
	var losses =0;
	var numGuessed=false;
	var numToGuess = generate();
	var count = 0;
	var crystal1 = crystals();
	var crystal2 = crystals();
	var crystal3 = crystals();
	var crystal4 = crystals();

	

	function generate(){
		var num = Math.ceil(Math.random()*100);
		return num;
	}

	function crystals(){
		var num = Math.ceil(Math.random()*20);
		return num;
	}

	function gameFunction(){
		wins = 0;
		losses=0;
		numGuessed=false;
		numToGuess = generate();
		$("#wins").html("Wins: " + wins);
		$("#losses").html("losses: " + losses);
		$("#random-number").html("Match this number: " + numToGuess);
		$("#count").html("Count: " + count);
		
		console.log(crystal1)
		console.log(crystal2)
		console.log(crystal3)
		console.log(crystal4)
		$( "#crystal1" ).click(function() {
  			count = count + crystal1;
  			$("#count").html("Count: " + count);
  			compare();
		});
		$( "#crystal2" ).click(function() {
  			count = count + crystal2;
  			$("#count").html("Count: " + count);
  			compare();
		});
		$( "#crystal3" ).click(function() {
  			count = count + crystal3;
  			$("#count").html("Count: " + count);
  			compare();
		});
		$( "#crystal4" ).click(function() {
  			count = count + crystal4;
  			$("#count").html("Count: " + count);
  			compare();
		});

		function compare(){
			if(count === numToGuess){
				wins++;
  				$("#wins").html("Wins: " + wins);
  				reset();
			}
			else if(count > numToGuess){
				losses++;
  				$("#losses").html("losses: " + losses);
  				reset();
			}
		}

		function reset(){
			count = 0;
			numGuessed=false;
			numToGuess = generate();
			$("#wins").html("Wins: " + wins);
			$("#losses").html("losses: " + losses);
			$("#random-number").html("Match this number: " + numToGuess);
			$("#count").html("Count: " + count);
			crystal1 = crystals();
			crystal2 = crystals();
			crystal3 = crystals();
			crystal4 = crystals();
		}

	}

	gameFunction();
	

});
	





