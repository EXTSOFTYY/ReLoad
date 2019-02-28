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
                .setThumbnail("http://image.noelshack.com/fichiers/2018/51/5/1545394316-logoo.png")
                .setAuthor("ExtaziaRP", "http://image.noelshack.com/fichiers/2018/51/5/1545394316-logoo.png")
                .setDescription("Sondage :")
                .addField("Seras-tu disponible à la session RP de 15h00 ?!", "Répondez ci-dessous grace aux émojis.")
                .addField(" ⌛ : ", " Je serais en retard.")
                .addField(" ✅ : ", " Je serais disponible.")
                .addField(" ❎ : ", "  Je serais indisponible.")
                .setColor('#CC2EFA')
                .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
                .setTimestamp()
            message.channel.send(sondagerp15h_embed)
            .then(function (message) {
                message.react("⌛")
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
                .setThumbnail("http://image.noelshack.com/fichiers/2018/51/5/1545394316-logoo.png")
                .setAuthor("ExtaziaRP", "http://image.noelshack.com/fichiers/2018/51/5/1545394316-logoo.png")
                .setDescription("Sondage :")
                .addField("Seras-tu disponible à la session RP de 21h00 ?!", "Répondez ci-dessous grace aux émojis.")
                .addField(" ⌛ : ", " Je serais en retard.")
                .addField(" ✅ : ", " Je serais disponible.")
                .addField(" ❎ : ", "  Je serais indisponible.")
                .setColor('#CC2EFA')
                .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
                .setTimestamp()
            message.channel.send(sondagerp21h_embed)
            .then(function (message) {
                message.react("⌛")
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
            .setThumbnail("https://zupimages.net/up/19/08/zt96.jpg")
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
    
    // -> Visa RP de Harry.

    if (message.content === prefix + "rp-c Harry Trzchernov"){
        message.delete();
        var rpcharry_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/07/hhx9.jpg")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Trzchernov" )
            .addField("Prénom:", "-> Harry" )
            .addField("Date de naissance:", "-> 01 février 1991" )
            .addField("Nationalité", "-> Russe" )
            .addField("Lieux de naissance:", "-> Moscou" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("copyright ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcharry_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Harry Trzchernov [Succès].");
    }
    
    // -> Visa RP de Alex.

    if (message.content === prefix + "rp-c Alex Calmant"){
        message.delete();
        var rpcalex_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/02/ofmn.jpeg")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Calmant" )
            .addField("Prénom:", "-> Alex" )
            .addField("Date de naissance:", "-> 02 octobre 1998" )
            .addField("Nationalité", "-> Belge" )
            .addField("Lieux de naissance:", "-> Namur" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("copyright ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcalex_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Alex Calmant [Succès].");
    }
    
    // -> Visa RP de Pablo.

    if (message.content === prefix + "rp-c Pablo Cannor"){
        message.delete();
        var rpccannor_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/07/vkj4.jpg")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Cannor" )
            .addField("Prénom:", "-> Pablo" )
            .addField("Date de naissance:", "-> 02 octobre 1989" )
            .addField("Nationalité", "-> Colombien" )
            .addField("Lieux de naissance:", "-> Bogota" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("copyright ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpccannor_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Pablo Cannor [Succès].");
    }
    
    // -> Visa RP de Tony.

    if (message.content === prefix + "rp-c Tony Rodriguez"){
        message.delete();
        var rpctony_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/02/ofmn.jpeg")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Rodriguez" )
            .addField("Prénom:", "-> Tony" )
            .addField("Date de naissance:", "-> 03 mai 1968" )
            .addField("Nationalité", "-> Américain" )
            .addField("Lieux de naissance:", "-> Mexico" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("copyright ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpctony_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Tony Rodriguez [Succès].");
    }
    
    // -> Visa RP de James.

    if (message.content === prefix + "rp-c James Rodriguez"){
        message.delete();
        var rpctonymm_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/02/ofmn.jpeg")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Rodriguez" )
            .addField("Prénom:", "-> James" )
            .addField("Date de naissance:", "-> 19 septembre 1982" )
            .addField("Nationalité", "-> Américain" )
            .addField("Lieux de naissance:", "-> Mexico" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("copyright ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpctonymm_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c James Rodriguez [Succès].");
    }
    
    // -> Visa RP de Arthur.

    if (message.content === prefix + "rp-c Arthur Calmant"){
        message.delete();
        var rpcarthur_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/02/ofmn.jpeg")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Calmant" )
            .addField("Prénom:", "-> Arthur" )
            .addField("Date de naissance:", "-> 03 juillet 1995" )
            .addField("Nationalité", "-> Belge" )
            .addField("Lieux de naissance:", "-> Liège" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("copyright ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcarthur_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Arthur Calmant [Succès].");
    }
    
    // -> Visa RP de Jason.

    if (message.content === prefix + "rp-c Jason Calmant"){
        message.delete();
        var rpcjason_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/02/ofmn.jpeg")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Calmant" )
            .addField("Prénom:", "-> Jason" )
            .addField("Date de naissance:", "-> 17 janvier 1990" )
            .addField("Nationalité", "-> Belge" )
            .addField("Lieux de naissance:", "-> Liège" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("copyright ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcjason_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Jason Calmant [Succès].");
    }
    
    // -> Visa RP de Math.

    if (message.content === prefix + "rp-c Math Mohrez"){
        message.delete();
        var rpcmath_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/02/ofmn.jpeg")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Mohrez" )
            .addField("Prénom:", "-> Math" )
            .addField("Date de naissance:", "-> 16 décembre 1998" )
            .addField("Nationalité", "-> Française" )
            .addField("Lieux de naissance:", "-> Lyon" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("copyright ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcmath_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Math Mohrez [Succès].");
    }
    
    // -> Visa RP de Bill.

    if (message.content === prefix + "rp-c Bill Fallen"){
        message.delete();
        var rpcbill_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/02/ofmn.jpeg")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Fallen" )
            .addField("Prénom:", "-> Bill" )
            .addField("Date de naissance:", "-> 14 novembre 1999" )
            .addField("Nationalité", "-> Américaine" )
            .addField("Lieux de naissance:", "-> Las Vegas" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("copyright ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcbill_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Bill Fallen [Succès].");
    }
    
    // -> Visa RP de Thibault.

    if (message.content === prefix + "rp-c Thibault Savastano"){
        message.delete();
        var rpcthibault_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/02/ofmn.jpeg")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Savastano" )
            .addField("Prénom:", "-> Thibault" )
            .addField("Date de naissance:", "-> 15 octobre 1990" )
            .addField("Nationalité", "-> Italien" )
            .addField("Lieux de naissance:", "-> Aoste" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("copyright ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcthibault_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Thibault Savastano [Succès].");
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
            .setThumbnail("https://zupimages.net/up/19/08/zt96.jpg")
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

    // -> Inventaire RP de Brisse

    if (message.content === prefix + "rp-i Brisse Denisse"){
        message.delete();
        var rpibrisse_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/04/r3fx.jpg")
            .addField("Voici l'inventaire de Brisse Denisse:", "─────────────────────" )
            .addField("Permis Voiture:", "-> :white_check_mark:  " )
            .addField("Permis Moto:", "-> :white_check_mark:  " )
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
            .addField("Permis Moto:", "-> :white_check_mark:  " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:    ─   :negative_squared_cross_mark: " )
            .addField("PPA:", "-> :white_check_mark: " )
            .setFooter("copyright ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpiantonio_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Antonio Mantel [Succès].");
    }
    
    // -> Inventaire RP de Favelas

    if (message.content === prefix + "rp-i Favelas Bangbang"){
        message.delete();
        var rpifavelas_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail(" https://zupimages.net/up/19/02/ofmn.jpeg ")
            .addField("Voici l'inventaire de Favelas Bangbang:", "─────────────────────" )
            .addField("Permis Voiture:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Moto:", "-> :white_check_mark:  " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:    ─   :negative_squared_cross_mark: " )
            .addField("PPA:", "-> :negative_squared_cross_mark: " )
            .setFooter("copyright ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpifavelas_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Favelas Bangbang [Succès].");
    }
    
    // -> Inventaire RP de Bryan

    if (message.content === prefix + "rp-i Bryan Smith"){
        message.delete();
        var rpibryan_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail(" https://zupimages.net/up/19/02/ofmn.jpeg ")
            .addField("Voici l'inventaire de Bryan Smith:", "─────────────────────" )
            .addField("Permis Voiture:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:    ─   :negative_squared_cross_mark: " )
            .addField("PPA:", "-> :negative_squared_cross_mark: " )
            .setFooter("copyright ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpibryan_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Bryan Smith [Succès].");
    }
    
    // -> Inventaire RP de Harry

    if (message.content === prefix + "rp-i Harry Trzchernov"){
        message.delete();
        var rpiharry_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail(" https://zupimages.net/up/19/07/hhx9.jpg ")
            .addField("Voici l'inventaire de Harry Trzchernov:", "─────────────────────" )
            .addField("Permis Voiture:", "-> :white_check_mark:  " )
            .addField("Permis Moto:", "-> :white_check_mark:  " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:    ─   :negative_squared_cross_mark: " )
            .addField("PPA:", "-> :negative_squared_cross_mark: " )
            .setFooter("copyright ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpiharry_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Harry Trzchernov [Succès].");
    }
    
    // -> Inventaire RP de Alex

    if (message.content === prefix + "rp-i Alex Calmant"){
        message.delete();
        var rpialexx_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail(" https://zupimages.net/up/19/02/ofmn.jpeg ")
            .addField("Voici l'inventaire de Alex Calmant:", "─────────────────────" )
            .addField("Permis Voiture:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:    ─   :negative_squared_cross_mark: " )
            .addField("PPA:", "-> :negative_squared_cross_mark: " )
            .setFooter("copyright ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpialexx_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Alex Calmant [Succès].");
    }
    
    // -> Inventaire RP de Pablo

    if (message.content === prefix + "rp-i Pablo Cannor"){
        message.delete();
        var rpicannor_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail(" https://zupimages.net/up/19/07/vkj4.jpg ")
            .addField("Voici l'inventaire de Pablo Cannor:", "─────────────────────" )
            .addField("Permis Voiture:", "-> :white_check_mark:  " )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:    ─   :negative_squared_cross_mark: " )
            .addField("PPA:", "-> :white_check_mark: " )
            .setFooter("copyright ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpicannor_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Pablo Cannor [Succès].");
    }
    
    // -> Inventaire RP de Tony

    if (message.content === prefix + "rp-i Tony Rodriguez"){
        message.delete();
        var rpitonyy_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail(" https://zupimages.net/up/19/02/ofmn.jpeg ")
            .addField("Voici l'inventaire de Tony Rodriguez:", "─────────────────────" )
            .addField("Permis Voiture:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:    ─   :negative_squared_cross_mark: " )
            .addField("PPA:", "-> :negative_squared_cross_mark: " )
            .setFooter("copyright ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpitonyy_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Tony Rodriguez [Succès].");
    }
    
    // -> Inventaire RP de James

    if (message.content === prefix + "rp-i James Rodriguez"){
        message.delete();
        var rpitonyy_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail(" https://zupimages.net/up/19/02/ofmn.jpeg ")
            .addField("Voici l'inventaire de James Rodriguez:", "─────────────────────" )
            .addField("Permis Voiture:", "-> :white_check_mark:  " )
            .addField("Permis Moto:", "-> :white_check_mark:  " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:    ─   :negative_squared_cross_mark: " )
            .addField("PPA:", "-> :white_check_mark: " )
            .setFooter("copyright ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpitonyy_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i James Rodriguez [Succès].");
    }
    
    // -> Inventaire RP de Arthur

    if (message.content === prefix + "rp-i Arthur Calmant"){
        message.delete();
        var rpiarthur_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail(" https://zupimages.net/up/19/02/ofmn.jpeg ")
            .addField("Voici l'inventaire de Arthur Calmant:", "─────────────────────" )
            .addField("Permis Voiture:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:    ─   :negative_squared_cross_mark: " )
            .addField("PPA:", "-> :negative_squared_cross_mark: " )
            .setFooter("copyright ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpiarthur_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Arthur Calmant [Succès].");
    }
    
    // -> Inventaire RP de Jason

    if (message.content === prefix + "rp-i Jason Calmant"){
        message.delete();
        var rpijason_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail(" https://zupimages.net/up/19/02/ofmn.jpeg ")
            .addField("Voici l'inventaire de Jason Calmant:", "─────────────────────" )
            .addField("Permis Voiture:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:    ─   :negative_squared_cross_mark: " )
            .addField("PPA:", "-> :negative_squared_cross_mark: " )
            .setFooter("copyright ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpijason_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Jason Calmant [Succès].");
    }
    
    // -> Inventaire RP de Math

    if (message.content === prefix + "rp-i Math Mohrez"){
        message.delete();
        var rpimath_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail(" https://zupimages.net/up/19/02/ofmn.jpeg ")
            .addField("Voici l'inventaire de Math Mohrez:", "─────────────────────" )
            .addField("Permis Voiture:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:    ─   :negative_squared_cross_mark: " )
            .addField("PPA:", "-> :negative_squared_cross_mark: " )
            .setFooter("copyright ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpimath_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Math Mohrez [Succès].");
    }
    
    // -> Inventaire RP de Bill

    if (message.content === prefix + "rp-i Bill Fallen'"){
        message.delete();
        var rpibill_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail(" https://zupimages.net/up/19/02/ofmn.jpeg ")
            .addField("Voici l'inventaire de Bill Fallen:", "─────────────────────" )
            .addField("Permis Voiture:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:    ─   :negative_squared_cross_mark: " )
            .addField("PPA:", "-> :negative_squared_cross_mark: " )
            .setFooter("copyright ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpibill_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Bill Fallen [Succès].");
    }
    
    // -> Inventaire RP de Thibault

    if (message.content === prefix + "rp-i Thibault Savastano"){
        message.delete();
        var rpithibault_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail(" https://zupimages.net/up/19/02/ofmn.jpeg ")
            .addField("Voici l'inventaire de Thibault Savastano:", "─────────────────────" )
            .addField("Permis Voiture:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:    ─   :negative_squared_cross_mark: " )
            .addField("PPA:", "-> :negative_squared_cross_mark: " )
            .setFooter("copyright ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpithibault_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Thibault Savastano [Succès].");
    }

});

bot.login(process.env.TOKEN);
