const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors");
const html =
	`<center><h1>403 Forbidden</h1></center>`;

const socket = require("socket.io")(server, {
	cors: {
		origin: "https://google.com",
		methods: ["GET", "POST"]
	}
});

app.use(cors());

const PORT = process.env.PORT || 7000;

app.get('/', (req, res) => {
	res.send(`${html}`);
});

socket.on("connection", (socket) => {
	socket.emit("me", socket.id);

	socket.on("disconnect", () => {
		socket.broadcast.emit("callEnded")
	});

	socket.on("callUser", ({ userToCall, signalData, from, name }) => {
		socket.to(userToCall).emit("callUser", { signal: signalData, from, name });
	});

	socket.on("answerCall", (data) => {
		socket.to(data.to).emit("callAccepted", data.signal)
	});
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
