module.exports = [{
name:"register", 
$if:"v4", 
code:`$title[1;register]
$color[1;RANDOM]
$deleteIn[15s]
$thumbnail[1;https://media.discordapp.net/attachments/936466122721603617/942367331613560832/images.jpeg]
$description[1;To get access to all the channels in the server, click below to get Verified]
$footer[1;follow this registration so that you enter my database]
$addSelectMenu[1;testO;Click Here;1;1;no;verify:Click this to verify:gblK:no:✅]`
}, {
name:"testO", 
type:"interaction", 
prototype:"selectMenu", 
code:`
$interactionDelete
$wait[25s]
$interactionReply[;{newEmbed:{title:Verify}{description:💡 - Guide
its very simple The first thing you have to do is read our rules and accept us}]`
}]