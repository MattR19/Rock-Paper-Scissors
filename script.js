var score=0;
var choices={
	/**key: value**/
	"0": "rock",
	"1": "paper",
	"2": "scissors"
}

var playerChoice;
var computerChoice;
var winner;

	/**generate random number synonomous to rock paper or scissors**/

	

var order=[0,1,2,0];
var getWinner=function(playerChoice,computerChoice){
	if (order[playerChoice]===order[computerChoice]) return "Tie game. Try again";
	else if (order[playerChoice]===order[computerChoice-1]) {score--; return "you lost";}
	else {score++;return "YOU WON!";}
}

/**UI **/

var paragraph = document.querySelector('p');

var assignClickListener=function(tag,position){
	tag.addEventListener('click',function(){
		playerChoice=position;
		computerChoice=Math.floor(Math.random()*3);
		paragraph.innerText="\nThe computer selected " + choices[computerChoice];
		paragraph.innerText+= "\n"+getWinner(playerChoice,computerChoice);
		paragraph.innerText+="\nSCORE: "+score;
	})
}

var images={
	tags:document.getElementsByTagName('img'),
	init: function(){
		for (var i=0;i<this.tags.length;i++){
			assignClickListener(this.tags[i],i);
		}
	}
}

images.init();