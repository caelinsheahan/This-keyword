function constructPerson(fname, lname){
  const obj = {}
  obj.fname = fname
  obj.lname = lname
  var self = this
  // save fname and lname on obj

  // create a function named `getGreeting` that returns a greeting
obj.getGreeting = () => {
  return 'Hello ' + obj.fname + ' ' + obj.lname
}
  return obj
}

module.exports = constructPerson;
