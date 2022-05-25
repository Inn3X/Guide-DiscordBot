const Discord = require(`discord.js`);
const intents = new Discord.Intents(32767);
const bot = new Discord.Client({ intents });
const id = '!';
bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`)
})
bot.on('messageCreate', message => {
  console.log(message.content)
})
bot.on('messageCreate', message => {
  if (message.content.startsWith(id + 'ping')) {
    message.react('✅')
    message.reply('Pong!')
  }
})


bot.login('YOUR_TOKEN');