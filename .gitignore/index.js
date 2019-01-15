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
            .setThumbnail("https://zupimages.net/up/19/02/ofmn.jpeg")
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

    // -> Visa RP de Youssef.

    if (message.content === prefix + "rp-c Youssef Ait"){
        message.delete();
        var rpcYoussef_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/02/ofmn.jpeg")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Ait" )
            .addField("Prénom:", "-> Youssef" )
            .addField("Date de naissance:", "-> 16 juillet 1990" )
            .addField("Nationalité", "-> Française" )
            .addField("Lieux de naissance:", "-> Bordeaux" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcYoussef_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Youssef Ait [Succès].");
    }

    // -> Visa RP de Mike.

    if (message.content === prefix + "rp-c Mike Marshall"){
        message.delete();
        var rpcmike_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/02/ofmn.jpeg")
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

    // -> Visa RP de David.

    if (message.content === prefix + "rp-c David Coleman"){
        message.delete();
        var rpcdavid_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/02/ofmn.jpeg")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Coleman" )
            .addField("Prénom:", "-> David" )
            .addField("Date de naissance:", "-> 28 mars 1978" )
            .addField("Nationalité", "-> Française" )
            .addField("Lieux de naissance:", "-> Paris" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcdavid_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c David Coleman [Succès].");
    }

    // -> Visa RP de Antonio.

    if (message.content === prefix + "rp-c Antonio Perazzi"){
        message.delete();
        var rpcantonio_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/02/ofmn.jpeg")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Perazzi" )
            .addField("Prénom:", "-> Antonio" )
            .addField("Date de naissance:", "-> 01 juillet 1994" )
            .addField("Nationalité", "-> Italienne" )
            .addField("Lieux de naissance:", "-> Rome" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcantonio_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Antonio Perrazi [Succès].");
    }

    // -> Visa RP de Kad.

    if (message.content === prefix + "rp-c Kad Illaq"){
        message.delete();
        var rpckad_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/02/ofmn.jpeg")
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

    // -> Visa RP de Brandon.

    if (message.content === prefix + "rp-c Brandon Skofild"){
        message.delete();
        var rpcbrandon_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/02/ofmn.jpeg")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Skofild" )
            .addField("Prénom:", "-> Brandon" )
            .addField("Date de naissance:", "-> 14 maï 1997" )
            .addField("Nationalité", "-> Américaine" )
            .addField("Lieux de naissance:", "-> Los Angeles" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcbrandon_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Brandon Skofild [Succès].");
    }

    // -> Visa RP de Élisa.

    if (message.content === prefix + "rp-c Élisa Watson"){
        message.delete();
        var rpcelisa_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/02/ofmn.jpeg")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Watson" )
            .addField("Prénom:", "-> Élisa" )
            .addField("Date de naissance:", "-> 18 juillet 1998" )
            .addField("Nationalité", "-> Américaine" )
            .addField("Lieux de naissance:", "-> New York" )
            .addField("Sexe:", "-> Féminin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcelisa_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Élisa Watson [Succès].");
    }

    // -> Visa RP de James.

    if (message.content === prefix + "rp-c James Skofild"){
        message.delete();
        var rpcjames_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/02/ofmn.jpeg")
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
            .setThumbnail("https://zupimages.net/up/19/02/ofmn.jpeg")
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

    // -> Visa RP de Rodrigo.

    if (message.content === prefix + "rp-c Rodrigo Martinez"){
        message.delete();
        var rpcjay_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/02/ofmn.jpeg")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Martinez" )
            .addField("Prénom:", "-> Rodrigo" )
            .addField("Date de naissance:", "-> 25 décembre 1997" )
            .addField("Nationalité", "-> Espagnole" )
            .addField("Lieux de naissance:", "-> Madrid" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcjay_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Rodrigo Martinez [Succès].");
    }

    // -> Visa RP de Walk.

    if (message.content === prefix + "rp-c Walk Booster"){
        message.delete();
        var rpcwalk_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/02/ofmn.jpeg")
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

    if (message.content === prefix + "rp-c Mehdi Yacoun"){
        message.delete();
        var rpcmehdi_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/02/ofmn.jpeg")
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

    // -> Visa RP de Diego.

    if (message.content === prefix + "rp-c Diego Martinez"){
        message.delete();
        var rpcdiego_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/02/ofmn.jpeg")
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
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Diego Martinez [Succès].");
    }

    // -> Visa RP de Pablo.

    if (message.content === prefix + "rp-c Pablo Don Cheto"){
        message.delete();
        var rpcpablo_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/02/ofmn.jpeg")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Don Cheto" )
            .addField("Prénom:", "-> Pablo" )
            .addField("Date de naissance:", "-> 28 octobre 1997" )
            .addField("Nationalité", "-> Mexico-Américain" )
            .addField("Lieux de naissance:", "-> Mexique" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcpablo_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Pablo Don Cheto [Succès].");
    }

    // -> Visa RP de Alejandro.

    if (message.content === prefix + "rp-c Alejandro Don Cheto"){
        message.delete();
        var rpcalejandro_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/02/ofmn.jpeg")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Don Cheto" )
            .addField("Prénom:", "-> Alejandro" )
            .addField("Date de naissance:", "-> 21 fevrier 1976" )
            .addField("Nationalité", "-> Mexico-Américain" )
            .addField("Lieux de naissance:", "-> Mexique" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcalejandro_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Alejandro Don Cheto [Succès].");
    }

    // -> Visa RP de Bryan.

    if (message.content === prefix + "rp-c Bryan Johnson"){
        message.delete();
        var rpcbryan_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/02/ofmn.jpeg")
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

    // -> Visa RP de Favelas.

    if (message.content === prefix + "rp-c Favelas Bangbang"){
        message.delete();
        var rpcfavelas_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/02/ofmn.jpeg")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Bangbang" )
            .addField("Prénom:", "-> Favelas" )
            .addField("Date de naissance:", "-> 17 avril 1994" )
            .addField("Nationalité", "-> Brésilien" )
            .addField("Lieux de naissance:", "-> Rio de Janeiro" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpcfavelas_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Bryan Johnson [Succès].");
    }

    // -> Visa RP de Katchan.
 
    if (message.content === prefix + "rp-c Katchan Bakugo"){
        message.delete();
        var rpckatchan_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail("https://zupimages.net/up/19/02/ofmn.jpeg")
            .addField("Carte d'identité :", "─────────────────────" )
            .addField("Nom:", "-> Bakugo" )
            .addField("Prénom:", "-> Katchan" )
            .addField("Date de naissance:", "-> 27 maï 1998" )
            .addField("Nationalité", "-> Française" )
            .addField("Lieux de naissance:", "-> Bordeaux" )
            .addField("Sexe:", "-> Masculin" )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpckatchan_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-c Katchan Bakugo [Succès].");
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
            .setThumbnail(" https://zupimages.net/up/19/02/ofmn.jpeg ")
            .addField("Voici l'inventaire de Jules Voulot:", "─────────────────────" )
            .addField("Permis Voiture:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:    ─   :negative_squared_cross_mark: " )
            .addField("PPA:", "-> :negative_squared_cross_mark: " )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpijules_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Jules Voulot [Succès].");
    }

    // -> Inventaire RP de Youssef

    if (message.content === prefix + "rp-i Youssef Ait"){
        message.delete();
        var rpiyoussef_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail(" https://zupimages.net/up/19/02/ofmn.jpeg ")
            .addField("Voici l'inventaire de Youssef Ait:", "─────────────────────" )
            .addField("Permis Voiture:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:    ─   :negative_squared_cross_mark: " )
            .addField("PPA:", "-> :negative_squared_cross_mark: " )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpiyoussef_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Youssef Aït [Succès].");
    }

    // -> Inventaire RP de Mike

    if (message.content === prefix + "rp-i Mike Marshall"){
        message.delete();
        var rpimike_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail(" https://zupimages.net/up/19/02/ofmn.jpeg ")
            .addField("Voici l'inventaire de Mike Marshall:", "─────────────────────" )
            .addField("Permis Voiture:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:    ─   :negative_squared_cross_mark: " )
            .addField("PPA:", "-> :negative_squared_cross_mark: " )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpimike_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Mike Marshall [Succès].");
    }

    // -> Inventaire RP de David

    if (message.content === prefix + "rp-i David Coleman"){
        message.delete();
        var rpidavid_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail(" https://zupimages.net/up/19/02/ofmn.jpeg ")
            .addField("Voici l'inventaire de David Coleman:", "─────────────────────" )
            .addField("Permis Voiture:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:    ─   :negative_squared_cross_mark: " )
            .addField("PPA:", "-> :negative_squared_cross_mark: " )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpidavid_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i David Coleman [Succès].");
    }

    // -> Inventaire RP de Antonio

    if (message.content === prefix + "rp-i Antonio Perazzi"){
        message.delete();
        var rpiantonio_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail(" https://zupimages.net/up/19/02/ofmn.jpeg ")
            .addField("Voici l'inventaire de Antonio Perazzi:", "─────────────────────" )
            .addField("Permis Voiture:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:    ─   :negative_squared_cross_mark: " )
            .addField("PPA:", "-> :negative_squared_cross_mark: " )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpiantonio_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Antonio Perazzi [Succès].");
    }

    // -> Inventaire RP de Kad

    if (message.content === prefix + "rp-i Kad Illaq"){
        message.delete();
        var rpikad_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail(" https://zupimages.net/up/19/02/ofmn.jpeg ")
            .addField("Voici l'inventaire de Kad Illaq:", "─────────────────────" )
            .addField("Permis Voiture:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:    ─   :negative_squared_cross_mark: " )
            .addField("PPA:", "-> :negative_squared_cross_mark: " )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpikad_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Kad Illaq [Succès].");
    }

    // -> Inventaire RP de Brandon

    if (message.content === prefix + "rp-i Brandon Skofild"){
        message.delete();
        var rpibrandon_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail(" https://zupimages.net/up/19/02/ofmn.jpeg ")
            .addField("Voici l'inventaire de Brandon Skofild:", "─────────────────────" )
            .addField("Permis Voiture:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:    ─   :negative_squared_cross_mark: " )
            .addField("PPA:", "-> :negative_squared_cross_mark: " )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpibrandon_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Brandon Skofild [Succès].");
    }

    // -> Inventaire RP de Elisa

    if (message.content === prefix + "rp-i Élisa Watson"){
        message.delete();
        var rpielisa_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail(" https://zupimages.net/up/19/02/ofmn.jpeg ")
            .addField("Voici l'inventaire de Élisa Watson:", "─────────────────────" )
            .addField("Permis Voiture:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:    ─   :negative_squared_cross_mark: " )
            .addField("PPA:", "-> :negative_squared_cross_mark: " )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpielisa_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Élisa Watson [Succès].");
    }

    // -> Inventaire RP de James

    if (message.content === prefix + "rp-i James Skofild"){
        message.delete();
        var rpijames_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail(" https://zupimages.net/up/19/02/ofmn.jpeg ")
            .addField("Voici l'inventaire de James Skofild:", "─────────────────────" )
            .addField("Permis Voiture:", "-> :negative_squared_cross_mark:  " )
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
            .setThumbnail(" https://zupimages.net/up/19/02/ofmn.jpeg ")
            .addField("Voici l'inventaire de Brisse Denisse:", "─────────────────────" )
            .addField("Permis Voiture:", "-> :negative_squared_cross_mark:  " )
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
            .addField("Permis Voiture:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:    ─   :negative_squared_cross_mark: " )
            .addField("PPA:", "-> :negative_squared_cross_mark: " )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpiguy_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Guy Hart [Succès].");
    }

    // -> Inventaire RP de Rodrigo

    if (message.content === prefix + "rp-i Rodrigo Martinez"){
        message.delete();
        var rpijay_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail(" https://zupimages.net/up/19/02/ofmn.jpeg ")
            .addField("Voici l'inventaire de Rodrigo Martinez:", "─────────────────────" )
            .addField("Permis Voiture:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:    ─   :negative_squared_cross_mark: " )
            .addField("PPA:", "-> :negative_squared_cross_mark: " )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpijay_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Rodrigo Martinez [Succès].");
    }

    // -> Inventaire RP de Walk

    if (message.content === prefix + "rp-i Walk Booster"){
        message.delete();
        var rpiwalk_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail(" https://zupimages.net/up/19/02/ofmn.jpeg ")
            .addField("Voici l'inventaire de Walk Booster:", "─────────────────────" )
            .addField("Permis Voiture:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:    ─   :negative_squared_cross_mark: " )
            .addField("PPA:", "-> :negative_squared_cross_mark: " )
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
            .setThumbnail(" https://zupimages.net/up/19/02/ofmn.jpeg ")
            .addField("Voici l'inventaire de Mehdi Yacoub:", "─────────────────────" )
            .addField("Permis Voiture:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:    ─   :negative_squared_cross_mark: " )
            .addField("PPA:", "-> :negative_squared_cross_mark: " )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpimehdi_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Mehdi Yacoub [Succès].");
    }

    // -> Inventaire RP de Diego

    if (message.content === prefix + "rp-i Diego Martinez"){
        message.delete();
        var rpidiego_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail(" https://zupimages.net/up/19/02/ofmn.jpeg ")
            .addField("Voici l'inventaire de Diego Martinez:", "─────────────────────" )
            .addField("Permis Voiture:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:    ─   :negative_squared_cross_mark: " )
            .addField("PPA:", "-> :negative_squared_cross_mark: " )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpidiego_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Diego Martinez [Succès].");
    }

    // -> Inventaire RP de Pablo

    if (message.content === prefix + "rp-i Pablo Don Cheto"){
        message.delete();
        var rpipablo_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail(" https://zupimages.net/up/19/02/ofmn.jpeg ")
            .addField("Voici l'inventaire de Pablo Don Cheto:", "─────────────────────" )
            .addField("Permis Voiture:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:    ─   :negative_squared_cross_mark: " )
            .addField("PPA:", "-> :negative_squared_cross_mark: " )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpipablo_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Pablo Don Cheto [Succès].");
    }

    // -> Inventaire RP de Alejandro

    if (message.content === prefix + "rp-i Alejandro Don Cheto"){
        message.delete();
        var rpialejandro_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail(" https://zupimages.net/up/19/02/ofmn.jpeg ")
            .addField("Voici l'inventaire de Alejandro Don Cheto:", "─────────────────────" )
            .addField("Permis Voiture:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:    ─   :negative_squared_cross_mark: " )
            .addField("PPA:", "-> :negative_squared_cross_mark: " )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpialejandro_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Alejandro Don Cheto [Succès].");
    }

    // -> Inventaire RP de Bryan

    if (message.content === prefix + "rp-i Bryan Johnson"){
        message.delete();
        var rpibryan_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail(" https://zupimages.net/up/19/02/ofmn.jpeg ")
            .addField("Voici l'inventaire de Bryan Johnson:", "─────────────────────" )
            .addField("Permis Voiture:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:    ─   :negative_squared_cross_mark: " )
            .addField("PPA:", "-> :negative_squared_cross_mark: " )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpibryan_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Bryan Johnson [Succès].");
    }

    // -> Inventaire RP de Favelas

    if (message.content === prefix + "rp-i Favelas Bangbang"){
        message.delete();
        var rpifavelas_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail(" https://zupimages.net/up/19/02/ofmn.jpeg ")
            .addField("Voici l'inventaire de Favelas Bangbang:", "─────────────────────" )
            .addField("Permis Voiture:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:    ─   :negative_squared_cross_mark: " )
            .addField("PPA:", "-> :negative_squared_cross_mark: " )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpifavelas_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Favelas Bangbang [Succès].");
    }

    // -> Inventaire RP de Katchan
 
    if (message.content === prefix + "rp-i Katchan Bakugo"){
        message.delete();
        var rpikatchan_embed = new Discord.RichEmbed()
            .setColor('#CC2EFA')
            .setThumbnail(" https://zupimages.net/up/19/02/ofmn.jpeg ")
            .addField("Voici l'inventaire de Katchan Bakugo:", "─────────────────────" )
            .addField("Permis Voiture:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Moto:", "-> :negative_squared_cross_mark:  " )
            .addField("Permis Bateau:", "-> :negative_squared_cross_mark: " )
            .addField("Permis Avion / Hélicoptère:", "-> :negative_squared_cross_mark:    ─   :negative_squared_cross_mark: " )
            .addField("PPA:", "-> :negative_squared_cross_mark: " )
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(rpikatchan_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /rp-i Katchan Bakugo [Succès].");
    }

});

bot.login(process.env.TOKEN);
