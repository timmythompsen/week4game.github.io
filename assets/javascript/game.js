
var bands = ["ledzeppelin","acdc", "backstreetboys", "bobmarley", "deadmau5", "linkinpark"];

var bandImages = {
	linkinpark: "./assets/images/linkinpark.jpg",
	ledzeppelin: "./assets/images/ledzepp.jpg",
	acdc: "./assets/images/acdc.jpg",
	backstreetboys: "./assets/images/backstreet.jpg",
	bobmarley: "./assets/images/bobmarley.jpg",
	deadmau5: "./assets/images/deadmau5.jpg",
};

var gameObj = {

	array:bands,
    imgmap:bandImages,
    wins:0,
    curbandstring:"",
    currentband:"empty",
    matchband:[],
    gamestarted:false,
    wordguessed:false,
    guessremaining:15,
    guessedletters:[],
    matchlength:0,
    
    resetGame:function(){
    	console.log("game reset");
    	this.matchlength = 0;
    	this.wordguessed = false;
    	this.guessremaining = 15;
    	var arrindex = Math.floor((Math.random() * 6) +1);
    	this.currentband = this.array[arrindex - 1];
    	this.curbandstring="";
    	console.log(arrindex);
    	console.log(this.currentband);
    	this.matchband = [];
    	this.guessedletters = [];
    	console.log(this.currentband);
    	for(var i = 0;i < this.currentband.length;i++){
    		this.matchband.push('_');
    		this.matchband.push(' ');
    		this.curbandstring = this.curbandstring + "_";
    	}
    	console.log(this.matchband.length);
    	console.log(this.matchband);
    	document.getElementById("remainingguess").innerHTML = this.guessremaining;
        document.getElementById("guessedletters").innerHTML = " ";
    	document.getElementById("dottedwordarea").innerHTML = this.curbandstring;
    	document.getElementById("bandimage").src = this.imgmap[this.currentband];
    },

    gameControl: function(keyPress){
    	if(this.gamestarted == false){
	    		this.gamestarted = true;
	    		this.matchlength = 0;
          		var arrindex = Math.floor((Math.random() * 7) + 1);
          		this.currentband = this.array[arrindex];
          		for(var i =0;i < this.currentband.length;i++)
          		{
          			this.matchband.push('_');
          			this.matchband.push(' ');
          			this.curbandstring = this.curbandstring + "_";
          		}
          		console.log(this.currentband);
          		console.log(this.matchband.length);
          		console.log(this.matchband);
          		document.getElementById("guessedletters").innerHTML = "";
          		document.getElementById("dottedword").innerHTML = this.curbandstring;
          		document.getElementById("remguess").innerHTML = this.guessremaining;
          		document.getElementById("bandimg").src = this.imgmap[this.currentband];
			}
			else{
				if(this.guessedletters.indexOf(keyPress) == -1){
						this.guessedletters.push(keyPress);
						this.guessremaining = this.guessremaining -1;
						this.displayguessedLetter(keyPress);				
					
					var text="";
					if( this.currentband.indexOf(keyPress) != -1){
						console.log("key match found:  " + keyPress);
						console.log(text);
						for(var i=0;i < this.currentband.length ;i++){
							if(this.currentband[i] == keyPress){
								console.log(this.currentband[i] + "  :"  + i + keyhit)
							    this.matchband[i*2] = keyPress;
							    this.matchlength = this.matchlength + 1;
							}
						}
						for (var i=0;i < this.matchband.length;i++){
							text = text + this.matchband[i]
						}
						console.log(this.matchband);
						document.getElementById("dottedword").innerHTML = text;
						if (this.currentband.length == this.matchlength){
							this.wins = this.wins +1;
							this.wordguessed = true;
							document.getElementById("wins").innerHTML = "Wins: " + this.wins;
							
    					}
    					if(this.guessremaining == 0 || this.wordguessed == true){
						console.log("noguess remaning reset");
						this.resetGame();
    					}
				}
			}
		}
	}
}

	document.onkeyup = function(event){
    var key = event.key;
   	gameObj.gameControl(key);
	};