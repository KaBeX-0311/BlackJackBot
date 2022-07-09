const Client = require("./Structure/Client");
const bot = new Client();
const {Token} = require('./config')

bot.start(Token)