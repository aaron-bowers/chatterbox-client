// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function () {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.isSelected();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.
    setInterval(App.fetch, 1000);
  },

  fetch: function (callback = () => { }) {
    Parse.readAll(({ results }) => {
      // examine the response from the server request:
      console.log(results);

      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.
      Messages.update(results, MessagesView.render); // pass MessagesView.render as a callback if Messages.update is async
      Rooms.update(results, RoomsView.render);

      callback();
    });
  },

  startSpinner: function () {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function () {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
