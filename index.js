// server.js
const express = require('express');
const passport = require('passport');
const cors = require("cors");
const cookieSession = require('cookie-session');
const passportSetUp = require("./passport")
const AuthRoute = require("./auth")

const app = express();
app.use(cors({
  origin:"http://localhost:3000",
  methods:"GET,POST,PUT,DELETE",
  credentials:true
}))

app.use(cookieSession({
  name: "sent",
  keys: ["Dev_Maya"],
  maxAge: 24 * 60 * 60 * 100, // 24 hours
  // secure: true, // Send cookies only over HTTPS
  // httpOnly: true, // Prevent client-side access to cookies
}));

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", AuthRoute)


app.get('/', (req, res) => {
  res.send('Welcome to your app!');
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
