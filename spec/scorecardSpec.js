describe('Scorecard', function() {

  var scorecard;

  beforeEach(function(){
    scorecard = new Scorecard();
  });

  it("you can view your current score", function(){
   expect(scorecard.score()).toBe(0);
 });


});
