const Discord = require("discord.js")
const Command = require("../Structure/Command")

module.exports = new Command({

    name: "ping",
    description: "Permet de connaître la latence du bot",
    utilisation: "",
    alias: ["ping"],
    permission: ["ADMINISTRATOR"],
    category: "Information",
    cooldown: 0,

    async run(bot, message, args) {

        const startTimeDB = Date.now()

        const endTimeDB = Date.now()

        const startTime = Date.now()

        await message.reply(`En cours...`).then(async msg => {

            const endTime = Date.now()

            let pingEmbed = new Discord.MessageEmbed()
            .setColor("ffefd5")
            .setTitle("")
            .setThumbnail(bot.user.displayAvatarURL({dynamic: true}))
            .setDescription(`\`Latence du bot\` : ${endTime - startTime}ms\n\`Latence de l'API de Discord\` : ${bot.ws.ping}ms\n\`Latence de la base de données\` : ${endTimeDB - startTimeDB}ms`)
            .setTimestamp()
            .setFooter("")
                await msg.edit({embeds: [pingEmbed], components: []})

        })
    }
})
