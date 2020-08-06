const users = [];
const rooms = {};

// Join user to chat
function userJoin(id, userName, roomId, packId, curr_pack, card_time) {
  var status = false;
  const user = { id, userName, roomId, status };
  users.push(user);
  if (!(roomId in rooms)) {
    rooms[roomId] = { packId, curr_pack, card_time };
  }

  return user;
}

// Get current user
function getCurrentUser(id) {
  return users.find(user => user.id === id);
}

// Get user based on room
function getRoomData(roomId) {
  return rooms[roomId];
}

function roomExists(roomId) {
  if (roomId in rooms) {
    return true;
  } else {
    return false;
  }
}

// ready users list
function readyUsers(id) {
  user = users.find(user => user.id === id);
  if ("status" in user) {
    if (user["status"]) {
      user["status"] = false;
    } else {
      user["status"] = true;
    }
  } else {
    user["status"] = true;
  }

  return user;
}

// check if all users are ready
function allUsersReady() {
  if (users.find(user => user.status === false)) {
    return false;
  } else {
    return true;
  }
}

// User leaves chat
function userLeave(id) {
  const index = users.findIndex(user => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
}

// Get room users
function getRoomUsers(roomId) {
  return users.filter(user => user.roomId === parseInt(roomId));
}

module.exports = {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers,
  getRoomData,
  roomExists,
  readyUsers,
  allUsersReady
};
