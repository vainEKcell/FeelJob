Vue.component('chatroom', {

<template>
  <div class="chat">
    <div class="chat-header">
      <h1>Chat Room</h1>
    </div>
    <div class="chat-sidebar">
      <h2>Users</h2>
      <ul>
        <li v-for="user in users" :key="user.id" v-if="user.id !== currentUser.id">
          <a href="#" @click="openPrivateChat(user)">{{ user.username }}</a>
        </li>
      </ul>
    </div>
    <div class="chat-messages">
      <ul>
        <li v-for="message in messages" :key="message.id">
          <span class="message-username">{{ message.username }}:</span>
          <span class="message-content">{{ message.content }}</span>
        </li>
      </ul>
    </div>
    <div class="chat-input">
      <form @submit.prevent="sendMessage">
        <input type="text" v-model="newMessage" placeholder="Enter your message" />
        <button type="submit">Send</button>
      </form>
    </div>
    <div class="private-chat" v-if="isPrivateChatOpen">
      <h3>{{ privateChatUser.username }}</h3>
      <ul>
        <li v-for="message in privateMessages" :key="message.id">
          <span class="message-username">{{ message.username }}:</span>
          <span class="message-content">{{ message.content }}</span>
        </li>
      </ul>
      <form @submit.prevent="sendPrivateMessage">
        <input type="text" v-model="newPrivateMessage" placeholder="Enter your message" />
        <button type="submit">Send</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [],
      newMessage: '',
      currentUser: {},
      users: [],
      isPrivateChatOpen: false,
      privateChatUser: {},
      privateMessages: [],
      newPrivateMessage: '',
    };
  },
  methods: {
    sendMessage() {
      if (this.newMessage) {
        const message = {
          id: this.messages.length + 1,
          username: this.currentUser.username,
          content: this.newMessage,
          isPrivate: false,
        };
        this.messages.push(message);
        this.newMessage = '';
      }
    },
    sendPrivateMessage() {
      if (this.newPrivateMessage) {
        const message = {
          id: this.privateMessages.length + 1,
          username: this.currentUser.username,
          content: this.newPrivateMessage,
          isPrivate: true,
        };
        this.privateMessages.push(message);
        this.newPrivateMessage = '';
      }
    },
    openPrivateChat(user) {
      this.isPrivateChatOpen = true;
      this.privateChatUser = user;
    },
  },
  created() {
    // 初始化当前用户和用户列表
    this.currentUser = {
      id: 1,
      username: 'John',
    };
    this.users = [
      { id: 1, username: 'John' },
      { id: 2, username: 'Alice' },
      { id: 3, username: 'Bob' },
    ];
  },
};
</script>

<style scoped>
.chat {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.chat-header {
  background-color: #eee;
}
})