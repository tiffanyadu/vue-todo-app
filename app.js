new Vue({
  // Target div#events
  el: '#events',
  // Register any values or collections that hold data for the application here
  data: {
    event: { name: '', description: '', date: '' },
    events: []
  },
  // Anything within the ready function will run when the application loads
  ready: function() {
    // Call method to initialize some data
    this.fetchEvents();
  },
  // Methods we want to use in our application are registered here
  methods: {
    // Method to retrieve and set some data
    fetchEvents: function() {
      var events = [
        {
          id: 1,
          name: 'TIFF',
          description: 'Toronto International Film Festival',
          date: '2015-09-10'
        },
        {
          id: 2,
          name: 'The Martian Premiere',
          description: 'The Martian comes to theaters.',
          date: '2015-10-02'
        },
        {
          id: 3,
          name: 'SXSW',
          description: 'Music, film and interactive festivial in Austin, TX.',
          date: '2016-03-11'
        }
      ];
      // $set is a convenience method provided by Vue that is similar to pushing data into an array
      this.$set('events', events);
    },
    // Adds an event to the existing events array
    addEvent: function() {
      if(this.event.name) {
        this.events.push(this.event);
        this.event = { name: '', description: '', date: '' };
      }
    }
  }
});