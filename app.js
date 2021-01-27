const {Client, MessageEmbed, Message, Emoji} = require('discord.js');
const client = new Client();
const ytdl = require('ytdl-core');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

var queue =[];
var i = 0;

client.on('message', async msg =>{
  if(!msg.guild) return;
  var command = msg.content.split(" ")
  if(command[0] === 'play'){
    if(msg.member.voice.channel){

      const connection = await msg.member.voice.channel.join();
      console.log(i);
      do{
      const setPlay = () =>{
        connection.play(ytdl(queue[command[1]], { filter: 'audioonly', volume: 0.15 }));
      }

      const Play = async () =>{
        console.log("Reproduciendo...")
        await setPlay();
        console.log('Cancion finalizada')
      }
      Play();
      i+=1;
      }while(i<queue.length);
    }else{
      msg.reply('Necesitas estar en el canal de voz, no seas mens@');
    }
  }
})

client.on('message', async msg =>{
  if(!msg.guild) return;
  var setQueue = msg.content.split(" ");

  if(setQueue[0] === 'queue'){
      // console.log(setQueue);
      if(!setQueue[1]){
      msg.reply('Necesitas ingresar un URL valido')
    }
    else{
      queue.push(setQueue[1]);
      console.log(queue);
      msg.reply('Cancion agregada :smile:');
    }
  }
})


client.on('message', msg => {
  if (msg.content === 'embed') {
    const embed = new MessageEmbed()
      .setTitle('Arnulfo Treviño Cubero')
      .setColor('green')
      .setDescription('Rango: Doctor \nExplicacion: :star: :star: :star: :star:\n Puntualidad: :star: :star: \n Asistencia: :star: :star: :star:\n Pasable: :star: :star: :star: :star: :star: \nPuntuaciones del maestro: \n :thumbsup: = 75   :thumbsdown: = 13');
    msg.channel.send(embed);
  }
});

// Ping
client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
  if (msg.content === 'mauri') {
    msg.channel.send('no seas simp!');
  }
  if (msg.content === 'emile') {
    msg.channel.send('Bienvenido a casa a-amor... no es que te haya extrañado...¿Que me estas mirando?\nhttps://tenor.com/view/domestic-na-kanojo-domestic-girlfriend-rui-tachibana-anime-serious-gif-17080226');
  }
  if (msg.content === 'kevin') {
    msg.channel.send('Etto... lamento haberte dicho que tenia 18 :point_right: :point_left:');
  }
  if (msg.content === 'churro') {
    msg.channel.send('te vas funado');
  }
  if (msg.content === 'roxy') {
    msg.channel.send('Alto ahi rufian :underage:');
  }
  if (msg.content === 'paloma') {
    msg.channel.send('Todos te queremos uwu');
  }
  if (msg.content === 'evans') {
    msg.channel.send('https://tenor.com/view/love-live-umi-sonoda-maid-gif-19659357');
  }
  if (msg.content === 'rafa') {
    msg.channel.send('uwu');
  }
  if (msg.content === 'edvo') {
    msg.channel.send('ta bn wapo');
  }
  // if (msg.author.username === 'Emile' && msg.author.discriminator === '5967') {
  //   function SendWaifus(){
  //     setTimeout(function(){msg.channel.send('$w');}, 3000);
  //   }
  //   if(msg.content === '$w'){
  //     SendWaifus();
  //   }
  // }
});

client.login('NjEwNjYxODE5Njk4MzgwODEx.XVIhIw.DnZUDqQlQM0JEEhQCnwl1TE2Jko');