/*
  Author: Keiney
  Website: keiney.com
  Version: 0.0.8
*/

//________________________________________________________________________________________________________________________________________

const Discord = require("discord.js");
const client = new Discord.Client({ disableEveryone: true });
const fs = require("fs");

//________________________________________________________________________________________________________________________________________

const {TOKEN, prefix} = require('./config.json');
let tools = require('./database/gifs.js')


client.commands = new Discord.Collection();
client.cmdhelp = new Discord.Collection();
client.aliases = new Discord.Collection();

//________________________________________________________________________________________________________________________________________

client.on("ready", async() => {
  
  function end() {
    let elementos = [
        "type khelp",
        "v0.0.8",
        ""+client.guilds.cache.size.toLocaleString()+" servers with "+client.users.cache.size.toLocaleString()+" users in total"];

    client.user.setPresence({
      status: "online",
      activity: {
        name: elementos[Math.floor(elementos.length * Math.random())],
        type: "PLAYING"
      }
    
    });
  }
  setInterval(end, 60000);
  console.log(
    `[!] Keiney has been released on ${client.guilds.cache.size} servers with ${client.users.cache.size} users in total.`
  );
});

//________________________________________________________________________________________________________________________________________

 fs.readdir('./commands/', (err, files) => {
        if(err) console.error(err);

        let jsFiles = files.filter(f => f.split('.').pop() === 'js');

        jsFiles.forEach((f, i) => {
            delete require.cache[require.resolve(`./commands/${ f }`)];
            let pull = require(`./commands/${ f }`);
            console.log('[LOG] Loading string: ' + f);
            client.commands.set(pull.help.name, pull);
            client.cmdhelp.set(pull.help.name, pull.help);
            pull.help.aliases.forEach(alias =>{
                client.aliases.set(alias, pull.help.name)
            })
        });
    });

//________________________________________________________________________________________________________________________________________
 
 client.on("error", error => {
  console.log(`[ERROR] ${error}`);
});
 
client.on('message', async message => {

 if (message.channel.type == "dm" || message.author.bot) return;

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0].toLowerCase();
  let args = messageArray.slice(1);

  if (!message.content.startsWith(prefix)) return;

  let command =
    client.commands.get(cmd.slice(prefix.length)) ||
    client.commands.get(client.aliases.get(cmd.slice(prefix.length)));

  if (command) {
    command.run(client, message, args, tools);
    console.log(
      `[${message.guild.name}/#${message.channel.name}] ${message.author.tag} (${message.author.id}): ${command.help.name}`
    );
  }
});

client.login(TOKEN);