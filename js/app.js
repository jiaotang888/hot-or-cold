var randomNum = createNum();

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
			var guessNum = parseInt(this.guessNum);
			var counter = this.counter;
			var lastNum = this.guessList[counter-1];
			this.feed =	getFeed (randomNum,guessNum,counter,lastNum);
			this.counter++;
			this.guessList.push(guessNum);
			this.guessNum = '';		
		},
		newGame:function(){
			randomNum = createNum();
			this.feed = "Make your Guess!",
			this.counter = 0;
			this.guessList = [];
		}
	}
});

function createNum () {
	return Math.floor(Math.random()*100+1)
}

function getFeed (randomNum,guessNum,counter,lastNum) {
	var d = Math.abs(guessNum - randomNum);
	if (d == 0) {
		return "Congratulations!"
	} else{
		var a = (function(){
			if (d<10) {
				return "Hot"
			} else{
				return "Cold"
			};
		})();
		var b = (function(){
			if (counter) {
				var lastd = Math.abs(lastNum - randomNum);
				if (d<lastd) {
					return "  Warmmer"
				} else if (d>lastd) {
					return "  Colder"
				} else{
					return ""
				};
			} else{
				return ""
			};
		})();
		return a + b;
	};
}
