function Scorecard(){
this._score = 0;
}


Scorecard.prototype.roll = function(pins){
  this._score += pins;
};

Scorecard.prototype.score = function(){
   return this._score;
};
