const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("/");

    // -> Logs d'informations.

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: 'ExtaziaRP.', type : 0}})
    console.log("[BOT ExtaziaRP v2 - LSPD ] LOGS -> Le bot est actuellement en ligne sur les serveurs discord. [Succès]");
});    

bot.on('message', message => {
    
    let args = message.content.slice(prefix.length).trim().split(' ');
    let command = args.shift().toLowerCase();
    
    // -> Commande /lspd.

    if (command === 'lspd') {
        let say = args.join(' ');
        message.delete();
        message.channel.send(say);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /lspd [<message>] [Succès].");
    }

    
});

bot.login(process.env.TOKEN);
