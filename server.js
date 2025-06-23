const express = require('express');
const sql = require('mssql');
const connectToDatabase = require('./db');
const app = express();
const path = require('path');
const User = require("./public/Models/User")
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const session = require("express-session");

// Set the view engine to EJS and the views directory 
app.set('view engine', 'ejs'); app.set('views', path.join(__dirname, 'view')); 

// Serve static files from the 'public' directory 
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
  secret: "your-secret-key",
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } // dùng false nếu đang chạy localhost
}));

const startApp = async () => {
  try {
    await connectToDatabase();

    console.log("✅ Kết nối MongoDB thành công");

    app.listen(3000, () => {
      console.log("🚀 Server đang chạy tại http://localhost:3000");
    });

  } catch (err) {
    console.error("❌ Kết nối MongoDB thất bại:", err);
  }
};

startApp();


// Route dang ky
app.get('/register', (req, res) => {
    try {
        res.render('register.ejs');
    } catch (err) {
        console.error("An error occurred", err);
        res.status(500).send("An error occurred while fetching data");
    }
});

app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existing = await User.findOne({ username });
    if (existing) {
      return res.render("register", { error: "Tên đăng nhập đã tồn tại" });
    }

    const hashed = await bcrypt.hash(password, 10);

    const newUser = new User({
        username,
        email,
        password: hashed
    });

    await newUser.save();
    res.redirect("/login");
  } catch (err) {
    console.log("Error register", err);
    res.render("register", {error : "An error occurred"});
  }
});

// Route dang nhap
app.get('/login', async (req, res) => {
    try {
        res.render('login.ejs');
    } catch (err) {
        console.error("An error occurred", err);
        res.status(500).send("An error occurred while fetching data");
    }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (!user) {
    return res.render("login", { error: "Tài khoản không tồn tại." });
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.render("login", { error: "Mật khẩu không đúng." });
  }

  req.session.userId = user._id;
  res.redirect("/");
});

// Route dashboard
app.get('/', async (req, res) => {
    try {
        res.render('dashboard.ejs');
    } catch (err) {
        console.error("An error occurred", err);
        res.status(500).send("An error occurred while fetching data");
    }
});

app.get('/quiz', async (req, res) => {
    try {
        res.render('quiz.ejs');
    } catch (err) {
        console.error("An error occurred", err);
        res.status(500).send("An error occurred while fetching data");
    }
});

