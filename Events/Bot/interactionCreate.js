const Discord = require("discord.js");
const transcript = require("discord-html-transcripts");
const Event = require("../../Structure/Event");

module.exports = new Event("interactionCreate", async (bot, interaction) => {


    if(interaction.isSelectMenu()) {
        
        if(interaction.values[0] === "aide") {
            let channel = await interaction.guild.channels.create(`ticket-${interaction.user.username}`, {type: "GUILD_TEXT"})
            await channel.setParent("980950499752808508")

            await channel.permissionOverwrites.create(interaction.user, {
                SEND_MESSAGES: true,
                EMBED_LINKS: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
            })
            await channel.permissionOverwrites.create("980938575812120576", {
                SEND_MESSAGES: true,
                EMBED_LINKS: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
            })
            await channel.permissionOverwrites.create(interaction.guild.roles.everyone, {
                SEND_MESSAGES: false,
                EMBED_LINKS: false,
                VIEW_CHANNEL: false,
                READ_MESSAGE_HISTORY: false
            }).then(async () => {
            let infoembed = new Discord.MessageEmbed()
            .setColor("ffefd5")
            .setTitle("Ticket d'Aide")
            .setThumbnail(bot.user.displayAvatarURL({dynamic: true}))
            .setDescription("__Bienvenue dans ton Ticket__\n *Décrit nous ton problème un staff y répondra le plus rapidement possible*")
            .setTimestamp()
            .setFooter("")

            const infobtn = new Discord.MessageActionRow().addComponents(new Discord.MessageButton()
            .setCustomId('close')
            .setLabel('Fermer le ticket')
            .setEmoji('🔒')
            .setStyle('DANGER'),
            )

            await channel.send(`${interaction.user}, <@&980938575812120576>`)
            await channel.send({embeds: [infoembed], components: [infobtn]})
            })

            await interaction.reply({content: `Votre ticket a été créé avec succès ${channel} !`, ephemeral: true})
        }

        if(interaction.values[0] === "recrutement") {
            let channel = await interaction.guild.channels.create(`ticket-${interaction.user.username}`, {type: "GUILD_TEXT"})
            await channel.setParent("980947111766003744")

            await channel.permissionOverwrites.create(interaction.user, {
                SEND_MESSAGES: true,
                EMBED_LINKS: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
            })
            await channel.permissionOverwrites.create("980947371942871091", {
                SEND_MESSAGES: true,
                EMBED_LINKS: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
            })
            await channel.permissionOverwrites.create(interaction.guild.roles.everyone, {
                SEND_MESSAGES: false,
                EMBED_LINKS: false,
                VIEW_CHANNEL: false,
                READ_MESSAGE_HISTORY: false
            }).then(async () => {
            let infoembed = new Discord.MessageEmbed()
            .setColor("ffefd5")
            .setTitle("Ticket Recrutement")
            .setThumbnail(bot.user.displayAvatarURL({dynamic: true}))
            .setDescription("__Bienvenue dans ton Ticket__\n *copiez le formulaire suivant, remplissez-le, puis mettez-le dans le ticket, un staff chargé du recrutement y répondra*\n\n*Présentation HRP:*\n*Âge :*\n*Pseudo Steam:*\n*Steam ID:*\n*Nom RolePlay:*\n*Depuis quand jouez-vous à FiveM ?:*\n*Quel serveur de jeu avez vous fréquenté ?:*\n*Disponibilités:*\n> Lundi:\n> Mardi:\n> Mercredi:\n> Jeudi:\n> Vendredi:\n> Samedi:\n> Dimanche:\n*Votre expérience en modération (nom du serveur + rang):*\n*Vos motivations:*\n*Qu'est ce que vous pouvez apporter au serveur ?:*\n*Pourquoi vous et pas un autre ?:*\n*Qualité(s):*\n*Défaut(s):*")
            .setTimestamp()
            .setFooter("")

            const infobtn = new Discord.MessageActionRow().addComponents(new Discord.MessageButton()
            .setCustomId('close')
            .setLabel('Fermer le ticket')
            .setEmoji('🔒')
            .setStyle('DANGER'),
            )

            await channel.send(`${interaction.user}, <@&980938575812120576>`)
            await channel.send({embeds: [infoembed], components: [infobtn]})
            })

            await interaction.reply({content: `Votre ticket a été créé avec succès ${channel} !`, ephemeral: true})
        }

// ==================================================================

        if(interaction.values[0] === "illégal") {
            let channel = await interaction.guild.channels.create(`ticket-${interaction.user.username}`, {type: "GUILD_TEXT"})
            await channel.setParent("980947031596093521")

            await channel.permissionOverwrites.create(interaction.user, {
                SEND_MESSAGES: true,
                EMBED_LINKS: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
            })
            await channel.permissionOverwrites.create("980947696342929449", {
                SEND_MESSAGES: true,
                EMBED_LINKS: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
            })
            await channel.permissionOverwrites.create("980947520542875728", {
                SEND_MESSAGES: true,
                EMBED_LINKS: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
            })
            await channel.permissionOverwrites.create(interaction.guild.roles.everyone, {
                SEND_MESSAGES: false,
                EMBED_LINKS: false,
                VIEW_CHANNEL: false,
                READ_MESSAGE_HISTORY: false
            }).then(async () => {
            let infoembed = new Discord.MessageEmbed()
            .setColor("ffefd5")
            .setTitle("Ticket Illégal")
            .setThumbnail(bot.user.displayAvatarURL({dynamic: true}))
            .setDescription("__Bienvenue dans ton Ticket__\n *Décrit nous ton projet de reprise ou création __d'Organisation/Gang__ le gérant illégal prendra ton ticket le plus vite possible*")
            .setTimestamp()
            .setFooter("")

            const infobtn = new Discord.MessageActionRow().addComponents(new Discord.MessageButton()
            .setCustomId('close')
            .setLabel('Fermer le ticket')
            .setEmoji('🔒')
            .setStyle('DANGER'),
            )

            await channel.send(`${interaction.user}, <@&980938575812120576>`)
            await channel.send({embeds: [infoembed], components: [infobtn]})
            })

            await interaction.reply({content: `Votre ticket a été créé avec succès ${channel} !`, ephemeral: true})
        }

// ==================================================================

        if(interaction.values[0] === "légal") {
            let channel = await interaction.guild.channels.create(`ticket-${interaction.user.username}`, {type: "GUILD_TEXT"})
            await channel.setParent("980954314040295485")

            await channel.permissionOverwrites.create(interaction.user, {
                SEND_MESSAGES: true,
                EMBED_LINKS: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
            })
            await channel.permissionOverwrites.create("980938575812120576", {
                SEND_MESSAGES: true,
                EMBED_LINKS: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
            })
            await channel.permissionOverwrites.create(interaction.guild.roles.everyone, {
                SEND_MESSAGES: false,
                EMBED_LINKS: false,
                VIEW_CHANNEL: false,
                READ_MESSAGE_HISTORY: false
            }).then(async () => {
            let infoembed = new Discord.MessageEmbed()
            .setColor("ffefd5")
            .setTitle("Ticket Légal")
            .setThumbnail(bot.user.displayAvatarURL({dynamic: true}))
            .setDescription("__Bienvenue dans ton Ticket__\n *Décrit nous ton projet de reprise ou création __d'Entreprise__ le gérant Légal prendra ton ticket le plus vite possible*")
            .setTimestamp()
            .setFooter("")

            const infobtn = new Discord.MessageActionRow().addComponents(new Discord.MessageButton()
            .setCustomId('close')
            .setLabel('Fermer le ticket')
            .setEmoji('🔒')
            .setStyle('DANGER'),
            )

            await channel.send(`${interaction.user}, <@&980938575812120576>`)
            await channel.send({embeds: [infoembed], components: [infobtn]})
            })

            await interaction.reply({content: `Votre ticket a été créé avec succès ${channel} !`, ephemeral: true})
        }

// ==================================================================

        if(interaction.values[0] === "plainte") {
            let channel = await interaction.guild.channels.create(`ticket-${interaction.user.username}`, {type: "GUILD_TEXT"})
            await channel.setParent("980954421208957030")

            await channel.permissionOverwrites.create(interaction.user, {
                SEND_MESSAGES: true,
                EMBED_LINKS: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
            })
            await channel.permissionOverwrites.create("980938575812120576", {
                SEND_MESSAGES: true,
                EMBED_LINKS: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
            })
            await channel.permissionOverwrites.create(interaction.guild.roles.everyone, {
                SEND_MESSAGES: false,
                EMBED_LINKS: false,
                VIEW_CHANNEL: false,
                READ_MESSAGE_HISTORY: false
            }).then(async () => {
            let infoembed = new Discord.MessageEmbed()
            .setColor("ffefd5")
            .setTitle("Ticket Plainte")
            .setThumbnail(bot.user.displayAvatarURL({dynamic: true}))
            .setDescription("__Bienvenue dans ton Ticket__\n *Décrit nous ton problème de la plus précise des manière possible le gérant staff prendra ton ticket le plus vite possible*")
            .setTimestamp()
            .setFooter("")

            const infobtn = new Discord.MessageActionRow().addComponents(new Discord.MessageButton()
            .setCustomId('close')
            .setLabel('Fermer le ticket')
            .setEmoji('🔒')
            .setStyle('DANGER'),
            )

            const idTicket = `${interaction.user}`

            await channel.send(`${interaction.user}, <@&980938575812120576>`)
            await channel.send({embeds: [infoembed], components: [infobtn]})
            })

            await interaction.reply({content: `Votre ticket a été créé avec succès ${channel} !`, ephemeral: true})
        }

// ==================================================================

        if(interaction.values[0] === "boutique") {
            let channel = await interaction.guild.channels.create(`ticket-${interaction.user.username}`, {type: "GUILD_TEXT"})
            await channel.setParent("981112151815106620")

            await channel.permissionOverwrites.create(interaction.user, {
                SEND_MESSAGES: true,
                EMBED_LINKS: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
            })
            await channel.permissionOverwrites.create("980938575812120576", {
                SEND_MESSAGES: true,
                EMBED_LINKS: true,
                VIEW_CHANNEL: true,
                READ_MESSAGE_HISTORY: true
            })
            await channel.permissionOverwrites.create(interaction.guild.roles.everyone, {
                SEND_MESSAGES: false,
                EMBED_LINKS: false,
                VIEW_CHANNEL: false,
                READ_MESSAGE_HISTORY: false
            }).then(async () => {
            let infoembed = new Discord.MessageEmbed()
            .setColor("ffefd5")
            .setTitle("Ticket Plainte")
            .setThumbnail(bot.user.displayAvatarURL({dynamic: true}))
            .setDescription("__Bienvenue dans ton Ticket__\n *Décrit nous ta question ou ton problème a propos de la boutique le Fondateur répondra a ton ticket le plus vite possible*")
            .setTimestamp()
            .setFooter("")

            const infobtn = new Discord.MessageActionRow().addComponents(new Discord.MessageButton()
            .setCustomId('close')
            .setLabel('Fermer le ticket')
            .setEmoji('🔒')
            .setStyle('DANGER'),
            )

            const idTicket = `${interaction.user}`

            await channel.send(`${interaction.user}, <@&980938575812120576>`)
            await channel.send({embeds: [infoembed], components: [infobtn]})
            })

            await interaction.reply({content: `Votre ticket a été créé avec succès ${channel} !`, ephemeral: true})
        }

    }

// ==================================================================

    if(interaction.isButton()) {

        if(interaction.customId === "close") {

            let user = interaction.guild.members.cache.find(m => m.user.username === interaction.message.embeds[0].description.split(" ")[0].split("#")[0] && m.user.discriminator === interaction.message.embeds[0].description.split(" ")[0].split("#")[1]);
            try {await user.send(`Votre ticket a été supprimé par ${interaction.user.tag}`)} catch (err) {}
            await interaction.channel.delete()
        }

// ==================================================================

        if(interaction.customId === "valid") {

            let validrole = interaction.guild.roles.cache.get("980938368747728946")

            interaction.member.roles.add(validrole.id)

            if(interaction.member.roles.cache.has(validrole.id))

            interaction.member.roles.remove(validrole.id)
            interaction.reply({content: `\`Réglément :\` Vous avez Validé le Règlement avec succès !`, ephemeral: true})
        }
    }

// ==================================================================

})
