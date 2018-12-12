const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("/");

    // -> Logs d'informations.

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: 'ExtaziaRP | En cours de développement par SOFTYY.', type : 0}})
    console.log("[BOT ExtaziaRP] LOGS -> Le bot est actuellement en ligne sur les serveurs discord. [Succès]");
});    

    // -> Rejoindre / quitter le serveur.

bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "logs").send(`[BOT ExtaziaRP] LOGS -> :checkered_flag: <@${member.user.id}> vient de rejoindre le serveur discord d'ExtaziaRP!`)
})

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "logs").send(`[BOT ExtaziaRP] LOGS -> :checkered_flag: <@${member.user.id}> vient de quitter le serveur discord qu'il meurt en enfer!`)
})

bot.on('message', message => {
    
    let args = message.content.slice(prefix.length).trim().split(' ');
    let command = args.shift().toLowerCase();

    // -> Commande /sayy.

    if (command === 'sayy') {
        let say = args.join(' ');
        message.delete();
        message.channel.send(say);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /sayy [<message>] [Succès].");
    }

    // Sondage RP - 15h00.

    if (message.content === prefix + "sondagerp-15h") {
        if(message.author.id == "406124485612142592"){
            message.delete();
            var sondagerp15h_embed = new Discord.RichEmbed()
                .setDescription("Sondage :")
                .addField("Seras-tu disponible à la session RP de 15h00 ?!", "Répondre avec :white_check_mark: ou :negative_squared_cross_mark: (ci-dessous).")
                .setColor('#CC2EFA')
                .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
                .setTimestamp()
            message.channel.send(sondagerp15h_embed)
            .then(function (message) {
                message.react("❎")
                message.react("✅")
                console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /sondagerp-15h [Succès].");
            }).catch(function() {
            });
        }else{
            message.delete();
            console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur n'ayant pas la permission demande la commande -> /sondagerp-15h [Succès].");
        }

    }

    // Sondage RP - 21h00.

    if (message.content === prefix + "sondagerp-21h") {
        if(message.author.id == "406124485612142592"){
            message.delete();
            var sondagerp21h_embed = new Discord.RichEmbed()
                .setDescription("Sondage :")
                .addField("Seras-tu disponible à la session RP de 21h00 ?!", "Répondre avec :white_check_mark: ou :negative_squared_cross_mark: (ci-dessous).")
                .setColor('#CC2EFA')
                .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
                .setTimestamp()
            message.channel.send(sondagerp21h_embed)
            .then(function (message) {
                message.react("❎")
                message.react("✅")
                console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /sondagerp-21h [Succès].");
            }).catch(function() {
            });
        }else{
            message.delete();
            console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur n'ayant pas la permission demande la commande -> /sondagerp-15h [Succès].");
        }

    }

    // -> Commande /aide.
    
    if (message.content === prefix + "aide"){
        message.delete();
        var aide_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/45/3/1541615757-logo.png")
            .addField("Les commandes :", "─────────────────────")
            .addField("[BOT ExtaziaRP] - Carte d'identité:", "-> /rp-c [<prénom rp>] pour afficher la carte d'identité d'un personnage RP.")
            .addField("[BOT ExtaziaRP] - L'inventaire:", "-> /rp-i [<prénom rp>] pour afficher l'inventaire d'un personnage RP.")
            .addField("[BOT ExtaziaRP] - Économie:", "-> /money [<id discord>] pour afficher le compte bancaire d'un personnage RP.")
            .addField("[BOT ExtaziaRP] - Économie:", "-> /deposit [<montant>] pour mettre de l'argant sur ton compte bancaire RP.")
            .addField("[BOT ExtaziaRP] - Économie:", "-> /give-money [<id discord>] [<montant>] pour faire un virement bancaire à un personnage RP.")
            .addField("[BOT ExtaziaRP] - Économie:", "-> /withdraw [<montant>] pour récuper de l'argent de ton compte bancaire RP.")
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(aide_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /aide [Succès].");
    }

    // -> Carte d'identité RP.

    // -> Visa RP de Saalvatore.

    if (message.content === prefix + "rp-c Saalvatore"){
        message.delete();
        var rpcsaalvatore_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/49/6/1544284972-saalvatoremartinez.png")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Sopoz" )
            .addField("Prénom:", "-> Saalvatore" )
            .addField("Date de naissance:", "-> 9 mars 1995" )
            .addField("Nationalité", "-> Russe" )
            .addField("Lieux de naissance:", "-> Moscou" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcsaalvatore_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Saalvatore [Succès].");
    }

    // -> Visa RP de Diego.

    if (message.content === prefix + "rp-c Diego"){
        message.delete();
        var rpcdiego_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/49/6/1544284972-diegomartinez.png")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Martinez" )
            .addField("Prénom:", "-> Diego" )
            .addField("Date de naissance:", "-> 11 juin 1994" )
            .addField("Nationalité", "-> Espagnole" )
            .addField("Lieux de naissance:", "-> Madrid" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcdiego_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Diego [Succès].");
    }
    
     // -> Visa RP de Rodrigo.

    if (message.content === prefix + "rp-c Rodrigo"){
        message.delete();
        var rpcdiego_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/3/1544619092-rodrigomartinez.png")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Martinez" )
            .addField("Prénom:", "-> Rodrigo" )
            .addField("Date de naissance:", "-> 27 décembre 1997" )
            .addField("Nationalité", "-> Espagnole" )
            .addField("Lieux de naissance:", "-> Madrid" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcdiego_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Rodrigo [Succès].");
    }
    
    // -> Visa RP de Juan.
    
    if (message.content === prefix + "rp-c Juan"){
        message.delete();
        var rpcdiego_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/3/1544619707-person-male.png")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Garcia" )
            .addField("Prénom:", "-> Juan" )
            .addField("Date de naissance:", "-> 17 mai 1996" )
            .addField("Nationalité", "-> Espagnole" )
            .addField("Lieux de naissance:", "-> Barcelone" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcdiego_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Juan [Succès].");
    }
    
    // -> Visa RP de Guy.
    
    if (message.content === prefix + "rp-c Guy"){
        message.delete();
        var rpcdiego_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/3/1544619707-person-male.png")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Hart" )
            .addField("Prénom:", "-> Guy" )
            .addField("Date de naissance:", "-> 8 juin 1992" )
            .addField("Nationalité", "-> Allemand" )
            .addField("Lieux de naissance:", "-> Berlin" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcdiego_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Guy [Succès].");
    }

    // -> Inventaire RP

    // -> Inventaire RP de Saalvatore

    if (message.content === prefix + "rp-i Saalvatore"){
        message.delete();
        var rpisaalvatore_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/49/6/1544284972-saalvatoremartinez.png")
            .addField("Voici l'inventaire de Saalvatore :", "─────────────────────" )
            .addField("Permis Voiture:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .addField("PPA (Léger / Lourd):", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpisaalvatore_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Saalvatore [Succès].");
    }

    // -> Inventaire RP de Diego.

    if (message.content === prefix + "rp-i Diego"){
        message.delete();
        var rpidiego_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/49/6/1544284972-diegomartinez.png")
            .addField("Voici l'inventaire de Diego :", "─────────────────────" )
            .addField("Permis Voiture:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .addField("PPA (Léger / Lourd):", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpidiego_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Diego [Succès].");
    }
    
    // -> Inventaire RP de Rodrigo.

    if (message.content === prefix + "rp-i Rodrigo"){
        message.delete();
        var rpidiego_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/3/1544619092-rodrigomartinez.png")
            .addField("Voici l'inventaire de Rodrigo :", "─────────────────────" )
            .addField("Permis Voiture:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .addField("PPA (Léger / Lourd):", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpidiego_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Rodrigo [Succès].");
    }
    
    // -> Inventaire RP de Juan.

    if (message.content === prefix + "rp-i Juan"){
        message.delete();
        var rpidiego_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/3/1544619707-person-male.png")
            .addField("Voici l'inventaire de Juan :", "─────────────────────" )
            .addField("Permis Voiture:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .addField("PPA (Léger / Lourd):", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpidiego_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Juan [Succès].");
    }
    
    // -> Inventaire RP de Guy.

    if (message.content === prefix + "rp-i Guy"){
        message.delete();
        var rpidiego_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/3/1544619707-person-male.png")
            .addField("Voici l'inventaire de Guy :", "─────────────────────" )
            .addField("Permis Voiture:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .addField("PPA (Léger / Lourd):", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpidiego_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Guy [Succès].");
    }



});

bot.login(process.env.TOKEN);
