const expect = require('chai').expect;
const constructPerson = require('../src/constructPerson')

describe('constructPerson', function(){
  it('should return an object', function(){
    const p = constructPerson('fname', 'lname');
    expect(typeof p).to.equal('object');
    expect(Array.isArray(p)).to.equal(false);
  });

  it('should store the first argument in a key named `fname` in the returned object', function(){
    const p = constructPerson('fname', 'lname');
    expect(p.fname).to.equal('fname');
  });

  it('should store the second argument in a key named `lname` in the returned object', function(){
    const p = constructPerson('fname', 'lname');
    expect(p.lname).to.equal('lname');
  });

  it('should have a function in a key named `getGreeting` in the returned object', function(){
    const p = constructPerson('fname', 'lname');
    expect(typeof p.getGreeting).to.equal('function');
  })

  it('`getGreeting` should return `Hello fname lname`', function(){
    const p = constructPerson('fname', 'lname');
    expect(p.getGreeting()).to.equal('Hello fname lname')
  })
})
