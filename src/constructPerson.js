function constructPerson(fname, lname){
  const obj = {}

  obj.fname = fname;
  obj.lname = lname;

  obj.getGreeting = function(){
    return `Hello ${this.fname} ${this.lname}`
  }

  return obj;
}

module.exports = constructPerson;
