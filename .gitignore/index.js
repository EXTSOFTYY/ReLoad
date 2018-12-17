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

    // -> Visa RP de Matthew.

    if (message.content === prefix + "rp-c Matthew"){
        message.delete();
        var rpcmatthew_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/51/1/1545059644-mattewwalt.png")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Walt" )
            .addField("Prénom:", "-> Matthew" )
            .addField("Date de naissance:", "-> 9 mars 1999" )
            .addField("Nationalité", "-> Américain" )
            .addField("Lieux de naissance:", "-> Los Santos" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcmatthew_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Matthew [Succès].");
    }

    // -> Visa RP de Calvin.

    if (message.content === prefix + "rp-c Calvin"){
        message.delete();
        var rpccalvin_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/51/1/1545059644-calvincole.png")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Cole" )
            .addField("Prénom:", "-> Calvin" )
            .addField("Date de naissance:", "-> 11 janvier 1999" )
            .addField("Nationalité", "-> Américain" )
            .addField("Lieux de naissance:", "-> Los Santos" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpccalvin_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Calvin [Succès].");
    }
    
     // -> Visa RP de Jay.

    if (message.content === prefix + "rp-c Jay"){
        message.delete();
        var rpcrjay_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/51/1/1545068727-jaybrown.png")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Brown" )
            .addField("Prénom:", "-> Jay" )
            .addField("Date de naissance:", "-> 25 mai 1998" )
            .addField("Nationalité", "-> Américain" )
            .addField("Lieux de naissance:", "-> Los Santos" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcjay_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Jay [Succès].");
    }
    
    // -> Visa RP de Juan.
    
    if (message.content === prefix + "rp-c Juan"){
        message.delete();
        var rpcjuan_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/5/1544816985-juangarcia.png")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Garcia" )
            .addField("Prénom:", "-> Juan" )
            .addField("Date de naissance:", "-> 17 mai 1996" )
            .addField("Nationalité", "-> Espagnole" )
            .addField("Lieux de naissance:", "-> Barcelone" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcjuan_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Juan [Succès].");
    }
    
    // -> Visa RP de Guy.
    
    if (message.content === prefix + "rp-c Guy"){
        message.delete();
        var rpcguy_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/5/1544808418-person-male.png")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Hart" )
            .addField("Prénom:", "-> Guy" )
            .addField("Date de naissance:", "-> 8 juin 1992" )
            .addField("Nationalité", "-> Allemand" )
            .addField("Lieux de naissance:", "-> Berlin" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcguy_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Guy [Succès].");
    }
    
    // -> Visa RP de Pablo.
    
    if (message.content === prefix + "rp-c Pablo"){
        message.delete();
        var rpcpablo_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/5/1544808418-person-male.png")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Cannors" )
            .addField("Prénom:", "-> Pablo" )
            .addField("Date de naissance:", "-> 30 mai 1988" )
            .addField("Nationalité", "-> Colombien" )
            .addField("Lieux de naissance:", "-> Bogota" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcpablo_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Pablo [Succès].");
    }
    
    // -> Visa RP de Lucas.
    
    if (message.content === prefix + "rp-c Lucas"){
        message.delete();
        var rpclucas_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/5/1544808418-person-male.png")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Ford" )
            .addField("Prénom:", "-> Lucas" )
            .addField("Date de naissance:", "-> 17 juin 1999" )
            .addField("Nationalité", "-> Italien" )
            .addField("Lieux de naissance:", "-> Venise" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpclucas_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Lucas [Succès].");
    }
    
    // -> Visa RP de Steven.
    
    if (message.content === prefix + "rp-c Steven"){
        message.delete();
        var rpcsteven_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/5/1544808418-person-male.png")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Jones" )
            .addField("Prénom:", "-> Steven" )
            .addField("Date de naissance:", "-> 25 décembre 1999" )
            .addField("Nationalité", "-> Française" )
            .addField("Lieux de naissance:", "-> Lyon" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcsteven_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Lucas [Succès].");
    }
    
    // -> Visa RP de Tom.
    
    if (message.content === prefix + "rp-c Tom"){
        message.delete();
        var rpctom_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/5/1544808418-person-male.png")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Pellegrino" )
            .addField("Prénom:", "-> Tom" )
            .addField("Date de naissance:", "-> 23 juillet 1995" )
            .addField("Nationalité", "-> Française" )
            .addField("Lieux de naissance:", "-> Strasbourg" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpctom_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Tom [Succès].");
    }

    // -> Inventaire RP

    // -> Inventaire RP de Matthew

    if (message.content === prefix + "rp-i Matthew"){
        message.delete();
        var rpimatthew_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/51/1/1545059644-mattewwalt.png")
            .addField("Voici l'inventaire de Matthew :", "─────────────────────" )
            .addField("Permis Voiture:", "-> :white_check_mark: " )
            .addField("Permis Moto:", "-> :white_check_mark: " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .addField("PPA (Léger / Lourd):", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpimatthew_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Mattew [Succès].");
    }

    // -> Inventaire RP de Calvin.

    if (message.content === prefix + "rp-i Calvin"){
        message.delete();
        var rpicalvin_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/51/1/1545059644-calvincole.png")
            .addField("Voici l'inventaire de Calvin :", "─────────────────────" )
            .addField("Permis Voiture:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .addField("PPA (Léger / Lourd):", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpicalvin_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Calvin [Succès].");
    }
    
    // -> Inventaire RP de Jay.

    if (message.content === prefix + "rp-i Jay"){
        message.delete();
        var rpijay_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/51/1/1545068727-jaybrown.png")
            .addField("Voici l'inventaire de Jay :", "─────────────────────" )
            .addField("Permis Voiture:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Moto:", "-> ::negative_squared_cross_mark: " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .addField("PPA (Léger / Lourd):", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpijay_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Jay [Succès].");
    }
    
    // -> Inventaire RP de Juan.

    if (message.content === prefix + "rp-i Juan"){
        message.delete();
        var rpijuan_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/5/1544816985-juangarcia.png")
            .addField("Voici l'inventaire de Juan :", "─────────────────────" )
            .addField("Permis Voiture:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .addField("PPA (Léger / Lourd):", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpijuan_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Juan [Succès].");
    }
    
    // -> Inventaire RP de Guy.

    if (message.content === prefix + "rp-i Guy"){
        message.delete();
        var rpiguy_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/5/1544808418-person-male.png")
            .addField("Voici l'inventaire de Guy :", "─────────────────────" )
            .addField("Permis Voiture:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .addField("PPA (Léger / Lourd):", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpiguy_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Guy [Succès].");
    }
    
    // -> Inventaire RP de Pablo.

    if (message.content === prefix + "rp-i Pablo"){
        message.delete();
        var rpipablo_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/5/1544808418-person-male.png")
            .addField("Voici l'inventaire de Pablo :", "─────────────────────" )
            .addField("Permis Voiture:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .addField("PPA (Léger / Lourd):", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpipablo_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Pablo [Succès].");
    }
    
    // -> Inventaire RP de Lucas.

    if (message.content === prefix + "rp-i Lucas"){
        message.delete();
        var rpilucas_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/5/1544808418-person-male.png")
            .addField("Voici l'inventaire de Lucas :", "─────────────────────" )
            .addField("Permis Voiture:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .addField("PPA (Léger / Lourd):", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpilucas_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Lucas [Succès].");
    }
    
    // -> Inventaire RP de Steven.

    if (message.content === prefix + "rp-i Steven"){
        message.delete();
        var rpisteven_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/5/1544808418-person-male.png")
            .addField("Voici l'inventaire de Steven :", "─────────────────────" )
            .addField("Permis Voiture:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .addField("PPA (Léger / Lourd):", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpisteven_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Lucas [Succès].");
    }
    
    // -> Inventaire RP de Tom.

    if (message.content === prefix + "rp-i Tom"){
        message.delete();
        var rpitom_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/5/1544808418-person-male.png")
            .addField("Voici l'inventaire de Steven :", "─────────────────────" )
            .addField("Permis Voiture:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .addField("PPA (Léger / Lourd):", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpitom_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Tom [Succès].");
    }



});

bot.login(process.env.TOKEN);
