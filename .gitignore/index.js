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
            console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur n'ayant pas la permission demande la commande -> /sondagerp-16h [Succès].");
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
            .setThumbnail("https://zupimages.net/up/18/52/q0ts.png")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Popa" )
            .addField("Prénom:", "-> Guillaume" )
            .addField("Date de naissance:", "-> 9 mars 1993" )
            .addField("Nationalité", "-> Belge" )
            .addField("Lieux de naissance:", "-> Bruxelles" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcguillaume_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Guillaume [Succès].");
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
            .setThumbnail("https://zupimages.net/up/18/52/fnw6.png")
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
    
    // -> Visa RP de Romain.
    
    if (message.content === prefix + "rp-c Romain"){
        message.delete();
        var rpcayoub_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/5/1544808418-person-male.png")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Lroumain" )
            .addField("Prénom:", "-> Romain" )
            .addField("Date de naissance:", "-> 15 janvier 1988" )
            .addField("Nationalité", "-> Roumain" )
            .addField("Lieux de naissance:", "-> Bucarest" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcayoub_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Romain [Succès].");
    }

    // -> Visa RP de Tony.
    
    if (message.content === prefix + "rp-c Tony"){
        message.delete();
        var rpcjonny_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/18/52/810v.png")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Guardioli" )
            .addField("Prénom:", "-> Tony" )
            .addField("Date de naissance:", "-> 13 août 1986" )
            .addField("Nationalité", "-> Italien" )
            .addField("Lieux de naissance:", "-> Naples" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcjonny_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Tony [Succès].");
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
            .setThumbnail("https://zupimages.net/up/18/52/h9xa.png")
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
            .setThumbnail("https://zupimages.net/up/18/52/j5ua.png")
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
            .setThumbnail("https://zupimages.net/up/18/52/c5w6.png")
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
            .setThumbnail("https://zupimages.net/up/18/52/9o0n.png")
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
            .setThumbnail("https://zupimages.net/up/18/52/5a27.png")
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
    
    // -> Visa RP de Karim.
    
    if (message.content === prefix + "rp-c Karim"){
        message.delete();
        var rpcfaaaveeialas_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/18/52/y05e.png")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Zehma" )
            .addField("Prénom:", "-> Karim" )
            .addField("Date de naissance:", "-> 6 mai 1993" )
            .addField("Nationalité", "-> Français" )
            .addField("Lieux de naissance:", "-> Paris" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcfaaaveeialas_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Karim [Succès].");
    }
    
    // -> Visa RP de Jack.
    
    if (message.content === prefix + "rp-c Jack"){
        message.delete();
        var rpcfzaaaveeilas_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/5/1544808418-person-male.png")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Elfastino" )
            .addField("Prénom:", "-> Jack" )
            .addField("Date de naissance:", "-> 20 avril 1985" )
            .addField("Nationalité", "-> Italien" )
            .addField("Lieux de naissance:", "-> Naple" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcfzaaaveeilas_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Jack [Succès].");
    }
    
    // -> Visa RP de Jules.
    
    if (message.content === prefix + "rp-c Jules"){
        message.delete();
        var rpcjules_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/18/52/09up.png")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Voulot" )
            .addField("Prénom:", "-> Jules" )
            .addField("Date de naissance:", "-> 9 décembre 1994" )
            .addField("Nationalité", "-> Français" )
            .addField("Lieux de naissance:", "-> Vosges" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcjules_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Jules [Succès].");
    }
    
    // -> Visa RP de Pablo.
    
    if (message.content === prefix + "rp-c Pablo"){
        message.delete();
        var rpcjuloos_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/18/52/xewt.png")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Scoth" )
            .addField("Prénom:", "-> Pablo" )
            .addField("Date de naissance:", "-> 21 mai 1994" )
            .addField("Nationalité", "-> Colombien" )
            .addField("Lieux de naissance:", "-> Medeline" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcjuloos_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Pablo [Succès].");
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
            .addField("Nationalité", "-> Français" )
            .addField("Lieux de naissance:", "-> Paris" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcyanis_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Yanis [Succès].");
    }
    
    // -> Visa RP de Mehdi.
    
    if (message.content === prefix + "rp-c Mehdi"){
        message.delete();
        var rpcyaniss_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/18/52/rh5j.png")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Ooredoo" )
            .addField("Prénom:", "-> Mehdi" )
            .addField("Date de naissance:", "-> 18 juin 1988" )
            .addField("Nationalité", "-> Tunisien" )
            .addField("Lieux de naissance:", "-> M'saken" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcyaniss_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Mehdi [Succès].");
    }
    
    // -> Visa RP de Mike.
    
    if (message.content === prefix + "rp-c Mike"){
        message.delete();
        var rpcyanisss_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/5/1544808418-person-male.png")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Marshall " )
            .addField("Prénom:", "-> Mike" )
            .addField("Date de naissance:", "-> 10 octobre 1988" )
            .addField("Nationalité", "-> Canadien" )
            .addField("Lieux de naissance:", "-> Vancouver" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcyanisss_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Mike [Succès].");
    }
    
    // -> Visa RP de David.
    
    if (message.content === prefix + "rp-c David"){
        message.delete();
        var rpcdavid_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/5/1544808418-person-male.png")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Coleman " )
            .addField("Prénom:", "-> David" )
            .addField("Date de naissance:", "-> 28 mars 1982" )
            .addField("Nationalité", "-> Français" )
            .addField("Lieux de naissance:", "-> Paris" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcdavid_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c David [Succès].");
    }
    
    // -> Visa RP de Germain.
    
    if (message.content === prefix + "rp-c Germain"){
        message.delete();
        var rpcgermain_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/5/1544808418-person-male.png")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Marie " )
            .addField("Prénom:", "-> Germain" )
            .addField("Date de naissance:", "-> 28 mars 1982" )
            .addField("Nationalité", "-> Canadien" )
            .addField("Lieux de naissance:", "-> Nunavut" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcgermain_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Germain [Succès].");
    }

    // -> Visa RP de Enzo.
    
    if (message.content === prefix + "rp-c Enzo"){
        message.delete();
        var rpcenzo_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/5/1544808418-person-male.png")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Tinken " )
            .addField("Prénom:", "-> Enzo" )
            .addField("Date de naissance:", "-> 9 août 1990" )
            .addField("Nationalité", "-> Français" )
            .addField("Lieux de naissance:", "-> Paris" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcenzo_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Enzo [Succès].");
    }
    
    // -> Visa RP de Élisa.
    
    if (message.content === prefix + "rp-c Élisa"){
        message.delete();
        var rpcelisa_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/5/1544808418-person-male.png")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Watson " )
            .addField("Prénom:", "-> Élisa" )
            .addField("Date de naissance:", "-> 18 juillet 1998" )
            .addField("Nationalité", "-> Français" )
            .addField("Lieux de naissance:", "-> Strasbourg" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcelisa_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Élisa [Succès].");
    }


















































    // -> Inventaire RP

    // -> Inventaire RP de Guillaume

    if (message.content === prefix + "rp-i Guillaume"){
        message.delete();
        var rpiguillaume_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/18/52/q0ts.png")
            .addField("Voici l'inventaire de Guillaume :", "─────────────────────" )
            .addField("Permis Voiture:", "-> :white_check_mark: " )
            .addField("Permis Moto:", "-> :white_check_mark: " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:   ─   :white_check_mark:" )
            .addField("PPA:", "-> :white_check_mark:" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpiguillaume_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Guillaume [Succès].");
    }
    
    // -> Inventaire RP de Jay.

    if (message.content === prefix + "rp-i Jay"){
        message.delete();
        var rpijay_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/51/1/1545068727-jaybrown.png")
            .addField("Voici l'inventaire de Jay :", "─────────────────────" )
            .addField("Permis Voiture:", "-> :white_check_mark: " )
            .addField("Permis Moto:", "-> :white_check_mark: " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .addField("PPA:", "-> :white_check_mark:" )
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
            .addField("PPA:", "-> :negative_squared_cross_mark:" )
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
            .setThumbnail("https://zupimages.net/up/18/52/fnw6.png")
            .addField("Voici l'inventaire de Guy :", "─────────────────────" )
            .addField("Permis Voiture:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:   ─   :white_check_mark:" )
            .addField("PPA:", "-> :white_check_mark:" )
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
            .addField("PPA:", "-> :negative_squared_cross_mark:" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpilucas_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Lucas [Succès].");
    }
    
    // -> Inventaire RP de Romain.

    if (message.content === prefix + "rp-i Romain"){
        message.delete();
        var rpiayoub_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/5/1544808418-person-male.png")
            .addField("Voici l'inventaire de Romain :", "─────────────────────" )
            .addField("Permis Voiture:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .addField("PPA:", "-> :negative_squared_cross_mark:" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpiayoub_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Romain [Succès].");
    }

    // -> Inventaire RP de Tony.

    if (message.content === prefix + "rp-i Tony"){
        message.delete();
        var rpijonny_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/18/52/810v.png")
            .addField("Voici l'inventaire de Tony :", "─────────────────────" )
            .addField("Permis Voiture:", "-> :white_check_mark:" )
            .addField("Permis Moto:", "-> :white_check_mark:" )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .addField("PPA:", "-> :white_check_mark:" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpijonny_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Tony [Succès].");
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
            .addField("PPA:", "-> :negative_squared_cross_mark:" )
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
            .setThumbnail("https://zupimages.net/up/18/52/h9xa.png")
            .addField("Voici l'inventaire de Walk :", "─────────────────────" )
            .addField("Permis Voiture:", "-> :white_check_mark:" )
            .addField("Permis Moto:", "-> :white_check_mark: " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .addField("PPA:", "-> :white_check_mark:" )
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
            .setThumbnail("https://zupimages.net/up/18/52/j5ua.png")
            .addField("Voici l'inventaire de Kad :", "─────────────────────" )
            .addField("Permis Voiture:", "-> :white_check_mark:" )
            .addField("Permis Moto:", "-> :white_check_mark: " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .addField("PPA:", "-> :white_check_mark:" )
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
            .setThumbnail("https://zupimages.net/up/18/52/c5w6.png")
            .addField("Voici l'inventaire de James :", "─────────────────────" )
            .addField("Permis Voiture:", "-> :white_check_mark:" )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .addField("PPA:", "-> :negative_squared_cross_mark:" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpijames_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i James [Succès].");
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
            .addField("PPA:", "-> :white_check_mark:" )
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
            .addField("PPA:", "-> :negative_squared_cross_mark:" )
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
            .setThumbnail("https://zupimages.net/up/18/52/9o0n.png")
            .addField("Voici l'inventaire de Brandon :", "─────────────────────" )
            .addField("Permis Voiture:", "-> :white_check_mark:" )
            .addField("Permis Moto:", "-> :white_check_mark: " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .addField("PPA:", "-> :white_check_mark:" )
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
            .addField("Permis Voiture:", "-> :white_check_mark:" )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .addField("PPA:", "-> :negative_squared_cross_mark:" )
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
            .setThumbnail("https://zupimages.net/up/18/52/5a27.png")
            .addField("Voici l'inventaire de Antonio :", "─────────────────────" )
            .addField("Permis Voiture:", "-> :white_check_mark:" )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .addField("PPA:", "-> :white_check_mark:" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpiijameess_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Antonio [Succès].");
    }
    
    // -> Inventaire RP de Karim.

    if (message.content === prefix + "rp-i Karim"){
        message.delete();
        var rpiijameeses_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/18/52/y05e.png")
            .addField("Voici l'inventaire de Karim :", "─────────────────────" )
            .addField("Permis Voiture:", "-> :white_check_mark:" )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .addField("PPA:", "-> :white_check_mark:" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpiijameeses_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Karim [Succès].");
    }
    
    // -> Inventaire RP de Jack.

    if (message.content === prefix + "rp-i Jack"){
        message.delete();
        var rpiiqjameess_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/5/1544808418-person-male.png")
            .addField("Voici l'inventaire de Jack :", "─────────────────────" )
            .addField("Permis Voiture:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Moto:", "-> :white_check_mark: " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .addField("PPA:", "-> :negative_squared_cross_mark:" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpiiqjameess_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Jack [Succès].");
    }
    
    // -> Inventaire RP de Jules.

    if (message.content === prefix + "rp-i Jules"){
        message.delete();
        var rpijules_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/18/52/09up.png")
            .addField("Voici l'inventaire de Jules :", "─────────────────────" )
            .addField("Permis Voiture:", "-> :white_check_mark:" )
            .addField("Permis Moto:", "-> :white_check_mark:" )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .addField("PPA:", "-> :white_check_mark:" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpijules_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Jules [Succès].");
    }
    
    // -> Inventaire RP de Pablo.

    if (message.content === prefix + "rp-i Pablo"){
        message.delete();
        var rpijuloes_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/18/52/xewt.png")
            .addField("Voici l'inventaire de Pablo :", "─────────────────────" )
            .addField("Permis Voiture:", "->  :white_check_mark:" )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .addField("PPA:", "->  :white_check_mark:" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpijuloes_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Pablo [Succès].");
    }
    
    // -> Inventaire RP de Yanis.

    if (message.content === prefix + "rp-i Yanis"){
        message.delete();
        var rpiyanis_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/5/1544808418-person-male.png")
            .addField("Voici l'inventaire de Yanis :", "─────────────────────" )
            .addField("Permis Voiture:", "->  :white_check_mark:" )
            .addField("Permis Moto:", "-> :white_check_mark:" )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .addField("PPA:", "->  :white_check_mark:" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpiyanis_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Yanis [Succès].");
    }
    
    // -> Inventaire RP de Mehdi.

    if (message.content === prefix + "rp-i Mehdi"){
        message.delete();
        var rpimehdi_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/18/52/rh5j.png")
            .addField("Voici l'inventaire de Mehdi :", "─────────────────────" )
            .addField("Permis Voiture:", "->  :negative_squared_cross_mark:" )
            .addField("Permis Moto:", "-> :white_check_mark:" )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .addField("PPA:", "->  :white_check_mark:" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpimehdi_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Mehdi [Succès].");
    }
    
    // -> Inventaire RP de Mike.

    if (message.content === prefix + "rp-i Mike"){
        message.delete();
        var rpimike_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/5/1544808418-person-male.png")
            .addField("Voici l'inventaire de Mike :", "─────────────────────" )
            .addField("Permis Voiture:", "->  :white_check_mark:" )
            .addField("Permis Moto:", "-> :white_check_mark:" )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .addField("PPA:", "->  :white_check_mark:" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpimike_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Mike [Succès].");
    }
    
    // -> Inventaire RP de David.

    if (message.content === prefix + "rp-i David"){
        message.delete();
        var rpidavid_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/5/1544808418-person-male.png")
            .addField("Voici l'inventaire de David :", "─────────────────────" )
            .addField("Permis Voiture:", "->  :negative_squared_cross_mark:" )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .addField("PPA:", "-> :negative_squared_cross_mark:" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpidavid_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i David [Succès].");
    }
    
    // -> Inventaire RP de Germain.

    if (message.content === prefix + "rp-i Germain"){
        message.delete();
        var rpigermain_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/5/1544808418-person-male.png")
            .addField("Voici l'inventaire de Germain :", "─────────────────────" )
            .addField("Permis Voiture:", "->  :negative_squared_cross_mark:" )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .addField("PPA:", "-> :negative_squared_cross_mark:" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpigermain_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Germain [Succès].");
    }
    
    // -> Inventaire RP de Enzo.

    if (message.content === prefix + "rp-i Enzo"){
        message.delete();
        var rpienzo_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/5/1544808418-person-male.png")
            .addField("Voici l'inventaire de Enzo :", "─────────────────────" )
            .addField("Permis Voiture:", "->  :negative_squared_cross_mark:" )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .addField("PPA:", "-> :negative_squared_cross_mark:" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpienzo_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Enzo [Succès].");
    }

    // -> Inventaire RP de Élisa.

    if (message.content === prefix + "rp-i Élisa"){
        message.delete();
        var rpielisa_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/5/1544808418-person-male.png")
            .addField("Voici l'inventaire de Élisa :", "─────────────────────" )
            .addField("Permis Voiture:", "->  :negative_squared_cross_mark:" )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .addField("PPA:", "-> :negative_squared_cross_mark:" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpielisa_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Élisa [Succès].");
    }



});

bot.login(process.env.TOKEN);
