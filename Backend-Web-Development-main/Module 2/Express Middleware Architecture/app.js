const express = require("express");

const requestId = require("./middleware/requestId");
const logger = require("./middleware/logger");
const timing = require("./middleware/timing");

const postsRouter = require("./routes/posts");
const usersRouter = require("./routes/users");

const app = express();

app.use(express.json());

// Observability Shield
app.use(requestId);
app.use(logger);
app.use(timing);

// Routers
app.use("/posts", postsRouter);
app.use("/users", usersRouter);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

module.exports = app;