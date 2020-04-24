const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const axios = require("axios");

const port = process.env.PORT || 4001;

const app = express();

const server = http.createServer(app);

const io = socketIo(server);

let interval;

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("start realtimedata", () => {
    interval = setInterval(function () {
      getApiData().then((data) => {
        socket.emit("recieve realtimedata", data);
      });
    }, 1000000);
  });
  socket.on("onrefresh realtimedata", () => {
    getApiData().then((data) => {
      socket.emit("recieve realtimedata", data);
    });
  });
  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
});

const getApiData = () => {
  return axios
    .get(
      "http://apilayer.net/api/live?access_key=7d2183c7f639e4cef1bd782b26638014&currencies=INR&source=USD&format=1"
    )
    .then((response) => {
      console.log(response.data.quotes);
      return response.data.quotes;
    })
    .catch((error) => {
      console.log(error);
    });
};

server.listen(port, () => console.log(`Listening on port ${port}`));