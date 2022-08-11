// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

var MessageView = {
  render: _.template(`
      <div class="chat">
        <div class="username"
          class="<%- Friends.isFriend(username) ? 'friend' : '' %>"
          data-username="<%- username %>"
        >
          <%- username %>
        </div>
        <div class="message">
          <%- text %>
        </div>
      </div>
    `)
};