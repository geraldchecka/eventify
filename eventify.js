//     eventify.js 1.0.0

//     Eventify may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://geraldchecka.github.io/eventify

(function(Eventify) {
  
  // Cross environment Support
  // -------------------------
  // Setup Eventify appropriately for the environment.

  // Support for AMD
  if (typeof define === "function" && define.amd) {
    define(function() {
      return Eventify;
    });
  }
  
  // Setup for libraries that expose 'exports'
  else if (typeof module !== "undefined" && module.exports) {
    module.exports = Eventify;
  }

  // Support for browser global
  else {
    window.Eventify = Eventify;
  }

}(function() {

  // Base Setup 
  // ----------

  // **Base class** constructor
  function Eventify() {
    this.events = {};
  }

  // Wrapper method holds all core method definitions. It is later attached to prototype
  // using a publicly available method called `mixin`.
  var methodApi = {
    // Expects an event name, callback and a context[*optional*]
    // Event names can be aliased using space as a separator.
    on: function(event, callback, context) {
      // ***event.split*** with a regex fared good in all browsers except Chrome.
      // 
      //     Regex and String manipulation micro-benchmarks did well in browsers, but chrome.
      //     So leaving it to be a character string as it is a highly used browser.
      //     http://jsperf.com/regex-string-tests-1
      //
      var events = event.split(" "),
          eLen = events.length,
          aVoid = void 0;
      if ((typeof event !== "string" || typeof callback !== "function") && events[0].length > 0) throw new TypeError("Invalid input arguments.");
      for (var eIndex = 0; eIndex < eLen; eIndex++) {
        this.events[events[eIndex]] = {
          context: context || aVoid,
          callback: callback
        };
      }
      return this;  
    },
    // Remove events and listeners from the parent object
    off: function(event) {
      if (this.isEvent(event)) delete this.events[event];
      return this;
    },
    // Looks up appropriate event and calls up its listener.
    trigger: function(event) {
      var handler = this.events[event],
          context = handler.context || this,
          args = Array.prototype.slice.call(arguments);
      args.splice(0,1);
      if (this.isEvent(event)) handler.callback.apply(context, args);
      return this;
    },
    // `isEvent` Is the passed-in value an Event?
    isEvent: function(event) {
      if (typeof event !== "string" || event.length < 1) return false;
      if (!this.events[event]) return false;
      return true;
    }
  };

  // Utility functions
  // -----------------

  // `extend` Extends a given object with all the properties in passed-in object
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
    }
    return target;
  };

  // `getKeys` Generate keys for the passed-in object
  var getKeys = Eventify.getKeys = function(obj) {
    var keys = [];
    if (!isObject(obj)) return keys;
    for (var key in obj) { keys.push(key); }
    return keys;
  };

  // `isObject` Is the passed-in value an object?
  var isObject = Eventify.isObject = function(obj) {
    return typeof obj === 'object' && !!obj;
  };

  // `mixin`
  // **Mixin** lets you add your own custom properties and functions to the Eventify object
  var mixin = Eventify.mixin = function(obj) {
    extend(Eventify.prototype, obj);
  };

  // Onboard all wrapper methods to Eventify
  mixin(methodApi);

  // Current **version** of the library
  Eventify.version = "1.0.0";

  return Eventify;
}()));