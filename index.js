  
const Discord = require('discord.js');
//const MIN_INTERVAL = 7200000;

var bot = new Discord.Client();
var prefix = ("/");

    // -> Logs d'informations.

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: 'YourLIFE ™', type : 0}})
    console.log("[BOT YourLIFE ™] LOGS -> Le bot est actuellement en ligne sur les serveurs discord. [Succès]");
});

    // -> Rejoindre / quitter le serveur.

//bot.on("guildMemberAdd", member => {
    //member.guild.channels.find("name", "🎬-générique").send(`[BOT YourLIFE ™] LOGS -> :checkered_flag: <@${member.user.id}> vient de rejoindre le serveur !`)
//})

//bot.on("guildMemberRemove", member => {
    //member.guild.channels.find("name", "🎬-générique").send(`[BOT YourLIFE ™] LOGS -> :checkered_flag: <@${member.user.id}> vient de quitter le serveur !`)
//})

    // -> /vote

//setInterval(function(){
    //var staffChannel = bot.channels.get("615958297878462487");
    //staffChannel.send("/vote") ;
//}, MIN_INTERVAL);

bot.on('message', message => {
    
    let args = message.content.slice(prefix.length).trim().split(' ');
    let command = args.shift().toLowerCase();

    // -> Commande /annonce.

    if (command === 'annonce') {
        if(message.author.id == "406124485612142592"){
            let say = args.join(' ');
            message.delete();
            message.channel.send(say);
            console.log("[BOT YourLIFE ™] LOGS -> Un utilisateur demande la commande -> /annonce [<message>] [Succès].");
        }
    }
  
  // -> Commande /vote.
    
    if (message.content === prefix + "vote"){
        message.delete();
        message.channel.send("Hello ! Pense à te rendre sur TopServeur il est l'heure de voter !");
        var vote_embed = new Discord.RichEmbed()
            .setColor('#ffd6fc')
            .setThumbnail("https://zupimages.net/up/22/14/weho.png")
            .setAuthor("YourLIFE ™", "https://zupimages.net/up/22/14/weho.png")
            .addField("**Vous pouvez voter pour la page TopServeur de YourLIFE avec le lien ci-dessous:**", "─────────────────────")
            .addField("**https://top-serveurs.net/**", "**Voter sera __NOTRE PRINCIPALE__ source de nouveaux joueurs.**")
            .addField("─────────────────────", "Merci aux personnes qui voteront pour le serveur ! ❤️")
            .setFooter("© YourLIFE • Développement par EXT_SOFTYY")
            .setTimestamp()
        message.channel.send(vote_embed);
        console.log("[BOT YourLIFE ™] LOGS -> Un utilisateur demande la commande -> /vote [Succès].");
    }
    
});


bot.login(process.env.TOKEN);
