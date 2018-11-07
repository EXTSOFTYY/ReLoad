const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("/");

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: 'ExtaziaRP | En cours de développement par SOFTYY.', type : 0}})
    console.log("[BOT ExtaziaRP] : Le bot est actuellement en ligne sur les serveurs discord. [Succès]");
});

bot.login(process.env.TOKEN);

// -> Commande /help.

bot.on('message', message => {
    if (message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/45/3/1541615757-logo.png")
            .addField("Les commandes :", "─────────────────────")
            .addField("[BOT ExtaziaRP] - Carte d'identité:", "-> /rp-c [<prénom rp>] pour afficher la carte d'identité d'un personnage RP.")
            .addField("[BOT ExtaziaRP] - L'inventaire:", "-> /rp-i [<prénom rp>] pour afficher la carte l'inventaire d'un personnage RP.")
            .setFooter("ExtaziaRP; Développement par SOFTYY - 2018/2019.")
        message.channel.sendEmbed(help_embed);
        console.log("[BOT ExtaziaRP] : Un utilisateur demande la commande -> /help [Succès].");
    }

});