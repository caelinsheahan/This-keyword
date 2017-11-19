function constructCountdown(time){
  const obj = {}
  obj.secondsLeft = time;

  obj.reset = function(){
    this.secondsLeft = time;
  };

  obj.start = function(cb){
    const self = this;
    this.intervalID = setInterval(function(){
      if(self.secondsLeft <= 0){
        clearInterval(self.intervalID)
      }
      cb(self.secondsLeft--);
    },1000)
  }

  return obj;
}

module.exports = constructCountdown;
