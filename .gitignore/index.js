const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("/");

    // -> Logs d'informations.

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: 'ExtaziaRP.', type : 0}})
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
            .setThumbnail("http://image.noelshack.com/fichiers/2018/51/5/1545394316-logoo.png")
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

    // -> Visa RP de Guillaume.

    if (message.content === prefix + "rp-c Guillaume"){
        message.delete();
        var rpcguillaume_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/18/51/3we1.png")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Popa" )
            .addField("Prénom:", "-> Guillaume" )
            .addField("Date de naissance:", "-> 9 mars 1999" )
            .addField("Nationalité", "-> Belge" )
            .addField("Lieux de naissance:", "-> Bruxelles" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcguillaume_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Guillaume [Succès].");
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
        var rpcjay_embed = new Discord.RichEmbed()
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
    
    // -> Visa RP de Ayoub.
    
    if (message.content === prefix + "rp-c Ayoub"){
        message.delete();
        var rpcayoub_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/5/1544808418-person-male.png")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Heni" )
            .addField("Prénom:", "-> Ayoub" )
            .addField("Date de naissance:", "-> 16 juillet 1995" )
            .addField("Nationalité", "-> Marocaine" )
            .addField("Lieux de naissance:", "-> Agadir" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcayoub_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Ayoub [Succès].");
    }

    // -> Visa RP de Jonny.
    
    if (message.content === prefix + "rp-c Jonny"){
        message.delete();
        var rpcjonny_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/5/1544808418-person-male.png")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Sherchlidé" )
            .addField("Prénom:", "-> Jonny" )
            .addField("Date de naissance:", "-> 5 février 1998" )
            .addField("Nationalité", "-> Française" )
            .addField("Lieux de naissance:", "-> Lyon" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcjonny_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Ayoub [Succès].");
    }

    // -> Visa RP de Brisse.
    
    if (message.content === prefix + "rp-c Brisse"){
        message.delete();
        var rpcbrisse_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/5/1544808418-person-male.png")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Denisse" )
            .addField("Prénom:", "-> Brisse" )
            .addField("Date de naissance:", "-> 30 juin 1998" )
            .addField("Nationalité", "-> Française" )
            .addField("Lieux de naissance:", "-> Lille" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcbrisse_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Brisse [Succès].");
    }

    // -> Visa RP de Walk.
    
    if (message.content === prefix + "rp-c Walk"){
        message.delete();
        var rpcwalk_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/5/1544808418-person-male.png")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Booster" )
            .addField("Prénom:", "-> Walk" )
            .addField("Date de naissance:", "-> 4 mai 1990" )
            .addField("Nationalité", "-> Turc" )
            .addField("Lieux de naissance:", "-> Istanbul" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcwalk_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Walk [Succès].");
    }

    // -> Visa RP de Kad.
    
    if (message.content === prefix + "rp-c Kad"){
        message.delete();
        var rpckad_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/5/1544808418-person-male.png")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Illaq" )
            .addField("Prénom:", "-> Kad" )
            .addField("Date de naissance:", "-> 28 mars 1998" )
            .addField("Nationalité", "-> Amériquaine" )
            .addField("Lieux de naissance:", "-> Texas" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpckad_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Kad [Succès].");
    }

    // -> Visa RP de James.
    
    if (message.content === prefix + "rp-c James"){
        message.delete();
        var rpcjames_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/5/1544808418-person-male.png")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Skofild" )
            .addField("Prénom:", "-> James" )
            .addField("Date de naissance:", "-> 10 mars 1995" )
            .addField("Nationalité", "-> Amériquaine" )
            .addField("Lieux de naissance:", "-> Los Santos" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcjames_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c James [Succès].");
    }

    // -> Visa RP de Yanis.
    
    if (message.content === prefix + "rp-c Yanis"){
        message.delete();
        var rpcyanis_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/5/1544808418-person-male.png")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Méné" )
            .addField("Prénom:", "-> Yanis" )
            .addField("Date de naissance:", "-> 24 décembre 1992" )
            .addField("Nationalité", "-> Française" )
            .addField("Lieux de naissance:", "-> Paris" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcyanis_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Yanis [Succès].");
    }

    // -> Visa RP de Favelas.
    
    if (message.content === prefix + "rp-c Favelas"){
        message.delete();
        var rpcfavelas_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/5/1544808418-person-male.png")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Bangueur" )
            .addField("Prénom:", "-> Favelas" )
            .addField("Date de naissance:", "-> 28 mars 1998" )
            .addField("Nationalité", "-> Brésilien" )
            .addField("Lieux de naissance:", "-> Rio de Janeiro" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcfavelas_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Favelas [Succès].");
    }
    
    // -> Visa RP de Anthony.
    
    if (message.content === prefix + "rp-c Anthony"){
        message.delete();
        var rpcfavelaas_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/5/1544808418-person-male.png")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Slay" )
            .addField("Prénom:", "-> Anthony" )
            .addField("Date de naissance:", "-> 9 mars 1995" )
            .addField("Nationalité", "-> Américain" )
            .addField("Lieux de naissance:", "-> Los Angeles" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcfavelaas_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Anthony [Succès].");
    }
    
    // -> Visa RP de Brandon.
    
    if (message.content === prefix + "rp-c Brandon"){
        message.delete();
        var rpcfaveelas_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/5/1544808418-person-male.png")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Skofild" )
            .addField("Prénom:", "-> Brandon" )
            .addField("Date de naissance:", "-> 15 mars 1993" )
            .addField("Nationalité", "-> Américain" )
            .addField("Lieux de naissance:", "-> Los Angeles" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcfaveelas_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Brandon [Succès].");
    }
    
    // -> Visa RP de Jason.
    
    if (message.content === prefix + "rp-c Jason"){
        message.delete();
        var rpcfaaaveelas_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/5/1544808418-person-male.png")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Smith" )
            .addField("Prénom:", "-> Jason" )
            .addField("Date de naissance:", "-> 8 janvier 1990" )
            .addField("Nationalité", "-> Turc" )
            .addField("Lieux de naissance:", "-> Istanbul" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcfaaaveelas_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Jason [Succès].");
    }
    
    // -> Visa RP de Antonio.
    
    if (message.content === prefix + "rp-c Antonio"){
        message.delete();
        var rpcfaaaveeilas_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/5/1544808418-person-male.png")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Perazzi" )
            .addField("Prénom:", "-> Antonio" )
            .addField("Date de naissance:", "-> 28 août 1991" )
            .addField("Nationalité", "-> Italien" )
            .addField("Lieux de naissance:", "-> Rome" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcfaaaveeilas_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Antonio [Succès].");
    }
















































    // -> Inventaire RP

    // -> Inventaire RP de Guillaume

    if (message.content === prefix + "rp-i Guillaume"){
        message.delete();
        var rpiguillaume_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/18/51/3we1.png")
            .addField("Voici l'inventaire de Guillaume :", "─────────────────────" )
            .addField("Permis Voiture:", "-> :white_check_mark: " )
            .addField("Permis Moto:", "-> :white_check_mark: " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .addField("PPA (Léger / Lourd):", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpiguillaume_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Guillaume [Succès].");
    }

    // -> Inventaire RP de Calvin.

    if (message.content === prefix + "rp-i Calvin"){
        message.delete();
        var rpicalvin_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/51/1/1545059644-calvincole.png")
            .addField("Voici l'inventaire de Calvin :", "─────────────────────" )
            .addField("Permis Voiture:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Moto:", "-> :white_check_mark: " )
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
            .addField("Permis Moto:", "-> :white_check_mark: " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .addField("PPA (Léger / Lourd):", "-> :white_check_mark:   ─   :negative_squared_cross_mark:" )
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
    
    // -> Inventaire RP de Tom.

    if (message.content === prefix + "rp-i Tom"){
        message.delete();
        var rpitom_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/5/1544808418-person-male.png")
            .addField("Voici l'inventaire de Tom :", "─────────────────────" )
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
    
    // -> Inventaire RP de Ayoub.

    if (message.content === prefix + "rp-i Ayoub"){
        message.delete();
        var rpiayoub_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/5/1544808418-person-male.png")
            .addField("Voici l'inventaire de Ayoub :", "─────────────────────" )
            .addField("Permis Voiture:", "-> :white_check_mark:" )
            .addField("Permis Moto:", "-> :white_check_mark: " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .addField("PPA (Léger / Lourd):", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpiayoub_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Ayoub [Succès].");
    }

    // -> Inventaire RP de Jonny.

    if (message.content === prefix + "rp-i Jonny"){
        message.delete();
        var rpijonny_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/5/1544808418-person-male.png")
            .addField("Voici l'inventaire de Jonny :", "─────────────────────" )
            .addField("Permis Voiture:", "-> :white_check_mark:" )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .addField("PPA (Léger / Lourd):", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpijonny_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Jonny [Succès].");
    }

    // -> Inventaire RP de Brisse.

    if (message.content === prefix + "rp-i Brisse"){
        message.delete();
        var rpibrisse_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/5/1544808418-person-male.png")
            .addField("Voici l'inventaire de Brisse :", "─────────────────────" )
            .addField("Permis Voiture:", "-> :white_check_mark:" )
            .addField("Permis Moto:", "-> :white_check_mark:" )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .addField("PPA (Léger / Lourd):", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpibrisse_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Brisse [Succès].");
    }

    // -> Inventaire RP de Walk.

    if (message.content === prefix + "rp-i Walk"){
        message.delete();
        var rpiwalk_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/5/1544808418-person-male.png")
            .addField("Voici l'inventaire de Walk :", "─────────────────────" )
            .addField("Permis Voiture:", "-> :white_check_mark:" )
            .addField("Permis Moto:", "-> :white_check_mark: " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .addField("PPA (Léger / Lourd):", "-> :white_check_mark:   ─   :negative_squared_cross_mark:" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpiwalk_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Walk [Succès].");
    }

    // -> Inventaire RP de Kad.

    if (message.content === prefix + "rp-i Kad"){
        message.delete();
        var rpikad_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/5/1544808418-person-male.png")
            .addField("Voici l'inventaire de Kad :", "─────────────────────" )
            .addField("Permis Voiture:", "-> :white_check_mark:" )
            .addField("Permis Moto:", "-> :white_check_mark: " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .addField("PPA (Léger / Lourd):", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpikad_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Kad [Succès].");
    }

    // -> Inventaire RP de James.

    if (message.content === prefix + "rp-i James"){
        message.delete();
        var rpijames_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/5/1544808418-person-male.png")
            .addField("Voici l'inventaire de James :", "─────────────────────" )
            .addField("Permis Voiture:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .addField("PPA (Léger / Lourd):", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpijames_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i James [Succès].");
    }

    // -> Inventaire RP de James.

    if (message.content === prefix + "rp-i Yanis"){
        message.delete();
        var rpiyanis_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/5/1544808418-person-male.png")
            .addField("Voici l'inventaire de Yanis :", "─────────────────────" )
            .addField("Permis Voiture:", "-> :white_check_mark:" )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .addField("PPA (Léger / Lourd):", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpiyanis_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Yanis [Succès].");
    }

    // -> Inventaire RP de Favelas.

    if (message.content === prefix + "rp-i Favelas"){
        message.delete();
        var rpifavelas_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/5/1544808418-person-male.png")
            .addField("Voici l'inventaire de Favelas :", "─────────────────────" )
            .addField("Permis Voiture:", "-> :white_check_mark:" )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .addField("PPA (Léger / Lourd):", "-> :white_check_mark:   ─   :negative_squared_cross_mark:" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpifavelas_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Favelas [Succès].");
    }
    
    // -> Inventaire RP de Anthony.

    if (message.content === prefix + "rp-i Anthony"){
        message.delete();
        var rpijamees_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/5/1544808418-person-male.png")
            .addField("Voici l'inventaire de Anthony :", "─────────────────────" )
            .addField("Permis Voiture:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .addField("PPA (Léger / Lourd):", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpijamees_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Anthony [Succès].");
    }
    
    // -> Inventaire RP de Brandon.

    if (message.content === prefix + "rp-i Brandon"){
        message.delete();
        var rpijamess_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/5/1544808418-person-male.png")
            .addField("Voici l'inventaire de Brandon :", "─────────────────────" )
            .addField("Permis Voiture:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .addField("PPA (Léger / Lourd):", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpijamess_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Brandon [Succès].");
    }
    
    // -> Inventaire RP de Jason.

    if (message.content === prefix + "rp-i Jason"){
        message.delete();
        var rpiijamess_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/5/1544808418-person-male.png")
            .addField("Voici l'inventaire de Jason :", "─────────────────────" )
            .addField("Permis Voiture:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .addField("PPA (Léger / Lourd):", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpiijamess_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Jason [Succès].");
    }
    
    // -> Inventaire RP de Antonio.

    if (message.content === prefix + "rp-i Antonio"){
        message.delete();
        var rpiijameess_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/5/1544808418-person-male.png")
            .addField("Voici l'inventaire de Antonio :", "─────────────────────" )
            .addField("Permis Voiture:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .addField("PPA (Léger / Lourd):", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpiijameess_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Antonio [Succès].");
    }



});

bot.login(process.env.TOKEN);
