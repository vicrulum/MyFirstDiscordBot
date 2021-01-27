const {Client, MessageEmbed, Message, Emoji} = require('discord.js');
const client = new Client();
const ytdl = require('ytdl-core');

exports.Saludo = function Saludo()  {
    client.on('message', async msg => {
        if(msg.content === "saludo"){
            msg.reply("Modulo funcionando!");
        }
    }
    )
}
