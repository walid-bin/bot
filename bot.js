const { Client, GatewayIntentBits, Permissions } = require('discord.js');
require('dotenv').config();
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
    ],
});
client.once("ready",()=>{
    console.log("bot is online");
});

const replies={
    'Hi':'Hello.',
    'How are you?':'I am fine. What about you?',
    'I am also fine.':'Great!'
}

client.on('messageCreate',(message)=>{
    if(!message.author.bot) console.log({message})
    if(!message.author.bot) message.reply('Hello')
})

client.login(process.env.TOKEN);     

