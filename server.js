const express = require("express");
const rateLimitMiddleware = require("./middlewares/ratelimit");
const app = express();

//uncomment this for apply rateLimitMiddleware on all APIs
//app.use(rateLimitMiddleware);

app.get("/api/welcome", (req, res) => {
  res.send({
    success: true,
    message: "Welcome to API Rate Limiter Assignment",
  });
});

app.get("/api/notification", rateLimitMiddleware, (req, res) => {
  res.send({
    success: true,
    sender: "X,Y,Z",
    receiver: "CYUZUZO",
    message: "Your package has been well delivered...",
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});