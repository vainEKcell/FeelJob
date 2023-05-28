// 创建用户列表
var users = [];

// 显示登录页面
document.getElementById("login").style.display = "block";
document.getElementById("username").focus();

// 处理登录按钮点击事件
document.getElementById("btn-login").addEventListener("click", function() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if (username && password) {
		// 验证用户信息
		// 如果验证通过，将用户添加到用户列表中
		users.push({
			username: username,
			password: password
		});

		// 隐藏登录页面，显示聊天室页面
		document.getElementById("login").style.display = "none";
		document.getElementById("chat-room").style.display = "block";
		document.getElementById("message").focus();

		// 更新在线用户列表
		updateUserList();
	}
});

// 处理发送消息按钮点击事件
document.getElementById("btn-send").addEventListener("click", function() {
	var message = document.getElementById("message").value;
	if (message) {
		// 将消息添加到聊天消息列表中
		var username = getCurrentUser().username;
		var timestamp = new Date().toLocaleString();
		var msg = {
			username: username,
			message: message,
			timestamp: timestamp
		};
		document.getElementById("chat-messages").innerHTML += "<p><strong>" + username + "</strong> (" + timestamp + "): " + message + "</p>";

		// 广播新消息
		for (var i = 0; i < users.length; i++) {
			if (users[i].username != username) {
				sendMessage(users[i].username, msg);
			}
		}

		// 清空输入框
		document.getElementById("message").value = "";
	}
});

// 处理留言板按钮点击事件
document.getElementById("btn-post").addEventListener("click", function() {
	var message = document.getElementById("board-message").value;
	if (message) {
		// 将留言添加到留言列表中
		var username = getCurrentUser().username;
		var timestamp = new Date().toLocaleString();
		var msg = {
			username: username,
			message: message,
			timestamp: timestamp
		};
		document.getElementById("message-list").innerHTML += "<p><strong>" + username + "</strong> (" + timestamp + "): " + message + "</p>";

		// 清空输入框
		document.getElementById("board-message").value = "";
	}
});

// 更新在线用户列表
function updateUserList() {
	var userList = document.getElementById("user-list");
	userList.innerHTML = "";
	for (var i = 0; i < users.length; i++) {
		var userItem = document.createElement("p");
		userItem.innerHTML = users[i].username;
		userList.appendChild(userItem);
	}
}

// 获取当前登录的用户
function getCurrentUser() {
	var username = document.getElementById("username").value;
	for (var i = 0; i < users.length; i++) {
		if (users[i].username == username) {
			return users[i];
		}
	}
}

// 向指定用户发送消息
function sendMessage(username, msg) {
	// TODO: 实现向指定用户发送消息的功能
	// 可以使用WebSocket或Ajax等技术来实现
}