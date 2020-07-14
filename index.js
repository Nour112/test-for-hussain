const express = require("express");
const app = express();

app.listen(() => console.log("Server started"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});


const Discord = require('discord.js');
const client = new Discord.Client();
const cmd = require("node-cmd");
const ms = require("ms");
const fs = require('fs');
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const simpleytapi = require('simple-youtube-api')
const util = require("util")
const gif = require("gif-search");
const jimp = require("jimp");
const guild = require('guild');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const pretty = require("pretty-ms");
const moment = require('moment');
const request = require('request');
const dateFormat = require('dateformat');
////////////



const prefix = "#"
const developers = "609061229746585610"




 //كود للتجربة







// توكن البوت

// الاختصار المستخدم في الاوامر

// نشاط البوت
var activity = prefix + "!";
// حالة البوت
var status = "online";
/**
* @param {Discord.Message} message The received message
*/
async function onMessage(message)
{
	try
	{
		if (message.content.startsWith(prefix))
		{
			var arg_index = message.content.indexOf(' ');
			var command = message.content.slice(prefix.length);
			if(arg_index > 0) // != -1
				command = command.substr(0, arg_index - 1);
			const text = message.content.substr(arg_index + 1);
			switch(command)
			{
				case "Mhd-new-video":
					if(message.member.hasPermission(Discord.Permissions.ALL))
					{
						
						message.reply("https://youtu.be/z8pfTXoCuSI");
					}
					else
					{
						message.reply("https://www.youtube.com/watch?v=z8pfTXoCuSI");
						message.author.send().catch(() =>
						{
						
							message.channel.areply("I couldn't send a direct message to you.. so I'll send you help here.")
						});
					}
				break;
				case "msgall":
					if(message.member.hasPermission(Discord.Permissions.ALL))
					{
						message.reply('Copy that!');
						let members = await message.guild.members.fetch();
						var sentsuccess = 0;
						var bots = 0;
						var msg = "";
						members.forEach(member =>
						{
							try
							{
								if(!member.user.bot)
								{
									++sentsuccess;
									member.send(text).catch(() =>
									{
										//console.log("Couldn't send message to " + member.displayName);
										//msg += member.displayName;
										//message.channel.send(member.displayName);
										--sentsuccess;
									})(sentsuccess);
								}
								else
									++bots;
							}catch(exception)
							{
								console.log(exception);
							}
						});
						message.channel.send("Done, sir. Sent " + sentsuccess + "/" + (message.guild.memberCount - bots) + ".");
					}
					else
					{
						message.reply("Sorry, you're not allowed to command me that.");
					}
				break;
				case 'play':
				break;
			}
		}
	}catch(exception)
	{
		console.log("Exception Handled " + exception);
		message.channel.send("**Exception Handled**\n```js" + exception + "```");
	}
}
function onClientReady()
{
	console.log('Ready!');
	// Set the client user's presence
	client.user.setPresence({ activity: { name: activity }, status: status }).then(console.log).catch(console.error);

}
// Events
client.on("message", onMessage);   // On User Sending Message
client.on('ready', onClientReady); // On Bot Start



client.on("message", message => {
    var prefix = "#";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
 
        var msg;
        msg = parseInt();
  if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply('⚠ | **ليس لديك صلاحيات**');      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "تم حذف الرسائل",
        color: 0xe97fff,
        description: "Made By Nour Ihap",
        footer: {
          text: "The Smart Helper"
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});



client.on("message", message => {
    if (message.author.bot) return;
   
    let command = message.content.split(" ")[0];
   
    if (command === "#unmute") {
          if (!message.member.hasPermission('KICK_MEMBERS')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'mute-log');
    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
    if (!muteRole) return message.reply("**I can't Find Role `Muted`**").catch(console.error);
    if (message.mentions.users.size < 1) return message.reply('**Example #unmute @dream#0007').catch(console.error);
    const embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTimestamp()
      .addField('الأستعمال:', 'Mute/unmute')
      .addField('تم فك الميوت عن:', `${user.username}#${user.discriminator} (${user.id})`)
      .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
 
    if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);
 
    if (message.guild.member(user).removeRole(muteRole.id)) {
  return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
  } else {
      message.guild.member(user).removeRole(muteRole).then(() => {
  return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
  });
    }
 
  };
 
  });
 
client.on("message", message => {
    if (message.author.bot) return;
   
    let command = message.content.split(" ")[0];
   
    if (command === "#mute") {
          if (!message.member.hasPermission('KICK_MEMBERS')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'mute-log');
    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
    if (!muteRole) return message.reply("**I can't Find Role `Muted`**").catch(console.error);
    if (message.mentions.users.size < 1) return message.reply('**Example -mute @dream#0007**').catch(console.error);
   
    const embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTimestamp()
      .addField('الأستعمال:', 'Mute/unmute')
      .addField('تم ميوت:', `${user.username}#${user.discriminator} (${user.id})`)
      .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
     
     if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);
   
    if (message.guild.member(user).roles.has(muteRole.id)) {
  return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت**").catch(console.error);
  } else {
      message.guild.member(user).addRole(muteRole).then(() => {
  return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت بنجاح**").catch(console.error);
  });
    }
 
  };
 
  });



client.on('message', message => {
     if (message.content === "#server") {
              if (!message.guild) return;

       var verificationLevel = message.guild.verificationLevel;
       const verificationLevels = ['None','Low','Medium','High','Extreme'];
       var year = message.guild.createdAt.getFullYear()
       var month = message.guild.createdAt.getMonth()
       var day = message.guild.createdAt.getDate()
       const embed = new Discord.RichEmbed()
       .addField("**:id: Server ID**:",`**${message.guild.id} **`)
       .addField("**:crown:Server Owner**:",`** ${message.guild.owner.user.username}#${message.guild.owner.user.discriminator} **`)
       .addField("**MemberCount**:",`** [ ${message.guild.memberCount} ] **`)
       .addField("**Region**:",`**[ ${message.guild.region} ]**`)
       .addField("**verificationLevel**:",` ** ${verificationLevels[message.guild.verificationLevel]} ** `)
       .addField("**Channle:**",`** ${message.guild.channels.filter(ch => ch.type === 'text').size} Text, ${message.guild.channels.filter(ch => ch.type === 'voice').size} Voice **`)
       .addField("**AFK Room**:",`**${message.guild.afkChannelID ? `<#${message.guild.afkChannelID}> after ${message.guild.afkTimeout / 60}min` : 'None.'}**`)
       .addField("**Roles**:",`** ${message.guild.roles.size} **`)
       .addField('**Created IN**: ' ,year + "-"+ month +"-"+ day)
       .setFooter("To Show Roles Type (#roles)")
       .setColor('RANDOM')
   message.channel.sendEmbed(embed)
} 
});



client.on('message', message => {
    if(message.content.startsWith(prefix + 'avatar')) {
        var mentionned = message.mentions.users.first();
          var getvalueof;
          var bot;
          if(mentionned) {
            getvalueof = mentionned;
          } else {
            getvalueof = message.author;
          }
          let avatar = new Discord.RichEmbed()
          .setTitle(`${getvalueof.username}\'s Avatar`)
          .setImage(`${getvalueof.avatarURL}`);
          message.channel.sendEmbed(avatar);
      }
});


    client.on('message', message => {
     if (message.content === "#id") {
     let embed = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)  
  .setAuthor(message.author.username)
  .setDescription("معلومات عن الحــساب")
               .setFooter(`RT bot.`, 'https://cdn.discordapp.com/icons/319074966374973451/0e8fac184a52e77e052f79fe85f564b3.jpg?size=128')
  .setColor("RANDOM")
  .addField("اســـم الحســاب", `${message.author.username}`)
  .addField('كود الحساب الخاص', message.author.discriminator)
  .addField("الرقـــم الشـــخصي", message.author.id)
  .addField('بــــوت', message.author.bot)
  .addField("تاريخ التسجيل", message.author.createdAt)
     
     
  message.channel.sendEmbed(embed);
    }
});












client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose:  اهلا بيك انشاء الله يعجبك السيرفر:rose: 
:crown:اسم العضو  ${member}:crown:  
انت العضو رقم ${member.guild.memberCount} `) 
}).catch(console.error)
})














client.on('message', async message => {
if(message.content.startsWith("شكرا ليك يا بوت")) {
  let i = client.users.size;
  message.channel.send("العفو")
}
})




client.on('message', async message => {
if(message.content.startsWith("انت بوت ذكي")) {
  let i = client.users.size;
  message.channel.send("انت اذكي")
}
})





client.on('message', async message => {
if(message.content.startsWith("#Angery-Mhd")) {
  let i = client.users.size;
  message.channel.send("https://cdn.discordapp.com/attachments/720438606413561890/725303123564036106/My_Video.gif")
}
})




client.on('message', async message => {
if(message.content.startsWith("صباح الخير يا بوت")) {
  let i = client.users.size;
  if(message.author.id !== '609061229746585610') return message.channel.send('صباح الخير ');
  message.channel.send("صباح الخير يا مبرمج انشاء الله هتضيف اوامر جديدة النهاردة")
}
})





client.on('message', async message => {
if(message.content.startsWith("صباح الخير يا بوت")) {
  let i = client.users.size;
  if(message.author.id !== '613344684898516992') return message.channel.send('');
  message.channel.send(" يا صاحب السيرفر شكراا ليك علي افضل سيرفر")
}
})




client.on('message', async message => {
if(message.content.startsWith("صباح الخير يا بوت")) {
  let i = client.users.size;
  if(message.author.id !== '521147868372008971') return message.channel.send('');
  message.channel.send("صباح الخير يا صاحب السيرفر شكراا ليك علي افضل سيرفر")
}
})




client.on('message', async message => {
if(message.content.startsWith("#iam-mhd")) {
  let i = client.users.size;
  if(message.author.id !== '521147868372008971') return message.channel.send('');
  message.channel.send("اذا انت فعلا Mhd ما هو اسم قناتك")
}
})



client.on('message', async message => {
if(message.content.startsWith("Mhd")) {
  let i = client.users.size;
  if(message.author.id !== '521147868372008971') return message.channel.send('');
  message.channel.send("حسنا مو هو الايميل والباسورد الخاص بقنتك في اليوتيوب   هذه فقط اجرائات امنيه صدقني لن تتهكر قناتك")
}
})





client.on('message', async message => {
if(message.content.startsWith("sorry")) {
  let i = client.users.size;
 
  message.channel.send("اعتذر يا Mhd لقد تأكدت انك Mhd")
}
})




client.on('message', async message => {
if(message.content.startsWith("اوكي")) {
  let i = client.users.size;
  message.channel.send(":thumbsup:")
}
})





client.on('message', async message => {
if(message.content.startsWith(prefix + "mhd")) {
  let i = client.users.size;
  message.channel.send("https://cdn.discordapp.com/attachments/724604983521050635/725049198109786225/MHD.png")
}
})






////////////////////[ قفل الشات ]////////////////////
client.on('message', luxy => {
       if(luxy.content === prefix + "mc" || luxy.content === "#lock") {
                           if(!luxy.channel.guild) return luxy.reply(':white_check_mark: **This command only for servers**');
 
   if(!luxy.member.hasPermission('MANAGE_MESSAGES')) return luxy.reply('ليس لديك صلاحيات لقفل الشات')
              luxy.channel.overwritePermissions(luxy.guild.id, {
            SEND_MESSAGES: false
 
              }).then(() => {
                  luxy.reply("تم قفل الشات")
              });
                }
////////////////////[ فتح الشات ]////////////////////
    if(luxy.content === prefix + "uc" || luxy.content === "#unlock") {
                        if(!luxy.channel.guild) return luxy.reply(':white_check_mark: **This command only for servers**');
 
   if(!luxy.member.hasPermission('MANAGE_MESSAGES')) return luxy.reply('ليس لديك صلاحيات لفتح الشات');
              luxy.channel.overwritePermissions(luxy.guild.id, {
            SEND_MESSAGES: true
 
              }).then(() => {
                  luxy.reply("تم فتح الشات")
              });
    }
    });


client









  
client.on('message', message => {
  if (message.content.startsWith("#bot-info")) {
  message.channel.send({
  embed: new Discord.RichEmbed()
     .setAuthor(client.user.username,client.user.avatarURL)
     .setThumbnail(client.user.avatarURL)
     .setColor('RANDOM')
     .setTitle('``INFO  هاذا البوت مصمم ليسهل عليك اشياء كثيرة ويحسن تجربتك في السيرفر`` ')
     .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
     .addField('``servers``', [client.guilds.size], true)
     .addField('``channels``' , `[ ${client.channels.size} ]` , true)
     .addField('``Users``' ,`[ ${client.users.size} ]` , true)
     .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
     .addField('``My ID``' , `[ ${client.user.id} ]` , true)
           .addField('``My Prefix``' , `[ # ]` , true)
           .addField('``My Language``' , `[ JavaScript ]` , true)
           .addField('``Bot Version``' , `[ v0.1 ]` , true)
           .setFooter('By --> || Nour Ihap ||')
  })
  }
  });












client.on('message', message => {
     if (message.content === "#creator") {
if(message.author.id !== '609061229746585610') return message.channel.send('');
 let embed = new Discord.RichEmbed()
  .setDescription("اهلا يا مبرمج انت الاذكي في العالم كله ||انت افضل مبرمج في التاريخ  :blush:|| ")
  .setColor('RANDOM')
     
  message.channel.sendEmbed(embed);
    }
});





client.on('message', async message => {
if(message.content.startsWith("صباح الخير يا بوت")) {
  let i = client.users.size;
  message.channel.send("صباح الخير يا مبرمج انشاء الله هتضيف اوامر جديدة النهاردة")
}
})







client.on('message', message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;

    var messages = message.content.split(" ").slice(1);

    let args = messages.slice(1); 

    var prefix = "#";
    if(message.content.startsWith(prefix+'report')){
        let msg = message;


        if(message.guild.member(message.author).roles.get(msg.guild.roles.find(role => role.name === `banned_report`))) return message.reply('**لقد تم حظرك لا يمكنك ابلاغ احد**').then(m => {m.delete(3000)}); //لو حد عنده هل رتبة ما رح يقدر يسوي ريبورت 

        var reports_channel = message.guild.channels.find('name', 'البلاغات') // اسم الروم الي تجيه الريبورتات

        if(!reports_channel) return message.reply('**I cant find reports room.**').then(m => {m.delete(3000)});
        
        var mention = message.mentions.users.first();
        
        if(!mention) return message.reply('**الرجاء منشنه الشخص المراد الابلاغ عنه**').then(m => {m.delete(3000)});

        if(mention.id == message.author.id) return message.reply('**لا تستطيع الابلاغ عن نفسك**').then(m => {m.delete(3000)});
        
        if(message.guild.member(mention).hasPermission("MANAGE_MESSAGES")) return message.reply('**لا يمكنك الابلاغ عن هذا الشخص**').then(m => {m.delete(3000)}) //لو شخص عنده هل برمشن ماحد رح يقدر يسويله ريبورت
        
        if(mention.id == message.guild.owner.id) return message.reply('**لا يمكنك الابلاغ عن هذا الشخص انه من الادارة**').then(m => {m.delete(3000)});


        var reason = args.join(" ");

        if(!reason) return message.reply('**Please, specify a reason.**').then(m => {m.delete(3000)});
        var embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(`NEW REPORT`)
        .setThumbnail(message.author.avatarURL)
        .addField('**Reporter Name: **', `<@${message.author.id}> ID [ ${message.author.id} ]`, true)
        .addField('**ReportedUser Name: **', `${mention} ID [ ${mention.id} ]`, true)
        .addField('**Time** ', `[ ${moment(message.createdAt).format('D/MM/YYYY h:mm a')} ]`, true)
        .addField('**reason: **', `[ ${reason} ]`, true)
        .addField('**Channel: **', `${message.channel}`, true)
        reports_channel.send(embed)
        message.channel.send('**تم البلاغ, نشكرك على  مساعدتنا**').then(message => {message.delete(3000)});
    }
});












client.on("message", async message => {//الفا كودز Shady Craft YT#4176
  if (message.content.startsWith(prefix + "crem")) {//الفا كودز 
message.guild.createEmoji(`https://cdn.discordapp.com/emojis/694579706842054737.png` , `hi`)
message.channel.send("تم انشاء الاموجي ")//Shady Craft YT#4176
}//Shady Craft YT#4176
});//Shady Craft YT#4176
//Shady Craft YT#4176





//==============================<آعطاء معلومات عن سيرفر عن طريق الاي دي>===========================

client.on("message", message => {
  let command = message.content.split(" ")[0];
  if (command == prefix + "moreinfo") {
    var server = client.guilds.find(
      c => c.id === message.content.split(" ")[1]
    );//by ${ ! YamanSaleh }| Myame [🍇]#1282
    if (!server)
      return message.channel.send("**I Can't find this server :x:**");
    message.channel.send(
      new Discord.RichEmbed()
        .setColor("#36393e")
        .setTitle(`📖 **${server.name}** Info`)
        .setImage(
          `https://cdn.discordapp.com/icons/${server.id}/${server.icon}.png?size=1024`
        )//by ${ ! YamanSaleh }| Myame [🍇]#1282
        .addField(
          "**Members Cout:**",
          `**${server.memberCount -
            server.members.filter(m => m.user.bot).size}** | **${
            server.members.filter(m => m.user.bot).size
          }** bots`,
          true
        )
        .addField(
          `**Channels [${server.channels.size}]**`,
          `**${
            server.channels.filter(m => m.type === "text").size
          }** Text | **${
            server.channels.filter(m => m.type === "voice").size
          }** Voice | **${
            server.channels.filter(m => m.type === "category").size
          }** Category`,
          true
        )
        .addField("**Server Region:**", server.region, true)
        .addField("**Server Owner**", `**${server.owner}**`, true)
        .addField(`**Roles Count [${server.roles.size}]**`, `** **`, true)
        .addField(
          `**verification Level [ ${server.verificationLevel} ]**`,
          `** **`,
          true
        )
    );//by ${ ! YamanSaleh }| Myame [🍇]#1282
  }
});//alpha-codes








client.on('message', message => {
if (message.author.bot) return;
  let args = message.content.split(" ");
 
  let command = args[0];
 
  let user = message.mentions.users.first();
 
  let bantime = args[2];
   
  let reasonban = message.content.split(" ").slice(3).join(" ");
   
  let timefilter;
 
  if (command == prefix + "ban") {
     
    if(!message.channel.guild){
    message.channel.send("**لا يمكن استعمال هذا الأمر في الخاص**");
}
    if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) {
        message.channel.send("**يجب ان يكون لديك خاصية `BAN_MEMBERS`**");
    }
    if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
        message.channel.send("**البوت لا يمتلك خاصية `BAN_MEMBERS`**");
    }
   
    if (!user){
        message.channel.send("**يجب عليك إختيار الشخص المراد حظره**");
    }else if (!bantime){
        message.channel.send(`**
        يجب عليك اختيار وقت الحظر
        15m حظر ربع ساعه
        30m حظر نصف ساعه
        1h حظر ساعه
        3h حظر ثلاث ساعات
        1d حظر يوم كامل
        3d حظر ثلاث ايام
        1w حظر اسبوع
        1mon حظر شهر كامل
        **`);
    }else if (!reasonban){
        message.channel.send("**يجب عليك إدراج سبب الحظر**");
    }
    if (message.guild.member(user).hasPermission("BAN_MEMBERS")){
    message.channel.send("**لا يمكن طرد هذا الشخص , فهو من الإدارة**");
    } else {
// By Alpha Codes - AboKhalil 26/7/2019
    if (bantime = "15m") {
    timefilter = 150000;
    } else if (bantime = "30m") {
        timefilter = 300000;
    } else if (bantime = "1h") {
        timefilter = 600000;
    } else if (bantime = "3h") {
        timefilter = 1800000;
    } else if (bantime = "1d") {
        timefilter = 14400000;
    } else if (bantime = "3d") {
        timefilter = 43200000;
    } else if (bantime = "1w") {
        timefilter = 100800000;
    } else if (bantime = "1mon"){
        timefilter = 432000000;
    }
    message.guild.member(user).ban()
    message.channel.send("**The Member Was Banned **" + user.tag + " **By** : " + message.author.tag);
    message.channel.send("**Reason : __" + reasonban + "__**");
   
    user.send("**You are Banned By** : " + message.author.tag);
    user.send("**Reason : __" + reasonban + "__**");
setTimeout(() => {
 
  message.guild.unban('bannedman');
 
        }, timefilter);
    }
 }
 // By Alpha Codes - AboKhalil 26/7/2019
});







 
 
 






client.on("message", message => {
    var args = message.content.split(" ");
    var command = args[0];
    var romname = args[1];
    var spacefilter = args[2];
    
    if (command === prefix + "creatroom") {
        if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) {
            message.channel.send("**يجب ان يكون لديك خاصية `MANAGE_CHANNELS`**");
        } else if (!romname) {
            message.channel.send("يجب عليك إدراج اسم الروم !");
        } else if (spacefilter) {
            message.channel.send("لا يمكن وضع مسافة في اسم الروم !");
        } else {
            
            message.channel.send(`**
 🇦 لإنشاء روم كتابي
 🇧 لإنشاء روم صوتي
    **`).then(msg => {
   
            msg.react('🇦')
            msg.react('🇧')
           
    let textFilter = (reaction, man) => reaction.emoji.name === '🇦' && man.id === message.author.id;
    let voiceFilter = (reaction, man) => reaction.emoji.name === '🇧' && man.id === message.author.id;
   
    let reactiona = msg.createReactionCollector(textFilter, { time: 20000});
    let reactionb = msg.createReactionCollector(voiceFilter, { time: 20000});
   
    reactiona.on('collect', r => {
        msg.delete();
        message.guild.createChannel(romname, 'text')
        message.channel.send("**Done !** #");
 })
       
    reactionb.on('collect', r => {
        msg.delete();
        message.guild.createChannel(romname, 'voice')
        message.channel.send("**Done !**");
        })  
      })
        }
    }
});







client.on('message', message => {
if (message.content.startsWith('#members')) { 
    let pages = [`**Members info 
:green_heart: online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
:heart:  offline:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
:yellow_heart:  idle:     ${message.guild.members.filter(m=>m.presence.status == 'idle').size}
:diamond_shape_with_a_dot_inside:   membersCount:  ${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size}
:bulb: bots: ${message.guild.members.filter(m=>m.user.bot).size} **
`,` **معلومات عن اعضاء
:green_heart: المتواجدين :   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
:heart:  الخاملين :       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
:yellow_heart:  مشغولين :     ${message.guild.members.filter(m=>m.presence.status == 'idle').size}
:diamond_shape_with_a_dot_inside:   عدد اعضاء :  ${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size}
:bulb: عدد البوتات : ${message.guild.members.filter(m=>m.user.bot).size} ** `]
    let page = 1;

    let alpha = new Discord.RichEmbed()
    .setColor('RANDOM')
	            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
    .setFooter(`Page ${page} of ${pages.length}`)
    .setDescription(pages[page-1])

    message.author.sendEmbed(alpha).then(msg => {

        msg.react('◀').then( r => {
            msg.react('▶')


        const backwordsFilters = (reaction, user) => reaction.emoji.name === '◀' && user.id === message.author.id;
        const forwordsFilters = (reaction, user) => reaction.emoji.name === '▶' && user.id === message.author.id;


        const backwords = msg.createReactionCollector(backwardsFilter, { time: 20000000});
        const forwords = msg.createReactionCollector(forwardsFilter, { time: 20000000});



        backwords.on('collect', r => {
            if (page === 1) return;
            page--;
            alpha.setDescription(pages[page-1]);
            alpha.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(alpha)
        })
        forwords.on('collect', r => {
            if (page === pages.length) return;
            page++;
            alpha.setDescription(pages[page-1]);
            alpha.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(alpha)
        })
        })
    })
    }
});


client.on('guildMemberUpdate', (alpha, kemzo,) => {//!Gr » Kemzo ➹♔#4670
if(alpha.roles.size < kemzo.roles.size) {//!Gr » Kemzo ➹♔#4670
 let role = kemzo.roles.filter(r => !alpha.roles.has(r.id)).first();//!Gr » Kemzo ➹♔#4670
            let embed = new Discord.RichEmbed()//!Gr » Kemzo ➹♔#4670
            .setThumbnail(alpha.guild.iconURL)//!Gr » Kemzo ➹♔#4670
            .setColor('RANDOM')//!Gr » Kemzo ➹♔#4670
            .setDescription(`
**رتبة جديدة**
 
**✨ مبروك بقي عندك رتبة:** ( ${role.name} )
 
**🔗 سيرفر:** ${kemzo.guild.name}`)//!Gr » Kemzo ➹♔#4670
            .setTimestamp()//!Gr » Kemzo ➹♔#4670
           .setFooter(`🔰 ايدي السيرفر : ${alpha.guild.id}`) //!Gr » Kemzo ➹♔#4670
            kemzo.user.send(embed); //!Gr » Kemzo ➹♔#4670
}//!Gr » Kemzo ➹♔#4670
});//!Gr » Kemzo ➹♔#4670
//alpha website: http://alpha-codes.rf.gd/
//alpha server: https://discord.gg/rPhRxfd
//code by: !Gr » Kemzo ➹♔#4670







 

client.on('message', message => {let prefix = "#";
if(message.content.startsWith(prefix + "sug")) {
      message.delete()

const args = message.content.slice(prefix.length).trim().split(/ +/g);

  var suggestMessage = args.slice(1).join(" ")
  if(!suggestMessage) return message.reply("الرجاء وضع اقتراح")
  let suggestsEMBED = new Discord.RichEmbed()
   .setColor('RANDOM')
   .setTitle("**هناك اقتراح جديد**")
   .setDescription(`**${suggestMessage}**`)
   .setFooter(` المقترح : ${message.author.tag}`)
  
       let suggests = message.guild.channels.find(ch => ch.name === "الاقتراحات");
                   if (!suggests) return message.reply("يرجى صنع روم بأسم : الاقتراحات")
               suggests.send(suggestsEMBED);
}
})





client.on('message', message => {
     if (message.content === "#help") {
 let embed = new Discord.RichEmbed()
 .setTitle("**السلام عليكم**")
  .setDescription("لو واجهتك اي مشكلة في البوت يرجي  اعلامنا من خلال تطبيق البوت الرسمي ")
.setFooter(``)
  .setColor('RANDOM')
   message.react("✅");  
  message.author.sendEmbed(embed);
    }
});




client.on("message", m => {
  if (m.content === "#help") {
    var addserver1 ="https://drive.google.com/file/d/1-pLnmD_lPwT7oUt9alWQkSUzpj-Nc9EJ/view?usp=sharing";
    let embed = new Discord.RichEmbed().setTitle(`اتفضل رابط التطبيق`)
    .setColor('RANDOM')
      .setDescription(`                                                                                        
                           
**[اضغط هنا](${addserver1})**`);
    m.author.send(embed);
  }
});













client.on("message", msg => {
  let msgarray = msg.content.split(" ");
  let cmd = msgarray[0];
  let args = msgarray.slice(1);  
if(cmd === `${prefix}send`){
  let mentions = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
  if(!mentions) return msg.reply("**منشن العضو**").then(men => {
      men.delete(2222)
      msg.delete()
  })
  let args2 = args.join(" ").slice(22);
  if(!args2) return msg.reply("**اكتب الرسالة**").then(am => {
      am.delete(2222)
      msg.delete()
  })
let emb = new Discord.RichEmbed()
.setTitle("**The Smart Helper**")
.addField("**الرسالة**", args2)
.addField("**الرسالة لـ**", mentions)
.addField("**من قبل**", msg.author)
.setDescription(`**هل انت متاْكد برسالتك؟
:white_check_mark: | نعم

❌ | لا**`)
.setColor('RANDOM')
msg.channel.send(emb).then(od => {
  od.react("✔")
  .then(()=> od.react("✔"))
  .then(()=> od.react("❌"))
  let reaction1Filter = (reaction, user) => reaction.emoji.name === '✔' && user.id === msg.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === msg.author.id;

let reaction1 = od.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = od.createReactionCollector(reaction2Filter, { time: 12000 });
reaction2.on("collect", r => {
msg.reply("**تم الغاء رسل رسالتك بنجاح**").then(cn => {
cn.delete(2222)
msg.delete()
})
od.delete(2222)
})
reaction1.on("collect", r => {
let embd = new Discord.RichEmbed()
.setTitle("**The Smart Helper**")
.setDescription(`** الرسالة نوع وش؟ :arrow_down:
🚩 | امبد

✨ | بدون امبد
**`)
.setColor('RANDOM')
msg.delete()
od.delete(2222)
msg.channel.send(embd).then(bo => {
bo.react("🚩")
.then(() => bo.react("🚩"))
.then(() => bo.react("✨"))
let r1 = (reaction, user) => reaction.emoji.name === '🚩' && user.id === msg.author.id;
let r2 = (reaction, user) => reaction.emoji.name === '✨' && user.id === msg.author.id;

let rec1 = bo.createReactionCollector(r1, { time: 12000 });
let rec2 = bo.createReactionCollector(r2, { time: 12000 });
rec1.on("collect", r => {
let embde = new Discord.RichEmbed()
.setTitle("**تم ارسال رسالة جديدة**")
.addField("**الرسالة هي**", args2)
.addField("**من قبل**", msg.author)
.setColor('RANDOM')
bo.delete(2222)
msg.reply("**تم ارسال الرسالة بنجاح ✔**").then(op => {
  op.delete(2222)
  msg.delete()
})
mentions.send(embde)
})
rec2.on("collect", r => {
  mentions.send(args2)
  msg.reply("**تم ارسال الرسالة بنجاح ✔**").then(ede => {
      ede.delete(2222)
      bo.delete(2222)
      msg.delete()
     
  })
  })

})

}) 
})
}
})




client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
console.log("By Network")
 
client.user.setActivity(`انا هنا لمساعدتك`, {
type: "STREAMING",
url: "https://www.twitch.tv/alhussian5730"})
    .then(presence => console.log(`Your Status has been set to  ${presence.game ? presence.game.none : 'none'}`))
    .catch(console.error);
});




const credits = JSON.parse(fs.readFileSync("./creditsCode.json", "utf8"));
const coolDown = new Set();

client.on("message", message => {
 const args = message.content.split(' ');
  const credits = require('./creditsCode.json');
  const path = './creditsCode.json';
  const mention = message.mentions.users.first() || client.users.get(args[1]) || message.author;
  const mentionn = message.mentions.users.first() || client.users.get(args[1]);
  const author = message.author.id;
  const balance = args[2];
  const daily = Math.floor(Math.random() * 350) + 10;
 
  if(!credits[author]) credits[author] = {credits: 50};
  if(!credits[mention.id]) credits[mention.id] = {credits: 50};
  fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
 
 
  if(message.content.startsWith(prefix + "credit")) {
  if(args[0] !== `${prefix}credit` && args[0] !== `${prefix}credits`) return;
 
  if(args[2]) {
    if(isNaN(args[2]) || args[2] < 0) return message.channel.send(`:interrobang: **| ${message.author.username}, type the credit you need to transfer! **`);
    if(mention.bot) return message.channel.send(`**:heavy_multiplication_x:| ${message.content.split(' ')[1]} لم يتم العثور على**`);
    if(mention.id === message.author.id) return message.channel.send('**:heavy_multiplication_x:| لا يمكنك تحويل كريدت لنفسك**');
    if(credits[author].credits < balance) return message.channel.send(`** :thinking: | ${message.author.username}, Your balance is not enough for that!**`);
    var one = Math.floor(Math.random() * 9) + 1;
    var two = Math.floor(Math.random() * 9) + 1;
    var three = Math.floor(Math.random() * 9) + 1;
    var four = Math.floor(Math.random() * 9) + 1;
 
    var number = `${one}${two}${three}${four}`;
   
    message.channel.send(`**:heavy_dollar_sign:| \`${number}\`, أكتب الرقم للأستمرار**`).then(m => {
      message.channel.awaitMessages(m => m.author.id === message.author.id, {max: 1, time: 10000}).then(c => {
        if(c.first().content === number) {
          m.delete();
          message.channel.send(`**:moneybag: | ${message.author.username}, has transferred \`${balance}\` to ${mention}**`);
          credits[author].credits += (-balance);
          credits[mention.id].credits += (+balance);
          fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
        } else if(c.first().content !== number) {
          m.delete();
          message.channel.send(`** :money_with_wings: | تم الغاء الإرسال**`);
        }
      });
    });
  }
  if(!args[2]) {
    if(mention.bot) return message.channel.send(`:interrobang:**| ${message.author.username}, I can't find** ${message.content.split(' ')[1]}**!**`);
    message.channel.send(`**${mention.username}, your :credit_card: balance is** \`$${credits[mention.id].credits}\`**.** `);
  }
 
  }
        if(args[0].toLowerCase() === `${prefix}daily`) {  
     
if(credits[message.author.id].daily != moment().format('L')) {
 
       credits[message.author.id].daily = moment().format('L');
           
 
          let ammount = (300, 500, 100, 200, 120, 150, 350, 320,220,250);
          credits[author].credits += ammount;
       
       
          message.channel.send(`**:atm: | ${message.author.username}, you received your :yen: ${ammount} daily credits!**`);
        fs.writeFile("./creditsCode.json", JSON.stringify(credits), function(e) {
            if (e) throw e;
        })
 
      }else{
      message.channel.send(`:stopwatch: : **Please cool down  ${moment().endOf('day').fromNow()}**`);
 
      }
   
        }
         
   
 
});




















































client.login("NzI0MzM1NjM5OTk4MzY1ODA2.Xw2FgQ.YiJBi_YVC0TyYKWN1DpttF3hkGg");