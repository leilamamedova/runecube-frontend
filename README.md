# RuneCube

RuneCube is a React App / Game.

## Installation

Clone the repo and run on your terminal

```bash
npm install
```

## Technologies Used

- Socket IO (WebSocket Connection)
- Zustand (Store Management)
- Axios (Http requests)

# List of Socket Events

> Connection related:

- _game_started_
- _start_game_
- _ongoing_game_
- _user_reconnected_
- _choose_player_

---

> Game Logic related:

- _update_rune_
- _change_side_
- _finish_game_
- _finish_message_
- _open_map_

---

#### Connection Events

### Event: _choose_player_

```javascript
socket.emit("choose_player", {
  username: username,
  role: roles,
  sid: socket.id,
});
```

This event always requires an object consisting username,role and socket id.

#### Response:

```javascript
socket.on("choose_player", (response) => {
  //Code here
});
```

Response is an array with 2 elements. 2nd element being Error message string. 1st element being the boolean value which will decide if you can continue or not. E.g if role is not chosen or already chosen by another user, you will get
**false**

### Event: _ongoing_game_

```javascript
socket.on("ongoing_game", function (data) {
  if (data) {
    //Code here
  }
});
```

Variable **data** is boolean

### Event: _user_reconnected_

```javascript
socket.emit("user_reconnected", {
  username: username,
  role: roles,
  sid: socket.id,
});
```

For sending the user data to backend. On Connection and also whenever reconnection happens.

### Event: _game_started_

```javascript
socket.emit("game_started");
```

#### Response

```javascript
socket.on("game_started", (response) => {
  //Code Here
});
```

Response is **boolean** value. This event handles if user can start the game

### Event: _start_game_

```javascript
socket.emit("start_game");
```

#### Response

```javascript
socket.on("start_game", (response) => {
  setRuneData(response[0]);
  setGameData(response[1]);
  setLoading(false);
});
```

Response is an array. 1st element is object containing Rune value and color. 2nd element is object containing Side Count, Side Timer, Max Response Time.

---

#### Game Logic Events

> Cube has 6 sides. The Game content spawns on one random side of it. By rotating the Cube users needs to find the content. Content is: **Rune** _(color and shape)._ **Side Timer** _(how much time should it take to solve this side)._

### Event _side_time_

```javascript
socket.emit("side_time", (response) => {
  setRuneCount(response[0]);
  setNewRune(response[1]);
});
```

Timer is on Client Side. On every tick we send time to backend, it checks and sends us response with data.

### Event _change_side_

```javascript
socket.on("change_side", (response) => {
  reset();
  //Other code like shuffling the cube
});
```

Receiving this event means we need to side has been changed and we need to reset , shuffle or other logic.

### Event _rune_time_

```javascript
socket.emit('rune_time', (response) => {
 console.log('rune_time', response);
 setRuneCount(response[0])
 setNewRune(response[1])
}
```

Same as side_time event.

### Event _update_rune_

```javascript
socket.on("update_rune", (response) => {
  reset();
});
```

Listening for the rune update is crucial as well. Whenever it happens we need to reset.

### Event _finish_game_

```javascript
socket.on("finish_game", (response) => {
  if (response) {
    alert(`Your partner left the game`);
    navigate("/leaderboard");
  }
  navigate("/leaderboard");
});
```

Whenever we the game is finished or user disonnected and we never reconnected game ends.

### Event _open_map_

```javascript
socket.on("open_map", (response) => {
  setMazeSide(response);
  setTotalCount(response);
});
```

Because backend has the game logic going on there, if we need to unlock the map, it emits an event.

## Project Status

#### Runecube is a prototype and still under development.

## Contributing

#### Feel free to get involved.
