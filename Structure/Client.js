const Discord = require("discord.js");
const mysql = require("mysql")
const fs = require("fs");
const intents = new Discord.Intents(32767);
const Command = require("./Command");
const Event = require("./Event");

class Client extends Discord.Client {
    constructor() {
        super({intents})

        /**
         * @type {Discord.Collection<string, Command>}
         */

        this.commands = new Discord.Collection();
        this.color = "#cc4251";
    }

    start(Token) {

        fs.readdirSync("./Commands").filter(file => file.endsWith(".js")).forEach(async f => {

            /**
             * @type {Command}
             */

            let props = require(`../Commands/${f}`)
            console.log(`${f} commande chargée avec succès !`)
            this.commands.set(props.name, props)
        })

         fs.readdirSync("./Events/").forEach(dirs => {
    
            fs.readdirSync(`./Events/${dirs}/`).filter(files => files.endsWith(".js")).forEach(async evt => {

                /**
                 * @type {Event}
                */

                const event = require(`../Events/${dirs}/${evt}`);
                console.log(`${event.event}.js événement chargé avec succès !`)
                this.on(event.event, event.run.bind(null, this));
            })
        });

        this.login(Token)
    }
}

module.exports = Client;