const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("the bot is up!");
})

app.get("/", (req, res) => {
  res.send("hello");
})

const Discord = require("discord.js");
const client = new Discord.Client({inents: ["GUILDS", "GUILD_MESSAGES"]});

client.on("message", message => {
  if(message.content === "ping") {
    message.channel.send("pong!")
  }
})

client.login(process.env.token)
