/*
  Author: Keiney
  Website: keiney.com
  Version: 0.0.8
*/

const Discord = require('discord.js');

module.exports.run = async(client, message, args, gifs) => {
 
  if(message.channel.nsfw == false) return message.channel.send(':underage: <@'+message.author.id+'> tried to show X content on unauthorized channels, he is a thug!')
  
    const embed = new Discord.MessageEmbed()
    .setTitle('<:keiney:725358481602904064> GIF | ' + client.user.username, client.user.avatarURL())
    .setURL('https://keiney.com/')
    .setColor(0xf7a7ff)
    .setImage(gifs.hentai());
   message.channel.send(embed);

}

exports.help = {
    name: "hentai",
    aliases: ['anime'],
    category: "NSFW",
    description: "",
    usage: "hentai"
  };