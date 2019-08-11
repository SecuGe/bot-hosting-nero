const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NjA5NzgwOTM0MzU0NDAzMzM5.XVA-kQ.a4xa7DM9oDTTYM3Kfg5RyHP1rgE);//where BOT_TOKEN is the token of our bot 
