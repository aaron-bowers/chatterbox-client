// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    MessagesView.$chats.on('click', '.username', MessagesView.handleClick);
  },

  render: function (messages) {
    MessagesView.$chats.html('');
    // TODO: Render _all_ the messages.
    // iterate over array of messages
    for (var i = 0; i < messages.length; i++) {
      var message = messages[i];
      MessagesView.renderMessage(message);
    }
  },

  renderMessage: function (message) {
    // TODO: Render a single message.
    var $message = MessageView.render(message);
    MessagesView.$chats.prepend($message);
  },

  handleClick: function (event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    var username = $(event.target).data('username');
    if (username === undefined) {
      return;
    }

    Friends.toggleStatus(username, MessagesView.render);
  }

};

