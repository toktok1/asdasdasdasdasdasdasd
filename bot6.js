const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**5 invite = 25x Visa
10 invites = 50x Visa
15 invites = 3x Nitro
30 invites = 7x Nitro
50 invites = 15x Nitro
100 invites = 30x Nitro**
https://discord.gg/dnswQ8D
joined info-selfie
! Selfie.                              
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**5 invite = 25x Visa
10 invites = 50x Visa
15 invites = 3x Nitro
30 invites = 7x Nitro
50 invites = 15x Nitro
100 invites = 30x Nitro**
https://discord.gg/dnswQ8D
joined info-selfie
! Selfie.                              
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`) 
}).catch(console.error)
})








client.login(process.env.BOT_TOKEN6);
