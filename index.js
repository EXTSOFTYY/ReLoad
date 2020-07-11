  
const Discord = require('discord.js');
const MIN_INTERVAL = 7200000;

var bot = new Discord.Client();
var prefix = ("/");

    // -> Logs d'informations.

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: 'ReLoad™', type : 0}})
    console.log("[BOT ReLoad] LOGS -> Le bot est actuellement en ligne sur les serveurs discord. [Succès]");
});

setInterval(function(){
    var staffChannel = bot.channels.get("727176639506677811");
    staffChannel.send("/vote") ;
}, MIN_INTERVAL);

bot.on('message', message => {
    
    let args = message.content.slice(prefix.length).trim().split(' ');
    let command = args.shift().toLowerCase();

    // -> Commande /annonce.

    if (command === 'annonce') {
        if(message.author.id == "406124485612142592", "667649823285182475"){
            let say = args.join(' ');
            message.delete();
            message.channel.send(say);
            console.log("[BOT ReLoad] LOGS -> Un utilisateur demande la commande -> /annonce [<message>] [Succès].");
        }
    }
  
  // -> Commande /vote.
    
    if (message.content === prefix + "vote"){
        message.delete();
        var vote_embed = new Discord.RichEmbed()
            .setColor('#134f73')
            .setThumbnail("https://zupimages.net/up/20/28/9scu.png")
            .setAuthor("ReLoad", "https://zupimages.net/up/20/28/9scu.png")
            .addField("**Vous pouvez voter pour la page TopServeur de ReLoad avec le lien ci-dessous:**", "─────────────────────")
            .addField("**https://top-serveurs.net/gta/reload-18**", "**Voter sera __NOTRE PRINCIPALE__ source de nouveaux joueurs.**")
            .addField("─────────────────────", "Merci aux personnes qui voteront pour le serveur ! ❤️")
            .setFooter("© ReLoad • Développement par EXT_SOFTYY")
            .setTimestamp()
        message.channel.send(vote_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /vote [Succès].");
    }
    
});


bot.login(process.env.TOKEN);
