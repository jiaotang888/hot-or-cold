var x = createNum();
new Vue({
	el:"#container",
	data:{
		showHelp:false,
		feed:"Make your Guess!",
		guessNum:"",
		counter:0,
		guessList:[]
	},
	methods:{
		guess:function(){
			this.feed = getFeed(x,this.guessNum);
			this.counter++;
			this.guessList.push(this.guessNum);
			this.guessNum = '';			
		},
		newGame:function(){
			x = createNum();
			this.feed = "Make your Guess!",
			this.counter = 0;
			this.guessList = [];
		}
	}
});
function createNum () {
	return Math.floor(Math.random()*100+1)
}
function getFeed (randomNum,guessNum) {
	var d = Math.abs(randomNum - parseInt(guessNum));
	if (d ==0 ) {
		return "Congratulations!"
	} else if (d < 11) {
		return "hot"
	} else{
		return "cold"
	};
}