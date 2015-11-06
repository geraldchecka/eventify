(function() {

  function Eventify() {
    this.events = {};
    this.length;
  }

  //Prototype definitions go here
  //Please feel free to add your own methods here if you'd like to extend Eventify

  //Method definitions go here
  var methodApi = {
    //On
      //Accept a last parameter that is a number and millisecond value
      //Accept as many callbacks as they want
    on: function() {
      console.log("Prototype: On method invoked");
      //Set this.length;
      return false;  
    },
    //Off
    off: function() {
      console.log("Prototype: Off method invoked");
      return false;
    },
    //Trigger
    trigger: function() {
      console.log("Prototype: Trigger method invoked");
      return false;
    },
    //Timed Off
    timedOff: function() {
      console.log("Prototype: Timed Off method invoked");
      return false;
    },
    //Alias
    alias: function() {
      console.log("Prototype: Alias method invoked");
      return this.getEvents();
    }
  };

  //Extend a given object with all the properties in passed-in object
  var extend = Eventify.extend = function() {
    var aLen = arguments.length,
        target = arguments[0];
    if (aLen < 2 || target === void 0) return {};
    for (var aIndex = 1; aIndex < aLen; aIndex++) {
      var source = arguments[aIndex],
          keys = getKeys(source),
          kLen = keys.length;
      for (var kIndex = 0; kIndex < kLen; kIndex++) {
        var key = keys[kIndex];
        target[key] = source[key];
      }
      return target;
    }
  };

  //Generates keys for the passed-in object
  var getKeys = Eventify.keys = function(obj) {
    var keys = [];
    if (!isObject(obj)) return keys;
    for (var key in obj) { keys.push(key); }
    return keys;
  }

  //Is the passed-in value an object?
  var isObject = Eventify.isObject = function(obj) {
    return typeof obj === 'object' && !!obj;
  }

  //Attach all inheritable properties to Eventify prototype
  extend(Eventify.prototype, methodApi);

  //Version
  Eventify.version = "1.0.0";

  //module.exports = Eventify;
  //Remove later
  window.Eventify = Eventify;
})();