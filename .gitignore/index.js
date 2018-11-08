const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("/");

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: 'ExtaziaRP | En cours de développement par SOFTYY.', type : 0}})
    console.log("[BOT ExtaziaRP] : Le bot est actuellement en ligne sur les serveurs discord. [Succès]");
});

bot.login(process.env.TOKEN);

    // -> Rejoindre / quitter le serveur.

bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "logs").send(`[ExtaziaRP BOT] LOGS -> :checkered_flag: <@${member.user.id}> vient de rejoindre le serveur discord d'ExtaziaRP!`)
})

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "logs").send(`[ExtaziaRP BOT] LOGS -> :checkered_flag: <@${member.user.id}> vient de quitter le serveur discord qu'il meurt en enfer!`)
})

bot.on('message', message => {
    
    let args = message.content.slice(prefix.length).trim().split(' ');
    let command = args.shift().toLowerCase();

    // -> Commande /say.

    if (command === 'say') {
        let say = args.join(' ');
        message.delete();
        message.channel.send(say);
    }

    // -> Commande /help.
    
    if (message.content === prefix + "help"){
        message.delete();
        var help_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/45/3/1541615757-logo.png")
            .addField("Les commandes :", "─────────────────────")
            .addField("[BOT ExtaziaRP] - Carte d'identité:", "-> /rp-c [<prénom rp>] pour afficher la carte d'identité d'un personnage RP.")
            .addField("[BOT ExtaziaRP] - L'inventaire:", "-> /rp-i [<prénom rp>] pour afficher la carte l'inventaire d'un personnage RP.")
            .setFooter("ExtaziaRP; Développement par SOFTYY - 2018/2019.")
        message.channel.sendEmbed(help_embed);
        console.log("[ExtaziaRP BOT] : Un utilisateur demande la commande -> /help [Succès].");
    }

    // -> Visa RP de Saalvatore.

    if (message.content === prefix + "rp-c Saalvatore"){
        message.delete();
        var help_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/45/3/1541615757-logo.png")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Sopoz" )
            .addField("Prénom:", "-> Saalvatore" )
            .addField("Date de naissance:", "-> 9 mars 1995" )
            .addField("Nationalité", "-> Russe" )
            .addField("Lieux de naissance:", "-> Moscou" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("ExtaziaRP; Développement par SOFTYY - 2018/2019.")
        message.channel.sendEmbed(help_embed);
        console.log("[ExtaziaRP] : Un utilisateur demande la commande -> /rp-c Saalvatore [Succès].");
    }

    // -> Visa RP de Diego.

    if (message.content === prefix + "rp-c Diego"){
        message.delete();
        var help_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/45/3/1541615757-logo.png")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Martinez" )
            .addField("Prénom:", "-> Diego" )
            .addField("Date de naissance:", "-> 11 juin 1994" )
            .addField("Nationalité", "-> Espagnole" )
            .addField("Lieux de naissance:", "-> Madrid" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("ExtaziaRP; Développement par SOFTYY - 2018/2019.")
        message.channel.sendEmbed(help_embed);
        console.log("[ExtaziaRP] : Un utilisateur demande la commande -> /rp-c Diego [Succès].");
    }

});
