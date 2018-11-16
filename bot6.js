const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
    client.user.setGame(`:) , الحيه حلوه , ❣ `,"http://twitch.tv/M3roof")
    client.user.setStatus("online")

});



client.login(process.env.BOT_TOKEN6);
