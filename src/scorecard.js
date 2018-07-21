function Scorecard(){
  this._BONUS = 10;
  this._rolls = [];
}


Scorecard.prototype.roll = function(pins){
  this._rolls.push(pins);
};

Scorecard.prototype.score = function(){
  var rollIndex = 0;
  var score = 0;

  for(var frame = 0; frame < 10; frame++){
    if(this._isSpare(rollIndex)){
      score += this._spareBonus(rollIndex);
      rollIndex += 2;
    } else {
      score += this._normalScore(rollIndex);
      rollIndex += 2;
    }
  }
  return score;
};


Scorecard.prototype._isSpare = function(rollIndex){
  return this._rolls[rollIndex] + this._rolls[rollIndex + 1] === 10;
};

Scorecard.prototype._spareBonus = function(rollIndex){
  return this._BONUS + this._rolls[rollIndex + 2];
};

Scorecard.prototype._normalScore = function(rollIndex){
  return this._rolls[rollIndex] + this._rolls[rollIndex + 1];
};
