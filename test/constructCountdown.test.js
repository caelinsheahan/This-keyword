const expect = require('chai').expect;
const sinon  = require("sinon");
const constructCountdown = require('../src/constructCountdown');

describe('constructCountdown', function(){
  this.slow(10000) // teaks coloring to time in test reporter
  this.timeout(0)  // disables
  it('it should count down from the value that it was constructed with when `start()` method is invoked with a callback function`', function(done){
    let rounds = 5;

    // create the countdown clock
    const c = constructCountdown(rounds);

    // start clock with a callback
    c.start(function(val){
      console.log(val);

      // check each value to make sure it is what is expected
      expect(val).to.equal(rounds--)

      // if the value is 0, it means that the clock is over
      if(val === 0){

        // stop the test
        setTimeout(function(){
          expect(c.secondsLeft).to.equal(-1)
          done();
        },2000)
      }
    });
  });

  it('should reset to it`s original countdown timer when `reset()` method is invoked', function(done){
    // if this error triggers, add a clearInterval()
    let rounds = 5;

    // create the countdown clock
    const c = constructCountdown(rounds);

    // start clock with a callback
    c.start(function(val){
      console.log(val)

      // check each value to make sure it is what is expected
      expect(val).to.equal(rounds--)

      // if the value is 0, it means that the clock is over
      if(val === 0){

        setTimeout(function(){
          expect(c.secondsLeft).to.equal(-1)
          done();
        },2000)
      }
    });

    setTimeout(function(){
      rounds = 5;
      c.reset();
    }, 4000)
  });

})
