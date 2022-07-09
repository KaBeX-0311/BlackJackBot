const Discord = require("discord.js");
const Event = require("../../Structure/Event");

module.exports = new Event("guildMemberAdd", async (member, bot) => {

    let WelcomeEmbed = new Discord.MessageEmbed()
    .setColor("ffefd5")
    .setTitle("Merci d\'avoir rejoint notre serveur !")
    .setThumbnail(bot.user.displayAvatarURL({dynamic: true}))
    .setDescription(`Bienvenue à __*${bot.user.username}*__ qui vient de rejoindre le serveur nous sommes désormais **${bot.guild.memberCount}** !`)
    .setImage('https://cdn.discordapp.com/attachments/980949147727315014/982306640466415666/welcolme.png')
    .setTimestamp()
    .setFooter("")

    let channel = member.channels.cache.get("980935506433015819")
    let msg = await channel.send({embeds: [WelcomeEmbed], components: []})

    const filter = async() => true;
    const collector = msg.createMessageComponentCollector({filter})
})
