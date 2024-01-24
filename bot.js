const { Client, GatewayIntentBits, REST, Routes } = require('discord.js');
require('dotenv').config();
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

const replies={
    'Hi':'Hello.',
    'Hello':'Hi.',
    'How are you?':'I am fine. What about you?',
    'I am also fine.':'Great!',
}

const commands = [
    {
        name:'khao',
        description:"asked bot to eat something!!"
    }
];

const rest = new REST({version:'10'}).setToken(process.env.TOKEN);
const handleRegCommands=async()=>{
    try {
        console.log('refreshing!');
        await rest.put(Routes.applicationCommands(client.user.id, '1008608258497450024'),{body:commands})
        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.log(error)
    }
}

client.on('messageCreate',(message)=>{
    // if(!message.author.bot) console.log({message})
    if(!message.author.bot) Object.keys(replies).map(key=>{if (message.content.toLocaleLowerCase()==key.toLocaleLowerCase()) message.reply(replies[key]) })
})

client.once("ready",()=>{
    console.log("bot is online");
    // console.log(client)
    // console.log(client.user.id)
    handleRegCommands();
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
  
    if (interaction.commandName === 'khao') {
      await interaction.reply('khamuna!');
    }
  });


client.login(process.env.TOKEN,);     

