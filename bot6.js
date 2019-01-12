const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**5 invite = 15x Visa
10 invites = 30x Visa
15 invites = 5x Nitro
30 invites = 10x Nitro
50 invites = 20x Nitro
100 invites = 40 Nitro**
https://discord.gg/dnswQ8D
joined info-اسم السيرفر
! اسم السيرفر.                              
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**5 invite = 15x Visa
10 invites = 30x Visa
15 invites = 5x Nitro
30 invites = 10x Nitro
50 invites = 20x Nitro
100 invites = 40 Nitro**
https://discord.gg/dnswQ8D
joined info-اسم السير
! اسم السيرفر.                              
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`) 
}).catch(console.error)
})


client.login(process.env.BOT_TOKEN6);
