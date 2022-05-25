# Guide how to create a bot use `Node.js`
**Hello everyone, in this guide i'll show you how to create your first discord bot**

![bot](https://user-images.githubusercontent.com/92126223/170251055-e0126e88-0b4e-48b7-b6eb-ba483909744a.png)

# **First step you need to create a discord bot**
- Go to [Discord Developer Portal](https://discord.com/developers/applications)

Press `New application`

![image](https://user-images.githubusercontent.com/92126223/170251878-cef01641-e35d-4c92-9c32-eb23da6ef92a.png)

- **Then you need create a name of bot**

![image](https://user-images.githubusercontent.com/92126223/170252197-cf1b60d1-b840-41cc-acbd-fdef6e20d9be.png)

**You can also add a description on your bot**

![image](https://user-images.githubusercontent.com/92126223/170252613-af5ead20-00b5-49d0-8e29-923d49262890.png)

- **Press `Bot` and `Add Bot`**

![image](https://user-images.githubusercontent.com/92126223/170254155-4dccde0b-391b-40ca-a428-1a0a9ca3e186.png)

![image](https://user-images.githubusercontent.com/92126223/170254227-951af32f-42dc-4211-9606-11d220cf74d8.png)


- **Now we have this**

![image](https://user-images.githubusercontent.com/92126223/170254299-5ff535a1-9a79-4098-a125-1f3a6f65828a.png)

- **Enable these option**

![image](https://user-images.githubusercontent.com/92126223/170280473-0b26eb04-d64f-4ec7-894e-b36ae55890fa.png)


# **Adding your bot to server**

- **Go to OAuth2 - URL Generator**

![image](https://user-images.githubusercontent.com/92126223/170263362-5faceaa1-9cfa-4087-b123-6295d7f22fb9.png)

- **We get a URL**

![image](https://user-images.githubusercontent.com/92126223/170263707-b87fa81f-c6ed-4acd-b723-e329d7dc2892.png)

- **Head to the following URL**

![image](https://user-images.githubusercontent.com/92126223/170255833-e669820c-0133-437a-827b-bba301db030f.png)

- **Conguraltions! We added bot to our server!**

![image](https://user-images.githubusercontent.com/92126223/170256339-9ad24d03-235f-4d4b-9bd7-8e0659ae7ec8.png)
# Download `Node.js`
[Site Node.js](https://nodejs.org/en/)

# Create a bot directory

![image](https://user-images.githubusercontent.com/92126223/170256482-9262d3a6-6d92-4560-ad05-2f36ae2de06b.png)

- **Create a file `some_name.js` i named `bot.js`**

![image](https://user-images.githubusercontent.com/92126223/170256637-12663146-fff5-4bfa-ac4e-d9266853ab94.png)

- **Open this file (I use VS code)**

#Installation `Discord.js`

```
npm i discord.js
```

![image](https://user-images.githubusercontent.com/92126223/170257296-3058060b-8215-44f3-b3e7-bd77d61381a5.png)

- **After this you'll see a new folders and json files**

![image](https://user-images.githubusercontent.com/92126223/170257484-dbe8a8f8-4f90-4c2a-95d4-f3c40d48589c.png)

In `package.json` we can see curently version discord.js 
```json
{
  "dependencies": {
    "discord.js": "^13.7.0"
  }
}
```

- In `bot.js` write:
```js
const Discord = require(`discord.js`);
const intents = new Discord.Intents(32767);
const bot = new Discord.Client({ intents });
const id = '!';



//in the end of file
bot.login('YOUR_TOKEN');
```
- **How to get TOKEN?**

![image](https://user-images.githubusercontent.com/92126223/170260608-804edbc2-2619-44f9-9af6-5bbcc35c64ae.png)

- **Reset token and copy**

![image](https://user-images.githubusercontent.com/92126223/170260839-059a60fc-5e98-4388-ad18-8aebdfd95717.png)


**WARNING!!! DON'T GIVE THIS TOKEN TO ANYONE**

- **We have included the library `discord.js`** 
- **Activity of bot**
```js
bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);
    bot.user.setActivity('!help|🤖')
  });
```

![image](https://user-images.githubusercontent.com/92126223/170260246-87bba92e-6361-4b86-a1d3-1abc2045f5d5.png)

# Base commands
```js
bot.on('messageCreate', message => {
    if (message.content.startsWith(id + 'ping')) {
        message.reply('Pong!')
}
});
```
> **We intercept events in the guild `bot.on` and event of message `'messageCreate'` take the variable `message` in `discord.js` liblary**

**Start bot `node bot.js`**

![image](https://user-images.githubusercontent.com/92126223/170271646-a08b82e2-e909-4066-8553-04fb5aad46c6.png)

![image](https://user-images.githubusercontent.com/92126223/170269283-5dfe7a29-bc67-4a60-94c5-fdc23c034ed7.png)


- **We can also react on message with `message.react('some emoji')`**
```js
bot.on('messageCreate', message => {
  if (message.content.startsWith(id + 'ping')) {
    message.react('✅')
    message.reply('Pong!')
  }
})
```

![image](https://user-images.githubusercontent.com/92126223/170269871-ce817571-62c6-4f1a-ab59-e67fb7e06f5c.png)


# How to add button 'Add to server'

![image](https://user-images.githubusercontent.com/92126223/170270069-6fcc4532-b0cf-46ef-a135-97fc2593c484.png)

- **Go to OAuth2**

![image](https://user-images.githubusercontent.com/92126223/170270427-cbf87b5e-92cb-4b65-8cf0-e0aab0467391.png)

- **Select `In-app Authorization`**

![image](https://user-images.githubusercontent.com/92126223/170270695-dcd08d00-77f4-4012-a68e-6a9c15131b77.png)

- **Then choose `bot` and permissions**

>I choose `Administrator`

![image](https://user-images.githubusercontent.com/92126223/170271014-edd7b020-eb61-46e2-b127-0d687d79087d.png)

- **Start bot `node bot.js`**

## **Complete! You created your first bot ;D**

- ##  If you need a help with discord.js you can go to in documentation in official site [Discord.js](https://discord.js.org/#/docs/discord.js/stable/general/welcome) 

# **Thank you very much for reading my guide on how to create a bot on `Node.js`, if you want you can join to my discord server**
# [Join to discord server](https://discord.gg/C3EH9E32mb)
