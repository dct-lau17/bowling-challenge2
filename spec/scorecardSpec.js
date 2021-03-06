describe('Scorecard', function() {

  var scorecard;

  beforeEach(function(){
    scorecard = new Scorecard();
  });


  it("allows a gutter game", function(){
    rollMultipleTimes(20,0);
    expect(scorecard.score()).toEqual(0);
  });

  it("calculates the score", function(){
    scorecard.roll(1);
    scorecard.roll(1);
    rollMultipleTimes(18,0);
    expect(scorecard.score()).toEqual(2);
  });

  it("calculates the spare", function(){
    scorecard.roll(5);
    scorecard.roll(5);
    scorecard.roll(2);
    rollMultipleTimes(17,0);
    expect(scorecard.score()).toEqual(14);
  });

  it("calculates the strike", function(){
    scorecard.roll(10);
    scorecard.roll(5);
    scorecard.roll(2);
    rollMultipleTimes(17,0);
    expect(scorecard.score()).toEqual(24);
  });

  it("calculates a perfect game of 300", function(){
    rollMultipleTimes(12,10);
    expect(scorecard.score()).toEqual(300);
  });


  function rollMultipleTimes(rolls, pins){
    for(var i = 0; i < rolls; i++){
      scorecard.roll(pins);
    }
  }

});
