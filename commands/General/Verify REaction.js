module.exports = ({
  name: "Verify1",
  prototype: "selectMenu", 
  code: `
  $interactionUpdate[A option's response.;;{actionRow:{selectMenu:Verify1:Menu has been disabled:1:1:yes:{selectMenuOptions:This won't show up:helpValue0:Either this.:false}{selectMenuOptions:This won't show up either.:helpValue1:cause menu disabled.:false}}}]

  $onlyIf[$interactionData[values[0]]==0;]
  `
})
