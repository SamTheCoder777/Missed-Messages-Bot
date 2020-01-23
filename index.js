// server.js
// where your node app starts

// init project
const http = require("http");
const express = require("express");
const app = express();

const config = require("./config.json");
var opus = require('opusscript');

app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
http.get("http;//$process.env.PROJECT_DOMAIN}.glitch.me/");
}, 280000);

const Discord = require("discord.js");
const client = new Discord.Client();
const delay = (msec) => new Promise((resolve) => setTimeout(resolve, msec));


client.on("ready", () => {
  console.log("I am Online\nI am Online");
  client.user.setActivity('Sam yelling at Erin for not play osu', { type: 'LISTENING' });
});



const prefix = "*";


client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === 'welcome');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}\nMake sure to read the <#668247820104630292> and have fun!\nP.S You will have a lot of missed messages!`);
});

client.on("message", async message => {
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let messageArray = message.content.split(" ");
  if(command === "mute"){
    const role = message.guild.roles.find(role => role.name === "Muted");
    let member = message.mentions.members.first();
    if(!message.member.roles.some(r=>["Admin"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");

    if(!member)
      return message.reply("Please mention a valid member of this server");
    
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    member.addRole(role);
    return message.reply(`${member.user} has been muted by ${message.author} because: ${reason}`)
  }
  if(command === "unmute"){
    const role = message.guild.roles.find(role => role.name === "Muted");
    let member = message.mentions.members.first();
    
        if(!message.member.roles.some(r=>["Admin"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");

    if(!member)
      return message.reply("Please mention a valid member of this server");
    
    member.removeRole(role);
    return message.reply(`${member.user} has been unmuted by ${message.author}. Please be nice next time!`)
  
  }
  
if(command ==="bd"){
  if(message.member.roles.some(r=>["Admin"].includes(r.name)) ){
        let channel = message.mentions.channels.first();
        let announcement = args.slice(1).join(" ");
        message.delete(10);
        channel.send(announcement);
  }
}
  
   if (message.author === client.user) return;
    if(command === "kick") {
    // This command must be limited to mods and admins. In this example we just hardcode the role names.
    // Please read on Array.some() to understand this bit: 
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
    if(!message.member.roles.some(r=>["Admin"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    
    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    // We can also support getting the member by ID, which would be args[0]
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable) 
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
      
     
     
    // slice(1) removes the first part, which here should be the user mention or ID
    // join(' ') takes all the various parts to make it a single string.
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
      
      member.send(`Sorry, you have been kicked due to: ${reason}`)
      await delay(100);
    // Now, time for a swift kick in the nuts!
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user} has been kicked by ${message.author} because: ${reason}`);

  }
     if (message.author === client.user) return;
    if(command === "ban") {
    // This command must be limited to mods and admins. In this example we just hardcode the role names.
    // Please read on Array.some() to understand this bit: 
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
    if(!message.member.roles.some(r=>["Admin"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    
    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    // We can also support getting the member by ID, which would be args[0]
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable) 
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");
    
    // slice(1) removes the first part, which here should be the user mention or ID
    // join(' ') takes all the various parts to make it a single string.
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
      member.send(`Sorry, you have been banned due to: ${reason}`)
      await delay(100);
    // Now, time for a swift kick in the nuts!
      
    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.reply(`${member.user} has been banned by ${message.author} because: ${reason}`);

  }

    if(command === "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
    if (message.content.startsWith(prefix + "help")) {
   let embed = new Discord.MessageEmbed()
   .setTitle('Help Page:')
   .setDescription('``ping``: returns with ping.\n``badgame``: returns with a trash game')
  .setColor('#275BF0')
  let fun = new Discord.MessageEmbed()
   .setTitle('Fun')
   .setDescription('``5amgamer``(without prefix) only for gamers)\n``Bevan``(without prefix) only for sad ppl)\n``Jello``(without prefix) pls do this manytimes as possible')
  .setColor('#275BF0')
    let mod = new Discord.MessageEmbed()
   .setTitle('Admin Commands')
   .setDescription('``kick <reason>``kicks the user with the provided reason\n``ban <reason>``bans the usser with the provided reason\n``bd <#channel> <message>``broadcasts to the the channel')
  .setColor('#275BF0')
   message.channel.send(embed)
  message.channel.send(fun)
  message.channel.send(mod)
  }
    if(message.content.startsWith("5amgamer")){
      return message.reply("5amgamer is an awesome gamer!!!");
    }
  if(message.content.startsWith("Jello")){
   message.channel.send(`I hope Erin plays osu with me someday -5amgamer-`)
    }
                                       
  if(message.content.startsWith("Bevan")){
      return message.reply("Bevan the lonely kiddo");
    }
  if (message.content.startsWith(prefix + "badgame")){
    var random = Math.round(Math.random() * 3);
    console.log(random);
   switch (random){
     case 1:
       return message.reply("Well, League of Legends is a bad game");
       break;
       
     case 2:
      return message.reply("Well, Fortnite is a bad game");
       break;
       
     case 3:
       return message.reply("Well, Roblox is a bad game");
       break;
   }
  }
  //avatar
  if (command === 'avatar') {
    var member = message.mentions.users.first();
    if(!member) 
      member = message.author;
    
    let embed = new Discord.MessageEmbed()
  .setImage(member.avatarURL())
  .setColor('#275BF0')
    message.channel.send(embed)
  }
});
//voice chat thing starats here

client.on('message', async message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  const ytdl = require("ytdl-core");
  if (!message.guild) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const fs = require('fs');
  if (command === "join") {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      // Create a dispatcher


connection.play(ytdl(
  'https://www.youtube.com/watch?v=P-uhgIzHYYo',
  { filter: 'audioonly' }));


    if(!message.member.voice.channel){
      message.reply('You need to join a voice channel first!');
    }
    
  }

  //voice thing
}
});

client.login(process.env.TOKEN);
