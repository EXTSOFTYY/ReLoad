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
    member.guild.channels.find("name", "【🔒】logs").send(`[BOT ExtaziaRP] LOGS -> :checkered_flag: <@${member.user.id}> vient de rejoindre le serveur discord d'ExtaziaRP!`)
})

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "【🔒】logs").send(`[BOT ExtaziaRP] LOGS -> :checkered_flag: <@${member.user.id}> vient de quitter le serveur discord qu'il meurt en enfer!`)
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
            .addField("[BOT ExtaziaRP] - Carte d'identité:", "-> /rp-c [<Prénom Nom RP>] pour afficher la carte d'identité d'un personnage RP.")
            .addField("[BOT ExtaziaRP] - L'inventaire:", "-> /rp-i [<Prénom Nom RP>] pour afficher l'inventaire d'un personnage RP.")
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

    if (message.content === prefix + "rp-c Guillaume Popa"){
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
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Guillaume Popa[Succès].");
    }

    // -> Visa RP de Calvin.

    if (message.content === prefix + "rp-c Calvin Cole"){
        message.delete();
        var rpcguillaumee_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/01/iy6z.png")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Cole" )
            .addField("Prénom:", "-> Calvin" )
            .addField("Date de naissance:", "-> 11 janvier 1999" )
            .addField("Nationalité", "-> Américain" )
            .addField("Lieux de naissance:", "-> Los Santos" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcguillaumee_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Calvin Cole [Succès].");
    }
    
     // -> Visa RP de Jay.

    if (message.content === prefix + "rp-c Jay Brown"){
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
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Jay Brown [Succès].");
    }
    
    // -> Visa RP de Juan.
    
    if (message.content === prefix + "rp-c Juan Garcia"){
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
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Juan Garcia [Succès].");
    }
    
    // -> Visa RP de Guy.
    
    if (message.content === prefix + "rp-c Guy Hart"){
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
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Guy Hart [Succès].");
    }
    
    // -> Visa RP de Lucas.
    
    if (message.content === prefix + "rp-c Lucas Ford"){
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
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Lucas Ford [Succès].");
    }
    
    // -> Visa RP de Romain.
    
    if (message.content === prefix + "rp-c Romain Lroumain"){
        message.delete();
        var rpcayoub_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/01/7qsw.png")
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
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Romain Lroumain [Succès].");
    }

    // -> Visa RP de Bryan.
    
    if (message.content === prefix + "rp-c Bryan Johnson"){
        message.delete();
        var rpcjonny_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/5/1544808418-person-male.png")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Johnson" )
            .addField("Prénom:", "-> Bryan" )
            .addField("Date de naissance:", "-> 14 mai 1996" )
            .addField("Nationalité", "-> Americain" )
            .addField("Lieux de naissance:", "-> Chicago" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcjonny_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Bryan Johnson [Succès].");
    }

    // -> Visa RP de Brisse.
    
    if (message.content === prefix + "rp-c Brisse Denisse"){
        message.delete();
        var rpcbrisse_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/02/jq5b.png")
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
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Brisse Denisse[Succès].");
    }

    // -> Visa RP de Walk.
    
    if (message.content === prefix + "rp-c Walk Booster"){
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
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Walk Booster [Succès].");
    }

    // -> Visa RP de Kad.
    
    if (message.content === prefix + "rp-c Kad Illaq"){
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
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Kad Illaq [Succès].");
    }

    // -> Visa RP de James.
    
    if (message.content === prefix + "rp-c James Skofild"){
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
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c James Skofild [Succès].");
    }

    // -> Visa RP de Favelas.
    
    if (message.content === prefix + "rp-c Favelas Bangueur"){
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
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Favelas Bangueur[Succès].");
    }
    
    // -> Visa RP de Anthony.
    
    if (message.content === prefix + "rp-c Anthony Slay"){
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
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Anthony Slay [Succès].");
    }
    
    // -> Visa RP de Brandon.
    
    if (message.content === prefix + "rp-c Brandon Skofild"){
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
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Brandon Skofild [Succès].");
    }
    
    // -> Visa RP de Antonio.
    
    if (message.content === prefix + "rp-c Antonio Perazzi"){
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
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Antonio Perazzi [Succès].");
    }
    
    // -> Visa RP de Karim.
    
    if (message.content === prefix + "rp-c Karim Zehma"){
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
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Karim Zehma [Succès].");
    }
    
    // -> Visa RP de Jack.
    
    if (message.content === prefix + "rp-c Jack Mafiosi"){
        message.delete();
        var rpcfzaaaveeilas_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/5/1544808418-person-male.png")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Mafiosi" )
            .addField("Prénom:", "-> Jack" )
            .addField("Date de naissance:", "-> 20 avril 1985" )
            .addField("Nationalité", "-> Italien" )
            .addField("Lieux de naissance:", "-> Naple" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcfzaaaveeilas_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Jack Mafiosi [Succès].");
    }
    
    // -> Visa RP de Jules.
    
    if (message.content === prefix + "rp-c Jules Voulot"){
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
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Jules Voulot [Succès].");
    }
    
    // -> Visa RP de Pablo.
    
    if (message.content === prefix + "rp-c Pablo Scoth"){
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
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Pablo Scoth [Succès].");
    }
    
    // -> Visa RP de Yanis.
    
    if (message.content === prefix + "rp-c Yanis Méné"){
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
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Yanis Méné [Succès].");
    }
    
    // -> Visa RP de Mehdi.
    
    if (message.content === prefix + "rp-c Mehdi Ooredoo"){
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
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Mehdi Ooredoo [Succès].");
    }
    
    // -> Visa RP de Mike.
    
    if (message.content === prefix + "rp-c Mike Marshall"){
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
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Mike Marshall [Succès].");
    }
    
    // -> Visa RP de David.
    
    if (message.content === prefix + "rp-c David Coleman"){
        message.delete();
        var rpcdavid_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/01/e1er.png")
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
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c David Coleman [Succès].");
    }
    
    // -> Visa RP de Germain.
    
    if (message.content === prefix + "rp-c Germain Marie"){
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
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Germain Marie [Succès].");
    }

    // -> Visa RP de Enzo.
    
    if (message.content === prefix + "rp-c Enzo Tinken"){
        message.delete();
        var rpcenzo_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/01/h2fq.png")
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
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Enzo Tinken [Succès].");
    }
    
    // -> Visa RP de Élisa.
    
    if (message.content === prefix + "rp-c Élisa Watson"){
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
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Élisa Watson [Succès].");
    }

    // -> Visa RP de Alejandro.
    
    if (message.content === prefix + "rp-c Alejandro Don Cheto"){
        message.delete();
        var rpcalejandro_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/5/1544808418-person-male.png")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Don Cheto " )
            .addField("Prénom:", "-> Alejandro" )
            .addField("Date de naissance:", "-> 21 février 1976" )
            .addField("Nationalité", "-> Mexicain" )
            .addField("Lieux de naissance:", "-> Mexico" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcalejandro_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Alejandro Don Cheto [Succès].");
    }

    // -> Visa RP de Pablo.
    
    if (message.content === prefix + "rp-c Pablo Don Cheto"){
        message.delete();
        var rpcpablodon_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/5/1544808418-person-male.png")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Don Cheto " )
            .addField("Prénom:", "-> Pablo" )
            .addField("Date de naissance:", "-> 28 octobre 1997" )
            .addField("Nationalité", "-> Mexicain" )
            .addField("Lieux de naissance:", "-> Mexico" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcpablodon_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Pablo Don Cheto [Succès].");
    }

    // -> Visa RP de Katchan.
    
    if (message.content === prefix + "rp-c Katchan Bakugo"){
        message.delete();
        var rpckatchan_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/5/1544808418-person-male.png")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Bakugo " )
            .addField("Prénom:", "-> Katchan" )
            .addField("Date de naissance:", "-> 27 mai 1998" )
            .addField("Nationalité", "-> Français" )
            .addField("Lieux de naissance:", "-> Bordeaux" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpckatchan_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Katchan Bakugo [Succès].");
    }

    // -> Visa RP de Aly.
    
    if (message.content === prefix + "rp-c Aly Gatares"){
        message.delete();
        var rpcaly_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/5/1544808418-person-male.png")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Gatares " )
            .addField("Prénom:", "-> Aly" )
            .addField("Date de naissance:", "-> 15 juin 1995" )
            .addField("Nationalité", "-> Français" )
            .addField("Lieux de naissance:", "-> Beauvais" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcaly_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Aly Gatares [Succès].");
    }
    
    































































    // -> Inventaire RP

    // -> Inventaire RP de Guillaume

    if (message.content === prefix + "rp-i Guillaume Popa"){
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
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Guillaume Popa [Succès].");
    }

    // -> Inventaire RP de Calvin

    if (message.content === prefix + "rp-i Calvin Cole"){
        message.delete();
        var rpicalvin_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/01/iy6z.png")
            .addField("Voici l'inventaire de Calvin :", "─────────────────────" )
            .addField("Permis Voiture:", "-> :white_check_mark: " )
            .addField("Permis Moto:", "-> :white_check_mark: " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .addField("PPA:", "-> :white_check_mark:" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpicalvin_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Calvin Cole [Succès].");
    }
    
    // -> Inventaire RP de Jay.

    if (message.content === prefix + "rp-i Jay Brown"){
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
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Jay Brown[Succès].");
    }
    
    // -> Inventaire RP de Juan.

    if (message.content === prefix + "rp-i Juan Garcia"){
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
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Juan Garcia [Succès].");
    }
    
    // -> Inventaire RP de Guy.

    if (message.content === prefix + "rp-i Guy Hart"){
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
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Guy Hart [Succès].");
    }
    
    // -> Inventaire RP de Lucas.

    if (message.content === prefix + "rp-i Lucas Ford"){
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
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Lucas Ford [Succès].");
    }
    
    // -> Inventaire RP de Romain.

    if (message.content === prefix + "rp-i Romain Lroumain"){
        message.delete();
        var rpiayoub_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/01/7qsw.png")
            .addField("Voici l'inventaire de Romain :", "─────────────────────" )
            .addField("Permis Voiture:", "-> :white_check_mark:" )
            .addField("Permis Moto:", "-> :white_check_mark: " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .addField("PPA:", "-> :negative_squared_cross_mark:" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpiayoub_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Romain Lroumain [Succès].");
    }

    // -> Inventaire RP de Bryan.

    if (message.content === prefix + "rp-i Bryan Johnson"){
        message.delete();
        var rpijonny_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/18/52/810v.png")
            .addField("Voici l'inventaire de Bryan :", "─────────────────────" )
            .addField("Permis Voiture:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .addField("PPA:", "-> :negative_squared_cross_mark:" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpijonny_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Bryan Johnson [Succès].");
    }

    // -> Inventaire RP de Brisse.

    if (message.content === prefix + "rp-i Brisse Denisse"){
        message.delete();
        var rpibrisse_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/02/jq5b.png")
            .addField("Voici l'inventaire de Brisse :", "─────────────────────" )
            .addField("Permis Voiture:", "-> :white_check_mark:" )
            .addField("Permis Moto:", "-> :white_check_mark:" )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .addField("PPA:", "-> :negative_squared_cross_mark:" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpibrisse_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Brisse Denisse [Succès].");
    }

    // -> Inventaire RP de Walk.

    if (message.content === prefix + "rp-i Walk Booster"){
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
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Walk Booster [Succès].");
    }

    // -> Inventaire RP de Kad.

    if (message.content === prefix + "rp-i Kad Illaq"){
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
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Kad Illaq [Succès].");
    }

    // -> Inventaire RP de James.

    if (message.content === prefix + "rp-i James Skofild"){
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
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i James Skofild [Succès].");
    }

    // -> Inventaire RP de Favelas.

    if (message.content === prefix + "rp-i Favelas Bangueur"){
        message.delete();
        var rpifavelas_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/5/1544808418-person-male.png")
            .addField("Voici l'inventaire de Favelas :", "─────────────────────" )
            .addField("Permis Voiture:", "-> :white_check_mark:" )
            .addField("Permis Moto:", "-> :white_check_mark: " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .addField("PPA:", "-> :white_check_mark:" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpifavelas_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Favelas Bangueur[Succès].");
    }
    
    // -> Inventaire RP de Anthony.

    if (message.content === prefix + "rp-i Anthony Slay"){
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
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Anthony Slay [Succès].");
    }
    
    // -> Inventaire RP de Brandon.

    if (message.content === prefix + "rp-i Brandon Skofild"){
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
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Brandon Skofild [Succès].");
    }
    
    // -> Inventaire RP de Antonio.

    if (message.content === prefix + "rp-i Antonio Perazzi"){
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
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Antonio Perazzi [Succès].");
    }
    
    // -> Inventaire RP de Karim.

    if (message.content === prefix + "rp-i Karim Zehma"){
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
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Karim Zehma [Succès].");
    }
    
    // -> Inventaire RP de Jack.

    if (message.content === prefix + "rp-i Jack Mafiosi"){
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
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Jack Mafiosi [Succès].");
    }
    
    // -> Inventaire RP de Jules.

    if (message.content === prefix + "rp-i Jules Voulot"){
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
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Jules Voulot [Succès].");
    }
    
    // -> Inventaire RP de Pablo.

    if (message.content === prefix + "rp-i Pablo Scoth"){
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
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Pablo Scoth [Succès].");
    }
    
    // -> Inventaire RP de Yanis.

    if (message.content === prefix + "rp-i Yanis Méné"){
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
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Yanis Méné [Succès].");
    }
    
    // -> Inventaire RP de Mehdi.

    if (message.content === prefix + "rp-i Mehdi Ooredoo"){
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
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Mehdi Ooredoo [Succès].");
    }
    
    // -> Inventaire RP de Mike.

    if (message.content === prefix + "rp-i Mike Marshall"){
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
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Mike Marshall [Succès].");
    }
    
    // -> Inventaire RP de David.

    if (message.content === prefix + "rp-i David Coleman"){
        message.delete();
        var rpidavid_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/01/e1er.png")
            .addField("Voici l'inventaire de David :", "─────────────────────" )
            .addField("Permis Voiture:", "->  :negative_squared_cross_mark:" )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .addField("PPA:", "-> :negative_squared_cross_mark:" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpidavid_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i David Coleman [Succès].");
    }
    
    // -> Inventaire RP de Germain.

    if (message.content === prefix + "rp-i Germain Marie"){
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
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Germain Marie [Succès].");
    }
    
    // -> Inventaire RP de Enzo.

    if (message.content === prefix + "rp-i Enzo Tinken"){
        message.delete();
        var rpienzo_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/01/h2fq.png")
            .addField("Voici l'inventaire de Enzo :", "─────────────────────" )
            .addField("Permis Voiture:", "->  :negative_squared_cross_mark:" )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .addField("PPA:", "-> :negative_squared_cross_mark:" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpienzo_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Enzo Tinken[Succès].");
    }

    // -> Inventaire RP de Élisa.

    if (message.content === prefix + "rp-i Élisa Watson"){
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
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Élisa Watson [Succès].");
    }
    
    // -> Inventaire RP de Alejandro.

    if (message.content === prefix + "rp-i Alejandro Don Cheto"){
        message.delete();
        var rpialejandro_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/5/1544808418-person-male.png")
            .addField("Voici l'inventaire de Alejandro :", "─────────────────────" )
            .addField("Permis Voiture:", "->  :negative_squared_cross_mark:" )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .addField("PPA:", "-> :negative_squared_cross_mark:" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpialejandro_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Alejandro Don Cheto [Succès].");
    }

    // -> Inventaire RP de Pablo.

    if (message.content === prefix + "rp-i Pablo Don Cheto"){
        message.delete();
        var rpialejandropablo_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/5/1544808418-person-male.png")
            .addField("Voici l'inventaire de Alejandro :", "─────────────────────" )
            .addField("Permis Voiture:", "->  :negative_squared_cross_mark:" )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .addField("PPA:", "-> :negative_squared_cross_mark:" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpialejandropablo_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Pablo Don Cheto [Succès].");
    }

    // -> Inventaire RP de Katchan.

    if (message.content === prefix + "rp-i Katchan Bakugo"){
        message.delete();
        var rpikatchan_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/5/1544808418-person-male.png")
            .addField("Voici l'inventaire de Katchan :", "─────────────────────" )
            .addField("Permis Voiture:", "->  :white_check_mark:" )
            .addField("Permis Moto:", "-> :white_check_mark:" )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .addField("PPA:", "-> :negative_squared_cross_mark:" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpikatchan_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Katchan Bakugo [Succès].");
    }

    // -> Inventaire RP de Aly.

    if (message.content === prefix + "rp-i Aly Gatares"){
        message.delete();
        var rpialy_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/50/5/1544808418-person-male.png")
            .addField("Voici l'inventaire de Aly :", "─────────────────────" )
            .addField("Permis Voiture:", "->  :negative_squared_cross_mark:" )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark:" )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:   ─   :negative_squared_cross_mark:" )
            .addField("PPA:", "-> :negative_squared_cross_mark:" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpialy_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Aly Gatares [Succès].");
    }



});

bot.login(process.env.TOKEN);
