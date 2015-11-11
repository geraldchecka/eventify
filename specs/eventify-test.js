describe('Eventify', function() {

  it('Invoke the callback function for the in-bound event when triggered', function() {
    var ev = new Eventify;
    
    ev.on('sample', function() {
      expect(true).toBe(true);
    });

    ev.trigger('sample');
  });

  it('Pass parameters to the invoked callback function when triggered', function() {
    var ev = new Eventify;
    
    ev.on('sample', function(name, street) {
      expect(name).toEqual('Anvesh');
      expect(street).toEqual(121);
    });

    ev.trigger('sample', 'Anvesh', 121);
  });

  it('Should invoke multiple events to be bound at once', function() {
    var ev = new Eventify;
    
    ev.on('sample test equation', function(name, street) {
      expect(true).toBe(true);
    });

    ev.trigger('sample');
    ev.trigger('test');
    ev.trigger('equation');
  });

  it('Should invoke multiple events to be bound at once - with parameters passed', function() {
    var ev = new Eventify;
    
    ev.on('sample test equation', function(name, street) {
      expect(name).toEqual('Anvesh');
      expect(street).toEqual(121);
    });

    ev.trigger('sample', 'Anvesh', 121);
    ev.trigger('test', 'Anvesh', 121);
    ev.trigger('equation', 'Anvesh', 121);
  });

  it('Should invoke events to be bound at once - with provided additional context', function() {
    var ev = new Eventify;
    
    var obj = {
      name: 'Anvesh',
      street: 121
    };

    ev.on('sample', function() {
      expect(this.name).toEqual('Anvesh');
      expect(this.street).toEqual(121);
    }, obj);

    ev.trigger('sample');
  });

  it('Should invoke multiple events to be bound at once - with provided additional context', function() {
    var ev = new Eventify;
    
    var obj = {
      name: 'Anvesh',
      street: 121
    };

    ev.on('sample test equation', function() {
      expect(this.name).toEqual('Anvesh');
      expect(this.street).toEqual(121);
    }, obj);

    ev.trigger('sample');
    ev.trigger('test');
    ev.trigger('equation');
  });

  it('Should invoke multiple events to be bound at once - with provided additional context - with parameters passed', function() {
    var ev = new Eventify;
    
    var obj = {
      name: 'Anvesh',
      street: 121
    };

    ev.on('sample test equation', function(breakfast, lunch) {
      expect(this.name).toEqual('Anvesh');
      expect(this.street).toEqual(121);
      expect(breakfast).toEqual("Idly");
      expect(lunch).toEqual("Lasgna");
    }, obj);

    ev.trigger('sample', 'Idly', 'Lasgna');
    ev.trigger('test', 'Idly', 'Lasgna');
    ev.trigger('equation', 'Idly', 'Lasgna');
  });

  it('Should unbind events', function() {
    var ev = new Eventify;

    ev.on('sample', function() {});

    ev.trigger('sample');
    
    ev.off('sample');
    expect(ev.events.sample).toBe(undefined);
  });
});