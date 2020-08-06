const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");

const formatMessage = require("./utils/messages");
const {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers,
  getRoomData,
  roomExists,
  readyUsers,
  allUsersReady
} = require("./utils/users");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Set static folder
app.use(express.static(path.join(__dirname, "client")));

const botName = "Dummy God";

// Run when client connects
io.on("connection", socket => {
  socket.on(
    "joinRoom",
    ({ userName, roomId, packId, curr_pack, card_time }) => {
      // roomid exists or not
      // if no pack ID match for the room id and get the pack id and assign
      if (!packId && !curr_pack && !card_time) {
        if (roomExists(roomId)) {
          room = getRoomData(roomId);
          packId = room.packId;
          curr_pack = room.curr_pack;
          card_time = room.card_time;
        } else {
          socket.emit("err", "Invalid room id!");
          return;
        }
      }
      const user = userJoin(
        socket.id,
        userName,
        roomId,
        packId,
        curr_pack,
        card_time
      );

      socket.join(user.roomId);

      // Welcome current user
      socket.emit(
        "message",
        formatMessage(
          botName,
          `Welcome ${user.userName} to the room! Wait for other dummies now.`
        )
      );

      // Broadcast when a user connects
      socket.broadcast
        .to(user.roomId)
        .emit(
          "message",
          formatMessage(botName, `${user.userName} has joined the room`)
        );

      // when a user is ready
      socket.on("ready", () => {
        readyUser = readyUsers(user.id);
        if (readyUser.status) {
          var msg = formatMessage(readyUser.userName, `I'm ready!`);
        } else {
          var msg = formatMessage(readyUser.userName, `I'm not ready!`);
        }
        socket.broadcast.to(readyUser.roomId).emit("message", msg);

        if (allUsersReady()) {
          io.to(user.roomId).emit(
            "message",
            formatMessage(botName, `Everyones ready! lets begin!`)
          );
          io.to(user.roomId).emit("allReady", {
            // send some data if needed
          });
        }
      });

      // Send users and room info
      io.to(user.roomId).emit("roomUsers", {
        room: user.roomId,
        users: getRoomUsers(user.roomId),
        roomData: getRoomData(user.roomId)
      });
    }
  );

  // Listen for chatMessage
  socket.on("chatMessage", msg => {
    const user = getCurrentUser(socket.id);

    io.to(user.roomId).emit("message", formatMessage(user.userName, msg));
  });

  // Runs when client disconnects
  socket.on("disconnect", () => {
    const user = userLeave(socket.id);

    if (user) {
      io.to(user.roomId).emit(
        "message",
        formatMessage(botName, `${user.userName} has left the room`)
      );

      // Send users and room info
      io.to(user.roomId).emit("roomUsers", {
        room: user.roomId,
        users: getRoomUsers(user.roomId)
      });
    }
  });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
