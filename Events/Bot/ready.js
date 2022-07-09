const Discord = require("discord.js");
const Event = require("../../Structure/Event");

module.exports = new Event('ready', async bot => {
    console.log(`${bot.user.username} | En Ligne sur: ${bot.guilds.cache.size} serveur(s) !`);
    console.log(bot.guilds.cache.map(g => `${g.name} | ${g.id} | ${g.memberCount}, `).join("\n"));

// ==================================================================

    const statuses = [
        'hi',
    ]
    let i = 0
    setInterval(() => {
        bot.user.setActivity(statuses[i], {type: 'STREAMING', url: 'https://www.twitch.tv/kabex_'})
        i = ++i % statuses.length
    }, 5000);

// ==================================================================

    setInterval(() => {
        bot.channels.cache.get("980929057145372706").setName(`👒・Membres : ${bot.guilds.cache.first().memberCount}`)
        bot.channels.cache.get("980929675486445648").setName(`🔮・Boosts : ${bot.guilds.cache.first().premiumSubscriptionCount}`)
    }, 7000)
// ==================================================================

    let Embed = new Discord.MessageEmbed()
    .setColor("ffefd5")
    .setTitle("Rôles de notifications")
    .setThumbnail(bot.user.displayAvatarURL({dynamic: true}))
    .setDescription(`Bonjour, vous pouvez ci-dessous choisir un rôle parmi ceux proposés :\n\n\`🎉\` <@&980930676738129940>: Rôle de notification pour les *__Giveaways__* !\n\`📢\` <@&980937460261466225>: Rôle de notification pour les *__Annonces__*  !\n\`🖌️\` <@&980937476271128586>: Rôle de notification pour les *__Création__*  !\n\`📨\` <@&980937587600523304>: Rôle de notification pour les *__Publicités__*  !`)
    .setTimestamp()
    .setFooter("")

// ==================================================================

    const menu = new Discord.MessageActionRow().addComponents(new Discord.MessageSelectMenu()
    .setCustomId("menu")
    .setMaxValues(4)
    .setMinValues(0)
    .setPlaceholder("Nous attendons votre choix !")
    .addOptions([{label: "Giveaways", description: "Rôle de notification pour les Giveaways !", emoji: "🎉", value: "giveaway"}, {label: "Annonces", description: "Rôle de notification pour les Annonces !", emoji: "📢", value: "annonce"}, {label: "Creations", description: "Rôle de notification pour les Création !", emoji: "🖌️", value: "creation"}, {label: "Publicitées", description: "Rôle de notification pour les Publicités !", emoji: "📨", value: "pub"}]))

    let channel = bot.channels.cache.get("980937726394257478")
    try {
        await channel.bulkDelete(100)
    } catch (err) {}

    let msg = await channel.send({embeds: [Embed], components: [menu]})

    const filter = async() => true;
    const collector = msg.createMessageComponentCollector({filter})

// ==================================================================

    collector.on("collect", async menu => {

        let giveawayrole = channel.guild.roles.cache.get("980930676738129940")
        let annoncerole = channel.guild.roles.cache.get("980937460261466225")
        let creationrole = channel.guild.roles.cache.get("980937476271128586")
        let pubrole = channel.guild.roles.cache.get("980937587600523304")

// ==================================================================

        for(let i = 0; i < menu.values.length; i++) {
            if(menu.values[i] === "giveaway") menu.member.roles.add(giveawayrole.id)
            if(menu.values[i] === "annonce") menu.member.roles.add(annoncerole.id)
            if(menu.values[i] === "creation") menu.member.roles.add(creationrole.id)
            if(menu.values[i] === "pub") menu.member.roles.add(pubrole.id)
        }

        if(menu.member.roles.cache.has(annoncerole.id) && !menu.values.includes("annonce")) menu.member.roles.remove(annoncerole.id)
        if(menu.member.roles.cache.has(giveawayrole.id) && !menu.values.includes("giveaway")) menu.member.roles.remove(giveawayrole.id)
        if(menu.member.roles.cache.has(creationrole.id) && !menu.values.includes("creation")) menu.member.roles.remove(creationrole.id)
        if(menu.member.roles.cache.has(pubrole.id) && !menu.values.includes("pub")) menu.member.roles.remove(pubrole.id)

        menu.reply({content: `\`Rôles de Notification :\` Vos rôles ont bien été mis à jour !`, ephemeral: true})
    })

// ==================================================================

    let Embed2 = new Discord.MessageEmbed()
    .setColor("ffefd5")
    .setTitle("Ouvrir un Ticket")
    .setThumbnail(bot.user.displayAvatarURL({dynamic: true}))
    .setDescription(`Veuillez choisir le type de ticket que vous souhaitez ouvrir :\n\n \`📚\`**Ticket Aide:** Ticket pour tout types de *__Question__* !\n\`🎓\` **Ticket Recrutement:** Ticket pour postuler à être *__Staff__* !\n\`📕\` **Ticket Illégal:** Ticket pour reprendre une *__Organisation/Gang__* !\n\`📗\` **Ticket Légal** Ticket pour reprendre une *__Entreprise__* !\n\`⛔\` **Ticket Plainte:** Ticket plainte envers un *__Staff/Joueur__* !\n\`🛒\` **Ticket Boutique:** Ticket pour toute question liée a la *__Boutique__* !`)
    .setTimestamp()
    .setFooter("")
// ==================================================================
    const menu2 = new Discord.MessageActionRow().addComponents(new Discord.MessageSelectMenu()
    .setCustomId("menu2")
    .setMaxValues(1)
    .setMinValues(0)
    .setPlaceholder("Nous attendons votre choix !")
    .addOptions([{label: "Ticket Aide", description: "", emoji: "📚", value: "aide"}, {label: "Ticket Recrutements", description: "", emoji: "🎓", value: "recrutement"}, {label: "Ticket Illégal", description: "", emoji: "📕", value: "illégal"}, {label: "Ticket Légal", description: "", emoji: "📗", value: "légal"}, {label: "Ticket Plainte", description: "", emoji: "⛔", value: "plainte"}, {label: "Ticket Boutique", description: "", emoji: "🛒", value: "boutique"}]))

    // ==================================================================

    let channel2 = bot.channels.cache.get("980938138824355870")
    try {
        await channel2.bulkDelete(100)
    } catch (err) {}

    let msg2 = await channel2.send({embeds: [Embed2], components: [menu2]})

    const filter2 = async() => true;
    const collector2 = msg2.createMessageComponentCollector({filter2})

// ==================================================================

    let Embed3 = new Discord.MessageEmbed()
    .setColor("ffefd5")
    .setTitle("Règlement")
    .setThumbnail(bot.user.displayAvatarURL({dynamic: true}))
    .setDescription(`
    **1. Soyez respectueux**
    > Vous devez respecter tous les utilisateurs, peu importe votre goût pour eux. Traiter
    > les autres de la façon dont vous voulez être traité.
    
    **2. Aucun langage inapproprié**
    > L’utilisation de grossièretés devrait être réduite au minimum. Toutefois, tout 
    > langage désobligeant envers un utilisateur est interdit.
    
    **3. Aucun Spam**
    > Ne pas envoyer beaucoup de petits messages les uns après les autres. Ne pas
    > perturber le chat par le spamming.
    
    **4. Aucun matériel et contenue pornographique/adulte ou tout autre contenu de la NSFW**
    > Il s’agit d’un serveur communautaire et non destiné à partager ce type de matériel.
    
    **5. Aucune publicité**
    > Nous ne tolérons aucune publicité, que ce soit pour d’autres communautés ou pour
    > d’autres groupes. Vous pouvez publier votre contenu dans le canal média s’il est
    > pertinent et fournit une valeur réelle (vidéo/art)
    
    **6. Pas de noms offensants ni de photos de profil**
    > On vous demandera de changer votre nom ou votre photo si le personnel les juge
    > inappropriés.
    
    **7. Pillage de serveurs**
    > Les raids ou les mentions de raids ne sont pas autorisés.
    
    **8. Menaces directes et indirectes**
    > Les menaces à d’autres utilisateurs de DDoS, Death, DoX, abus et autres menaces malveillantes sont absolument interdites et interdites.
    
    **Les administrateurs et les modos mettront en sourdine/Kick ou Ban les personnes qui iront à l'encontre du règlement Si vous vous sentez maltraité par un administrateur, faite un ticket nous résoudrons le problème. **
    
    *Votre présence sur ce serveur implique d’accepter ces règles, y compris toutes les autres modifications. Des changements peuvent être apportés en tout temps sans préavis; il vous incombe de le vérifier régulièrement. *`)
    .setTimestamp()
    .setFooter("")

    const btn = new Discord.MessageActionRow().addComponents(new Discord.MessageButton()
    .setCustomId('valid')
    .setLabel('Valider le Règlement')
    .setEmoji('')
    .setStyle('SUCCESS'),
    )
// ==================================================================

    let channel3 = bot.channels.cache.get("980938262405349467")
    try {
        await channel3.bulkDelete(100)
    } catch (err) {}

    let msg3 = await channel3.send({embeds: [Embed3], components: [btn]})

    const filter3 = async() => true;
    const collector3 = msg3.createMessageComponentCollector({filter3})
})
// ==================================================================