const Discord = require("discord.js");
const Event = require("../../Structure/Event");
const owner = ['349132935678394369']

module.exports = new Event('messageCreate', async (bot, message) => {

        if(!owner.includes(message.author.id)) return;

        let prefix = '!'

        let messageArray = message.content.split(" ");
        let command = messageArray[0];
        let args = messageArray.slice(1);
        let commandFile = bot.commands.get(command.slice(prefix.length))
        
        if(!message.content.startsWith(prefix)) return;
        if(!commandFile) return message.reply(`Cette commande n'existe pas !`)
    
        commandFile.run(bot, message, args)

        if(command === "test"){
                const embed = new MessageEmbed()
                    .setColor("ffefd5")
                    .setTitle("tset")
                    .setURL("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png")
                    .setAuthor("KaBeX")
                    .setDescription("test")
                    .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png")
                    .addField("test")
                    .addField("set")
                    .setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png")
                    .setTimestamp()
                    .setFooter("c'est a moi wsh");
            
                message.channel.send({ embeds: [embed]});
            }
})