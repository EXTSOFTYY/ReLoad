  
const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("/");

    // -> Logs d'informations.

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: 'ReLoad™', type : 0}})
    console.log("[BOT ReLoad] LOGS -> Le bot est actuellement en ligne sur les serveurs discord. [Succès]");
});

bot.on('message', message => {
    
    let args = message.content.slice(prefix.length).trim().split(' ');
    let command = args.shift().toLowerCase();

    // -> Commande /annonce.

    if (command === 'annonce') {
        if(message.author.id == "406124485612142592"){
            let say = args.join(' ');
            message.delete();
            message.channel.send(say);
            console.log("[BOT ReLoad] LOGS -> Un utilisateur demande la commande -> /annonce [<message>] [Succès].");
        }
    }
    
});


bot.login(process.env.TOKEN);
