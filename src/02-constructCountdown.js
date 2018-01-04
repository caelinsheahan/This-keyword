function constructCountdown(time){
  const obj = {}
  obj.secondsLeft = time;

  obj.reset = function(){
    this.secondsLeft = time;
  };

  obj.start = function(cb){


    this.intervalID = setInterval(() => {
      // the `this` keyword here does not refer to `obj`
      // update the code such that `secondsLeft`, and `intervalID`
      // can be accessed.

      if(this.secondsLeft <= 0){
        clearInterval(this.intervalID)
      }
      cb(this.secondsLeft--);
    },1000)
  }

  return obj;
}

module.exports = constructCountdown;
