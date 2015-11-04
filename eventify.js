(function() {
  var events = {};

  function Eventify() {
    this.events = {};
    this.length;
  }

  //Prototype definitions go here
  //Please feel free to add your own methods here if you'd like to extend Eventify


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
    var length = arguments.length,
        args = arguments,
        target = arguments[0];

    if (args.length < 2 || target === undefined) return {};
    for (var index = 1; index < length; index++) {
      //get keys
      return obj;
    }
  };

  //Generates keys for the passed-in object
  var keys = Eventify.keys = function(obj) {
    //Integrity checks
    if ()
    var keys = [];
    for (var key in obj) { keys.push(key); }

    return objectOut;
  }

  //Is the passed-in value an object?
  var isObject = Eventify.isObject = function() {
    
    return {};
  }

  //Attach all inheritable properties to Eventify prototype
  extend(Eventify.prototype, methodApi);

  //Version
  Eventify.version = "1.0.0";

  //module.exports = Eventify;
})();