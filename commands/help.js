/*
  Author: Keiney
  Website: keiney.com
  Version: 0.0.8
*/

const Discord = require('discord.js');

module.exports.run = async(client, message, args, prefix, lang) => {
  
 if(!args[0]){
  
  let embed = new Discord.MessageEmbed()
   .setTitle(client.user.username + ' Help :unicorn:', client.user.avatarURL())
   .setURL('https://keiney.com/documentation/')
   .addField('**Command Categories**', 
             '`hentai          :` Unavailable. Move to an NSFW channel to see this.\
             \n`boobs          :` Unavailable. Move to an NSFW channel to see this.\
             \n`blowjobs          :` Unavailable. Move to an NSFW channel to see this.\
             \n`asses          :` Unavailable. Move to an NSFW channel to see this.\
             \n`pussys          :` Unavailable. Move to an NSFW channel to see this.\
             \n\nTo see the content of the commands, type `k<category>`')
  .setFooter('Help requested by ' + message.author.username, message.author.avatarURL())

  if(message.channel.nsfw == false) return message.channel.send(embed)
    
  let nsfw = new Discord.MessageEmbed()
   .setTitle(client.user.username + ' Help :unicorn:', client.user.avatarURL())
   .setURL('https://keiney.com/documentation/')
   .addField('**Command Categories**', 
            '`hentai          :` With this command you will see images of hentai / anime, perfect for geeks.\
             \n`boobs          :` With this command you will see images of boobs, who does not like to see two round things move?\
             \n`blowjobs          :` With this command you will see images of blowjobs, i love those cum shots.\
             \n`asses          :` With this command you will see images of asses, possibly this command is my favorite...\
             \n`pussys          :` With this command you will see images of pussys, I love the muffins!\
             \n\nTo see the content of the commands, type `k<category>`')
  .setFooter('Help requested by ' + message.author.username, message.author.avatarURL())
  
  message.channel.send(nsfw)
  
    
  }
  if(args[0] == 'nsfw'){
    
  let nsfwArr = [];
    
  client.cmdhelp.filter(cmd => cmd.category == 'NSFW').forEach((cmd) => {nsfwArr.push(cmd.name)});
    
    if(message.channel.nsfw == false) return message.channel.send(':underage: <@'+message.author.id+'> tried to show X content on unauthorized channels, he is a thug!')
    
  let embed = new Discord.MessageEmbed()
   .setTitle(client.user.username + ' help :unicorn:', client.user.avatarURL())
   .setURL('https://keiney.com/documentation/')
   .addField('NSFW commands', '`'+nsfwArr.map(g => g).join(', ')+'`')
   
    
  }
  else{

    return
  }
}


exports.help = {
    name: 'help',
    aliases: ["info"],
    category: 'info',
    description: `Keiney will send you the list of commands in the channel you use it.`,
    usage: `help`
}