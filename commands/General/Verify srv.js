module.exports = [{
 name:"verify", 
 code:`$dm
 $title[VERIFICATION]
$color[#000000]
$thumbnail[https://images-ext-2.discordapp.net/external/6735T9wKLZbfLKRtVCAFMSuJS4kOINbDOMS6SCKWKPM/https/c.tenor.com/Mw__8SvDbi8AAAAM/checkmark-black.gif]
$description[1;To get access to all the channels in the server, click below to get Verified]
$footer[1;SFSdb]
$addSelectMenu[1;Verify1;Click Here;1;1;no;Verify:Click this to verify:gblK:no:<a:che:907854800018866177> ]
$addCmdReactions[<a:che:907854800018866177>]`
}, {
 name:"Verify1",
 type:"interaction", 
 prototype:"selectMenu", 
 code:`
$interactionDelete
$interactionReply[;{newEmbed:{title:Your Title}{description:You desk}{ephemeral:yes}{color:000000}}]
$onlyif[$interactionData[values[0]]==Costume trigger;]`
}]
