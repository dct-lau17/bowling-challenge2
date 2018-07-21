describe('Scorecard', function() {

  var scorecard;

  beforeEach(function(){
    scorecard = new Scorecard();
  });


  it("allows a gutter game", function(){
    for (var i = 0; i < 20; i++){
      scorecard.roll(0);
    }
    expect(scorecard.score()).toEqual(0);
  });


});
