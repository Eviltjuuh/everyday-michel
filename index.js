const Discord = require('discord.js');
const bot = new Discord.Client();


const PREFIX = 'em!';

bot.on('ready', () =>{
    console.log('De EM-Bot is online!');
    bot.user.setActivity('em!help', { type: 'LISTENING'}).catch(console.error);
})

bot.on('guildmemberAdd', member =>{

    const channel = member.guild.channel.find(channel => channel.name === "welcome");
    if(!channel) return;

    channel.send(`Welcome to our server, ${member}, please read the rules in the rules channel`)
});

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'youtube':
            message.channel.send('Ga voor EM-Youtube naar: https://www.youtube.com/channel/UCg65SFMWAMiBkqVynRenIlA')
            break;
        case 'twitch':
            message.channel.send('Ga voor EM-Twitch naar: https://www.twitch.tv/Eviltjuuh')
            break;
        case 'instagram':
            message.channel.send('Ga voor EM-Instagram naar: https://www.instagram.com/everyday_michel')
            break;
        case 'twitter':
            message.channel.send('Ga voor Michel Twitter naar: https://twitter.com/eviltjuuh')
            break;
        case 'discord':
            message.channel.send('Jij wil graag de Discord invite link? https://discord.io/everydaymichel Alsjeblieft!')
            break;
        case 'help':
            message.channel.send('Welkom bij EM Help, dit zijn de commands die beschikbaar zijn: youtube, twitch, instagram, twitter, discord . Gebruik wel em!')
            break;
            
    }
})


bot.login(process.env.Token);