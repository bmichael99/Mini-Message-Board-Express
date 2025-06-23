// routes/authorRouter.js
const { Router } = require("express");

const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

//when the root url is visited, views/index.ejs template is rendered
indexRouter.get("/", (req, res) => {
  res.render("index", {title: "Mini Messageboard", messages: messages});
});

indexRouter.get("/new", (req,res) => {
  res.render("form");
});

indexRouter.post("/new", (req,res) => {
  console.log(req.body);
  const messageUser = req.body['message-author'];
  const messageText = req.body['message-text'];

  messages.push({text: messageText, user: messageUser, added: new Date()})
  
  res.redirect("/");
});

/*
indexRouter.get("/:indexId", (req, res) => {
  const { indexId } = req.params;
  res.send(`Index ID: ${indexId}`);
});
*/

module.exports = indexRouter;