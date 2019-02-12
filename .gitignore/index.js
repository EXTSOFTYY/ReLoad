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
            console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur n'ayant pas la permission demande la commande -> /sondagerp-21h [Succès].");
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
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Guillaume Popa [Succès].");
    }

    // -> Visa RP de Jules.

    if (message.content === prefix + "rp-c Jules Voulot"){
        message.delete();
        var rpcjules_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/04/bw80.jpg")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Voulot" )
            .addField("Prénom:", "-> Jules" )
            .addField("Date de naissance:", "-> 9 décembre 1994" )
            .addField("Nationalité", "-> Française" )
            .addField("Lieux de naissance:", "-> Vosges" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcjules_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Jules Voulot [Succès].");
    }

    // -> Visa RP de Evan.

    if (message.content === prefix + "rp-c Evan Guibert"){
        message.delete();
        var rpcevan_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/06/8qx7.jpg")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Guibert" )
            .addField("Prénom:", "-> Evan" )
            .addField("Date de naissance:", "-> 11 novembre 1990" )
            .addField("Nationalité", "-> Française" )
            .addField("Lieux de naissance:", "-> Seclin" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcevan_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Evan Guibert [Succès].");
    }

    // -> Visa RP de Mike.

    if (message.content === prefix + "rp-c Mike Marshall"){
        message.delete();
        var rpcmike_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/04/qu2d.jpg")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Marshall" )
            .addField("Prénom:", "-> Mike" )
            .addField("Date de naissance:", "-> 10 octobre 1998" )
            .addField("Nationalité", "-> Américaine" )
            .addField("Lieux de naissance:", "-> Los Angeles" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcmike_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Mike Marshall [Succès].");
    }

    // -> Visa RP de Kad.

    if (message.content === prefix + "rp-c Kad Illaq"){
        message.delete();
        var rpckad_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/04/8klc.jpg")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Illaq" )
            .addField("Prénom:", "-> Kad" )
            .addField("Date de naissance:", "-> 28 mars 1998" )
            .addField("Nationalité", "-> Américaine" )
            .addField("Lieux de naissance:", "-> Las Vegas" )
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
            .setThumbnail("https://zupimages.net/up/19/04/xwm3.jpg")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Skofild" )
            .addField("Prénom:", "-> James" )
            .addField("Date de naissance:", "-> 10 mars 1995" )
            .addField("Nationalité", "-> Américaine" )
            .addField("Lieux de naissance:", "-> New York" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcjames_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c James Skofild [Succès].");
    }

    // -> Visa RP de Brisse.

    if (message.content === prefix + "rp-c Brisse Denisse"){
        message.delete();
        var rpcbrisse_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/04/r3fx.jpg")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Denisse" )
            .addField("Prénom:", "-> Brice" )
            .addField("Date de naissance:", "-> 30 juin 1998" )
            .addField("Nationalité", "-> Française" )
            .addField("Lieux de naissance:", "-> Lille" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcbrisse_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Brisse Denisse [Succès].");
    }

    // -> Visa RP de Guy.

    if (message.content === prefix + "rp-c Guy Hart"){
        message.delete();
        var rpcguy_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/02/ofmn.jpeg")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Hart" )
            .addField("Prénom:", "-> Guy" )
            .addField("Date de naissance:", "-> 08 juin 1992" )
            .addField("Nationalité", "-> Allemand" )
            .addField("Lieux de naissance:", "-> Berlin" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcguy_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Guy Hart [Succès].");
    }

    // -> Visa RP de Walk.

    if (message.content === prefix + "rp-c Walk Booster"){
        message.delete();
        var rpcwalk_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/04/6i5o.jpg")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Booster" )
            .addField("Prénom:", "-> Walk" )
            .addField("Date de naissance:", "-> 04 maï 1990" )
            .addField("Nationalité", "-> Américaine" )
            .addField("Lieux de naissance:", "-> Miami" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcwalk_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Walk Booster [Succès].");
    }

    // -> Visa RP de Mehdi.

    if (message.content === prefix + "rp-c Mehdi Yacoub"){
        message.delete();
        var rpcmehdi_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/05/7xoy.jpg")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Yacoub" )
            .addField("Prénom:", "-> Mehdi" )
            .addField("Date de naissance:", "-> 24 décembre 1992" )
            .addField("Nationalité", "-> Française" )
            .addField("Lieux de naissance:", "-> France" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcmehdi_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Mehdi Yacoub [Succès].");
    }

    // -> Visa RP de Bryan.

    if (message.content === prefix + "rp-c Bryan Johnson"){
        message.delete();
        var rpcbryan_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/05/af9a.jpg")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Johnson" )
            .addField("Prénom:", "-> Bryan" )
            .addField("Date de naissance:", "-> 14 fevrier 1996" )
            .addField("Nationalité", "-> Américaine" )
            .addField("Lieux de naissance:", "-> Chicago" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcbryan_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Bryan Johnson [Succès].");
    }
    
    // -> Visa RP de Matheo.
 
    if (message.content === prefix + "rp-c Matheo Tieks"){
        message.delete();
        var rpcmatheo_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/04/gzw2.jpg")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Tieks" )
            .addField("Prénom:", "-> Matheo" )
            .addField("Date de naissance:", "-> 20 juin 1999" )
            .addField("Nationalité", "-> Américian" )
            .addField("Lieux de naissance:", "-> Las Vegas" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcmatheo_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Matheo Tieks [Succès].");
    }
    
    // -> Visa RP de Aly.
 
    if (message.content === prefix + "rp-c Aly Gatares"){
        message.delete();
        var rpcmatheo_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/04/2jrj.jpg")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Gatares" )
            .addField("Prénom:", "-> Aly" )
            .addField("Date de naissance:", "-> 25 mars 1995" )
            .addField("Nationalité", "-> Français" )
            .addField("Lieux de naissance:", "-> Beauvais" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcmatheo_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Aly Gatares [Succès].");
    }
    
    // -> Visa RP de James.

    if (message.content === prefix + "rp-c James Rodriguez"){
        message.delete();
        var rpcjameis_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/04/n7lv.jpg")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Rodríguez" )
            .addField("Prénom:", "-> James" )
            .addField("Date de naissance:", "-> 19 septembre 1982" )
            .addField("Nationalité", "-> Américaine" )
            .addField("Lieux de naissance:", "-> Mexique" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("copyright ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcjameis_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c James Rodriguez [Succès].");
    }
    
    // -> Visa RP de Zarko.

    if (message.content === prefix + "rp-c Zarko Markovic"){
        message.delete();
        var rpczarko_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/04/8t6o.jpg")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Markovic" )
            .addField("Prénom:", "-> Zarko" )
            .addField("Date de naissance:", "-> 11 janvier 2000" )
            .addField("Nationalité", "-> Serbe" )
            .addField("Lieux de naissance:", "-> Belgrade" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("copyright ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpczarko_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Zarko Markovic [Succès].");
    }
    
    // -> Visa RP de Sergeï .

    if (message.content === prefix + "rp-c Sergeï Patronov"){
        message.delete();
        var rpcserge_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/02/ofmn.jpeg")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Patronov" )
            .addField("Prénom:", "-> Sergeï" )
            .addField("Date de naissance:", "-> 10 décembre 1988" )
            .addField("Nationalité", "-> Russe" )
            .addField("Lieux de naissance:", "-> Moscou" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("copyright ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcserge_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Sergeï Patronov [Succès].");
    }
    
    // -> Visa RP de Kardo .

    if (message.content === prefix + "rp-c Kardo Scobar"){
        message.delete();
        var rpckardo_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/02/ofmn.jpeg")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Scobar" )
            .addField("Prénom:", "-> Kardo" )
            .addField("Date de naissance:", "-> 4 novembre 1994" )
            .addField("Nationalité", "-> Mexicaine" )
            .addField("Lieux de naissance:", "-> Guadalajara" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("copyright ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpckardo_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Kardo Scobar [Succès].");
    }
    
    // -> Visa RP de Marvin .

    if (message.content === prefix + "rp-c Marvin Savalle"){
        message.delete();
        var rpcmarvin_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/02/ofmn.jpeg")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Savalle" )
            .addField("Prénom:", "-> Marvin" )
            .addField("Date de naissance:", "-> 14 août 1991" )
            .addField("Nationalité", "-> Espagnol" )
            .addField("Lieux de naissance:", "-> Madrid" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("copyright ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcmarvin_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Marvin Savalle [Succès].");
    }
    
    // -> Visa RP de Anthony .

    if (message.content === prefix + "rp-c Anthony Savalle"){
        message.delete();
        var rpcanthony_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/02/ofmn.jpeg")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Savalle" )
            .addField("Prénom:", "-> Anthony" )
            .addField("Date de naissance:", "-> 10 août 1995" )
            .addField("Nationalité", "-> Espagnol" )
            .addField("Lieux de naissance:", "-> Madrid" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("copyright ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcanthony_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Anthony Savalle [Succès].");
    }
    
    // -> Visa RP de Marko.

    if (message.content === prefix + "rp-c Marko Markovic"){
        message.delete();
        var rpcmarkovic_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/06/z5ng.jpg")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Markovic" )
            .addField("Prénom:", "-> Marko" )
            .addField("Date de naissance:", "-> 23 mai 1996" )
            .addField("Nationalité", "-> Serbe" )
            .addField("Lieux de naissance:", "-> Belgrade" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("copyright ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
         message.channel.send(rpcmarkovic_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Marko Markovic [Succès].");
    }
    
    // -> Visa RP de Malik.

    if (message.content === prefix + "rp-c Malik Nzonzi"){
        message.delete();
        var rpcmalik_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/02/ofmn.jpeg")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Nzonzi" )
            .addField("Prénom:", "-> Malik" )
            .addField("Date de naissance:", "-> 28 novembre 1993" )
            .addField("Nationalité", "-> Français" )
            .addField("Lieux de naissance:", "-> Marseille" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("copyright ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcmalik_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Malik Nzonzi [Succès].");
    }
    
    // -> Visa RP de Antonio.

    if (message.content === prefix + "rp-c Antonio Mantel"){
        message.delete();
        var rpcantonio_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/02/ofmn.jpeg")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Mantel" )
            .addField("Prénom:", "-> Antonio" )
            .addField("Date de naissance:", "-> 28 juin 1990" )
            .addField("Nationalité", "-> Français" )
            .addField("Lieux de naissance:", "-> St Denis" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("copyright ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcantonio_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Antonio Mantel [Succès].");
    }
    
    // -> Visa RP de Théo.

    if (message.content === prefix + "rp-c Théo Mantel"){
        message.delete();
        var rpctheo_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/02/ofmn.jpeg")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Mantel" )
            .addField("Prénom:", "-> Théo" )
            .addField("Date de naissance:", "-> 26 août 1994" )
            .addField("Nationalité", "-> Français" )
            .addField("Lieux de naissance:", "-> St Denis" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("copyright ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpctheo_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Théo Mantel [Succès].");
    }
    
    // -> Visa RP de Alex.

    if (message.content === prefix + "rp-c Alex Genki"){
        message.delete();
        var rpcalex_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/02/ofmn.jpeg")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Genki" )
            .addField("Prénom:", "-> Alex" )
            .addField("Date de naissance:", "-> 11 avril 1994" )
            .addField("Nationalité", "-> Belge" )
            .addField("Lieux de naissance:", "-> Charleroi" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("copyright ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcalex_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Alex Genki [Succès].");
    }
    
    // -> Visa RP de Benjamin.

    if (message.content === prefix + "rp-c Benjamin Stark"){
        message.delete();
        var rpcbenjamin_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/02/ofmn.jpeg")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Stark" )
            .addField("Prénom:", "-> Benjamin" )
            .addField("Date de naissance:", "-> 13 juillet 1994" )
            .addField("Nationalité", "-> Belge" )
            .addField("Lieux de naissance:", "-> Mouscron" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("copyright ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcbenjamin_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Benjamin Stark [Succès].");
    }
    
    // -> Visa RP de Favelas.

    if (message.content === prefix + "rp-c Favelas Bangbang"){
        message.delete();
        var rpcfavelas_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/02/ofmn.jpeg")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Favelas" )
            .addField("Prénom:", "-> Bangbang" )
            .addField("Date de naissance:", "-> 17 avril 1994" )
            .addField("Nationalité", "-> Brésiliene" )
            .addField("Lieux de naissance:", "-> Rio De Janeiro" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("copyright ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcfavelas_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Favelas Bangbang [Succès].");
    }

    
    





    
    
    































































    // -> Inventaire RP

    // -> Inventaire RP de Guillaume

    if (message.content === prefix + "rp-i Guillaume Popa"){
        message.delete();
        var rpiguillaume_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/18/52/q0ts.png")
            .addField("Voici l'inventaire de Guillaume Popa:", "─────────────────────" )
            .addField("Permis Voiture:", "-> :white_check_mark: " )
            .addField("Permis Moto:", "-> :white_check_mark: " )
            .addField("Permis Bateau:", "-> :white_check_mark:" )
            .addField("Permis Avion / Hélicoptère:", "-> :white_check_mark:   ─   :white_check_mark:" )
            .addField("PPA:", "-> :white_check_mark:" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpiguillaume_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Guillaume Popa [Succès].");
    }

    // -> Inventaire RP de Jules

    if (message.content === prefix + "rp-i Jules Voulot"){
        message.delete();
        var rpijules_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/04/bw80.jpg")
            .addField("Voici l'inventaire de Jules Voulot:", "─────────────────────" )
            .addField("Permis Voiture:", "-> :white_check_mark:  " )
            .addField("Permis Moto:", "-> :white_check_mark:  " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:    ─   :negative_squared_cross_mark: " )
            .addField("PPA:", "-> :white_check_mark: " )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpijules_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Jules Voulot [Succès].");
    }

    // -> Inventaire RP de Evan

    if (message.content === prefix + "rp-i Evan Guibert"){
        message.delete();
        var rpievan_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/06/8qx7.jpg")
            .addField("Voici l'inventaire de Evan Guibert:", "─────────────────────" )
            .addField("Permis Voiture:", "-> :white_check_mark: " )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:    ─   :negative_squared_cross_mark: " )
            .addField("PPA:", "-> :negative_squared_cross_mark: " )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpievan_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Evan Guibert [Succès].");
    }

    // -> Inventaire RP de Mike

    if (message.content === prefix + "rp-i Mike Marshall"){
        message.delete();
        var rpimike_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/04/qu2d.jpg")
            .addField("Voici l'inventaire de Mike Marshall:", "─────────────────────" )
            .addField("Permis Voiture:", "-> :white_check_mark:  " )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:    ─   :negative_squared_cross_mark: " )
            .addField("PPA:", "-> :white_check_mark: " )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpimike_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Mike Marshall [Succès].");
    }

    // -> Inventaire RP de Kad

    if (message.content === prefix + "rp-i Kad Illaq"){
        message.delete();
        var rpikad_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/04/8klc.jpg")
            .addField("Voici l'inventaire de Kad Illaq:", "─────────────────────" )
            .addField("Permis Voiture:", "-> :white_check_mark:  " )
            .addField("Permis Moto:", "-> :white_check_mark:  " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:    ─   :negative_squared_cross_mark: " )
            .addField("PPA:", "-> :negative_squared_cross_mark: " )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpikad_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Kad Illaq [Succès].");
    }

    // -> Inventaire RP de James

    if (message.content === prefix + "rp-i James Skofild"){
        message.delete();
        var rpijames_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/04/xwm3.jpg")
            .addField("Voici l'inventaire de James Skofild:", "─────────────────────" )
            .addField("Permis Voiture:", "-> :white_check_mark:  " )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:    ─   :negative_squared_cross_mark: " )
            .addField("PPA:", "-> :negative_squared_cross_mark: " )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpijames_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i James Skofild [Succès].");
    }

    // -> Inventaire RP de Brisse

    if (message.content === prefix + "rp-i Brisse Denisse"){
        message.delete();
        var rpibrisse_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/04/r3fx.jpg")
            .addField("Voici l'inventaire de Brisse Denisse:", "─────────────────────" )
            .addField("Permis Voiture:", "-> :white_check_mark:  " )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:    ─   :negative_squared_cross_mark: " )
            .addField("PPA:", "-> :negative_squared_cross_mark: " )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpibrisse_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Brisse Denisse [Succès].");
    }

    // -> Inventaire RP de Guy

    if (message.content === prefix + "rp-i Guy Hart"){
        message.delete();
        var rpiguy_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail(" https://zupimages.net/up/19/02/ofmn.jpeg ")
            .addField("Voici l'inventaire de Guy Hart:", "─────────────────────" )
            .addField("Permis Voiture:", "-> :white_check_mark:  " )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:    ─   :negative_squared_cross_mark: " )
            .addField("PPA:", "-> :white_check_mark: " )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpiguy_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Guy Hart [Succès].");
    }

    // -> Inventaire RP de Walk

    if (message.content === prefix + "rp-i Walk Booster"){
        message.delete();
        var rpiwalk_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/04/6i5o.jpg")
            .addField("Voici l'inventaire de Walk Booster:", "─────────────────────" )
            .addField("Permis Voiture:", "-> :white_check_mark:  " )
            .addField("Permis Moto:", "-> :white_check_mark:  " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:    ─   :negative_squared_cross_mark: " )
            .addField("PPA:", "-> :white_check_mark: " )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpiwalk_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Walk Booster [Succès].");
    }

    // -> Inventaire RP de Mehdi

    if (message.content === prefix + "rp-i Mehdi Yacoub"){
        message.delete();
        var rpimehdi_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/05/7xoy.jpg")
            .addField("Voici l'inventaire de Mehdi Yacoub:", "─────────────────────" )
            .addField("Permis Voiture:", "-> :white_check_mark:  " )
            .addField("Permis Moto:", "-> :white_check_mark:  " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:    ─   :negative_squared_cross_mark: " )
            .addField("PPA:", "-> :white_check_mark: " )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpimehdi_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Mehdi Yacoub [Succès].");
    }


    // -> Inventaire RP de Bryan

    if (message.content === prefix + "rp-i Bryan Johnson"){
        message.delete();
        var rpibryan_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail(" https://zupimages.net/up/19/05/af9a.jpg ")
            .addField("Voici l'inventaire de Bryan Johnson:", "─────────────────────" )
            .addField("Permis Voiture:", "-> :white_check_mark: " )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:    ─   :negative_squared_cross_mark: " )
            .addField("PPA:", "-> :white_check_mark: " )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpibryan_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Bryan Johnson [Succès].");
    }
    
    // -> Inventaire RP de Matheo
 
    if (message.content === prefix + "rp-i Matheo Tieks"){
        message.delete();
        var rpimatheo_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/04/gzw2.jpg")
            .addField("Voici l'inventaire de Matheo Tieks:", "─────────────────────" )
            .addField("Permis Voiture:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:    ─   :negative_squared_cross_mark: " )
            .addField("PPA:", "-> :negative_squared_cross_mark: " )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpimatheo_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Matheo Tieks [Succès].");
    }
    
    // -> Inventaire RP de Aly
 
    if (message.content === prefix + "rp-i Aly Gatares"){
        message.delete();
        var rpialy_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/04/2jrj.jpg")
            .addField("Voici l'inventaire de Aly Gatares:", "─────────────────────" )
            .addField("Permis Voiture:", "-> :white_check_mark: " )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:    ─   :negative_squared_cross_mark: " )
            .addField("PPA:", "-> :white_check_mark: " )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpialy_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Aly Gatares [Succès].");
    }
    
    // -> Inventaire RP de James

    if (message.content === prefix + "rp-i James Rodriguez"){
        message.delete();
        var rpijamese_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/04/n7lv.jpg")
            .addField("Voici l'inventaire de James Rodríguez:", "─────────────────────" )
            .addField("Permis Voiture:", "-> :white_check_mark: " )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:    ─   :negative_squared_cross_mark: " )
            .addField("PPA:", "-> :negative_squared_cross_mark: " )
            .setFooter("copyright ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpijamese_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i James Rodríguez [Succès].");
    }
    
    // -> Inventaire RP de Zarko

    if (message.content === prefix + "rp-i Zarko Markovic"){
        message.delete();
        var rpizarko_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/04/8t6o.jpg")
            .addField("Voici l'inventaire de Zarko Marković:", "─────────────────────" )
            .addField("Permis Voiture:", "-> :white_check_mark: " )
            .addField("Permis Moto:", "-> :white_check_mark:  " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:    ─   :negative_squared_cross_mark: " )
            .addField("PPA:", "-> :white_check_mark: " )
            .setFooter("copyright ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpizarko_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Zarko Markovic [Succès].");
    }
    
    // -> Inventaire RP de Sergeï

    if (message.content === prefix + "rp-i Sergeï Patronov"){
        message.delete();
        var rpiserge_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail(" https://zupimages.net/up/19/02/ofmn.jpeg ")
            .addField("Voici l'inventaire de Sergeï Patronov:", "─────────────────────" )
            .addField("Permis Voiture:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:    ─   :negative_squared_cross_mark: " )
            .addField("PPA:", "-> :negative_squared_cross_mark: " )
            .setFooter("copyright ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpiserge_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Sergeï Patronov [Succès].");
    }
    
    // -> Inventaire RP de Kardo

    if (message.content === prefix + "rp-i Kardo Scobar"){
        message.delete();
        var rpikardo_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail(" https://zupimages.net/up/19/02/ofmn.jpeg ")
            .addField("Voici l'inventaire de Kardo Scobar:", "─────────────────────" )
            .addField("Permis Voiture:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:    ─   :negative_squared_cross_mark: " )
            .addField("PPA:", "-> :negative_squared_cross_mark: " )
            .setFooter("copyright ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpikardo_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Kardo Scobar [Succès].");
    }
    
    // -> Inventaire RP de Marvin

    if (message.content === prefix + "rp-i Marvin Savalle"){
        message.delete();
        var rpimarvin_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail(" https://zupimages.net/up/19/02/ofmn.jpeg ")
            .addField("Voici l'inventaire de Marvin Savalle:", "─────────────────────" )
            .addField("Permis Voiture:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:    ─   :negative_squared_cross_mark: " )
            .addField("PPA:", "-> :negative_squared_cross_mark: " )
            .setFooter("copyright ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpimarvin_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Marvin Savalle [Succès].");
    }
    
    // -> Inventaire RP de Anthony

    if (message.content === prefix + "rp-i Anthony Savalle"){
        message.delete();
        var rpianthony_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail(" https://zupimages.net/up/19/02/ofmn.jpeg ")
            .addField("Voici l'inventaire de Anthony Savalle:", "─────────────────────" )
            .addField("Permis Voiture:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:    ─   :negative_squared_cross_mark: " )
            .addField("PPA:", "-> :negative_squared_cross_mark: " )
            .setFooter("copyright ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpianthony_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Anthony Savalle [Succès].");
    }
    
    // -> Inventaire RP de Marko

    if (message.content === prefix + "rp-i Marko Markovic"){
        message.delete();
        var rpimarkovic_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail(" https://zupimages.net/up/19/06/z5ng.jpg ")
            .addField("Voici l'inventaire de Marko Markovic:", "─────────────────────" )
            .addField("Permis Voiture:", "-> :white_check_mark: " )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:    ─   :negative_squared_cross_mark: " )
            .addField("PPA:", "-> :negative_squared_cross_mark: " )
            .setFooter("copyright ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpimarkovic_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Marko Markovic [Succès].");
    }
    
    // -> Inventaire RP de Malik

    if (message.content === prefix + "rp-i Malik Nzonzi"){
        message.delete();
        var rpimalik_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail(" https://zupimages.net/up/19/02/ofmn.jpeg ")
            .addField("Voici l'inventaire de Malik Nzonzi:", "─────────────────────" )
            .addField("Permis Voiture:", "-> :white_check_mark: " )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:    ─   :negative_squared_cross_mark: " )
            .addField("PPA:", "-> :negative_squared_cross_mark: " )
            .setFooter("copyright ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpimalik_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Malik Nzonzi [Succès].");
    }
    
    // -> Inventaire RP de Antonio

    if (message.content === prefix + "rp-i Antonio Mantel"){
        message.delete();
        var rpiantonio_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail(" https://zupimages.net/up/19/02/ofmn.jpeg ")
            .addField("Voici l'inventaire de Antonio Mantel:", "─────────────────────" )
            .addField("Permis Voiture:", "-> :white_check_mark: " )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:    ─   :negative_squared_cross_mark: " )
            .addField("PPA:", "-> :white_check_mark: " )
            .setFooter("copyright ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpiantonio_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Antonio Mantel [Succès].");
    }
    
    // -> Inventaire RP de Théo

    if (message.content === prefix + "rp-i Théo Mantel"){
        message.delete();
        var rpitheo_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail(" https://zupimages.net/up/19/02/ofmn.jpeg ")
            .addField("Voici l'inventaire de Théo Mantel:", "─────────────────────" )
            .addField("Permis Voiture:", "-> :white_check_mark: " )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:    ─   :negative_squared_cross_mark: " )
            .addField("PPA:", "-> :negative_squared_cross_mark: " )
            .setFooter("copyright ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpitheo_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Théo Mantel [Succès].");
    }
    
    // -> Inventaire RP de Alex

    if (message.content === prefix + "rp-i Alex Genki"){
        message.delete();
        var rpialex_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail(" https://zupimages.net/up/19/02/ofmn.jpeg ")
            .addField("Voici l'inventaire de Alex Genki:", "─────────────────────" )
            .addField("Permis Voiture:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:    ─   :negative_squared_cross_mark: " )
            .addField("PPA:", "-> :negative_squared_cross_mark: " )
            .setFooter("copyright ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpialex_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Alex Genki [Succès].");
    }
    
    // -> Inventaire RP de Benjamin

    if (message.content === prefix + "rp-i Benjamin Stark"){
        message.delete();
        var rpibenjamin_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail(" https://zupimages.net/up/19/02/ofmn.jpeg ")
            .addField("Voici l'inventaire de Benjamin Stark:", "─────────────────────" )
            .addField("Permis Voiture:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:    ─   :negative_squared_cross_mark: " )
            .addField("PPA:", "-> :negative_squared_cross_mark: " )
            .setFooter("copyright ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpibenjamin_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Benjamin Stark [Succès].");
    }
    
    // -> Inventaire RP de Favelas

    if (message.content === prefix + "rp-i Favelas Bangbang"){
        message.delete();
        var rpifavelas_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail(" https://zupimages.net/up/19/02/ofmn.jpeg ")
            .addField("Voici l'inventaire de Favelas Bangbang:", "─────────────────────" )
            .addField("Permis Voiture:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:    ─   :negative_squared_cross_mark: " )
            .addField("PPA:", "-> :negative_squared_cross_mark: " )
            .setFooter("copyright ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpifavelas_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Favelas Bangbang [Succès].");
    }
    
    

});

bot.login(process.env.TOKEN);
