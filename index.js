  
const Discord = require('discord.js');
const MIN_INTERVAL = 7200000;

var bot = new Discord.Client();
var prefix = ("/");

    // -> Logs d'informations.

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: 'LifeTime ™', type : 0}})
    console.log("[BOT LifeTime ™] LOGS -> Le bot est actuellement en ligne sur les serveurs discord. [Succès]");
});

    // -> Rejoindre / quitter le serveur.

bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "🎬-générique").send(`[BOT LifeTime ™] LOGS -> :checkered_flag: <@${member.user.id}> vient de rejoindre le serveur !`)
})

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "🎬-générique").send(`[BOT LifeTime ™] LOGS -> :checkered_flag: <@${member.user.id}> vient de quitter le serveur !`)
})

    // -> /vote

setInterval(function(){
    var staffChannel = bot.channels.get("837221501136404491");
    staffChannel.send("/vote") ;
}, MIN_INTERVAL);

bot.on('message', message => {
    
    let args = message.content.slice(prefix.length).trim().split(' ');
    let command = args.shift().toLowerCase();

    // -> Commande /annonce.

    if (command === 'annonce') {
        if(message.author.id == "406124485612142592"){
            let say = args.join(' ');
            message.delete();
            message.channel.send(say);
            console.log("[BOT LifeTime ™] LOGS -> Un utilisateur demande la commande -> /annonce [<message>] [Succès].");
        }
    }
  
  // -> Commande /vote.
    
    if (message.content === prefix + "vote"){
        message.delete();
        message.channel.send("Hello ! Pense a te rendre sur TopServeur il est l'heure de voter ! @everyone");
        var vote_embed = new Discord.RichEmbed()
            .setColor('#ffd6fc')
            .setThumbnail("https://zupimages.net/up/21/17/otgp.png")
            .setAuthor("LifeTime ™", "https://zupimages.net/up/21/17/otgp.png")
            .addField("**Vous pouvez voter pour la page TopServeur de LifeTime avec le lien ci-dessous:**", "─────────────────────")
            .addField("**https://top-serveurs.net/gta/lifetime-18-wl**", "**Voter sera __NOTRE PRINCIPALE__ source de nouveaux joueurs.**")
            .addField("─────────────────────", "Merci aux personnes qui voteront pour le serveur ! ❤️")
            .setFooter("© LifeTime • Développement par EXT_SOFTYY")
            .setTimestamp()
        message.channel.send(vote_embed);
        console.log("[BOT LifeTime ™] LOGS -> Un utilisateur demande la commande -> /vote [Succès].");
    }
    
});


bot.login(process.env.TOKEN);
