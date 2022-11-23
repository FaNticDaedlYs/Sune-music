const aoijs = require("aoi.js")
const app = require("./app.js")
const bot = new aoijs.AoiClient({
token: process.env.Token,
prefix: ".",
intents: ["GUILDS", "GUILD_MESSAGES"]
});

const loader = new aoijs.LoadCommands(bot);loader.load(bot.cmd,'./commands/')  

bot.onMessage()

bot.status({
  text: ".help",
  type: "WATCHING",
  status: "online",
  time: 5
})
//Command Example (ping)
bot.interactionCommand({
  name: "ping",
  prototype: 'slash',
  code: `$interactionReply[Pong! $pingms]`
})
bot.command({
  name: "ping",
  code: `Pong! $pingms`
})

bot.variables({
 prefix: "."
})

bot.command({
name: "help",
code: `$if[$message==]
here your basic help command (You can use embed functions or channelSendMessage function with embed-errors)
$elseIf[$toLowercase[$message[1]]==fun]
Here your Help fun command (same instructions as above xd)
$endelseIf
$else

$if[$commandInfo[$message[1];name]!=]
$title[Command $commandInfo[$message[1];name] info!]
$description[Info: $commandinfo[$message[1];info]
Usage: $replaceText[$commandInfo[$message[1];use];prefix;$getServerVar[prefix]]]
$endif

$onlyIf[$commandInfo[$message;name]!=;This command doesnt exist bruh :c]
$endif
`
})
