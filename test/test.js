var assert = require('assert');
const greeter = require('./../src/greeter');

describe('Greeter', function () {
  describe('#sayHi()', function () {
    it('should say hello to Nick by default', function () {
      assert.equal(greeter.sayHi(), `Hello Nick`)
    });
  });

  describe('#sayHi(name)', function () {
    it('should say hello to someone other than Nick', function () {
      assert.equal(greeter.sayHi('Jane'), `Hello Jane`)
    });
  });
});