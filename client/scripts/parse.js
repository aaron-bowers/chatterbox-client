// The Parse object represents your connection to outside world!
// Or... just the Parse API. Populate this object with methods
// which send requests to the RESTful Parse API.

var Parse = {

  server: `https://app-hrsei-api.herokuapp.com/api/chatterbox/messages/${window.CAMPUS}`,

  create: function(message, successCB, errorCB = null) {
    // TODO: send a request to the Parse API to save the message
    $.ajax({
      url: Parse.server, //...................website we want to send a request to
      type: 'POST', //........................HTTP verb - what action is being taken
      data: JSON.stringify(message), //.......data sent to server, specifies extra options for how "get" should happen
      contentType: 'application/json', //.....format of content you're providing to the server
      success: successCB,
      error: errorCB || function(data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      }
    });
  },

  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server, //...................website we want to send a request to
      type: 'GET', //.........................HTTP verb - what action is being taken
      data: { order: '-createdAt' }, //.......data sent to server, specifies extra options for how "get" should happen
      contentType: 'application/json', //.....format of content you're providing to the server
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }
};