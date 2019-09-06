const Discord = require('discord.js');
const token = 'NjE5NTQ5MjQxMTc3NTM4NTYw.XXJ2Og.Q5RQPg6DbxWCKcSwUg_yGApBBhw';

const client = new Discord.Client();

client.on('message', (msg) => {

  //gives Help message
  if (msg.content === 'w!help') {
    const embed = new Discord.RichEmbed()
      .setTitle('**Help**')
      // .setDescription('')
      .addField('w!patreon', 'This command will give you a link to our Patreon!', true)
      .addField('w!youtube', 'This command will give you a link to our YouTube channel!', true)
      .addField('w!twitter', 'This command will give you a link to our Twitter account!', true)
      .addField('w!subreddit', 'This command will give you a link to our subreddit!', true)
      .addField('w!reddit', 'This command will give you a link to our subreddit!', true)
      // .setAuthor('Tim Shenk', 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-1/p160x160/11226559_10153351803422980_5095261185894120077_n.jpg?_nc_cat=109&_nc_ht=scontent-dfw5-1.xx&oh=2368eb2c0f78f1df41962741df62e0a7&oe=5CD94B38')
      .setColor('#1C9DEB')
    msg.channel.send(embed);
  }

  //gives Patreon link
  if (msg.content === 'w!patreon') {
    const embed = new Discord.RichEmbed()
      .setTitle('Patreon')
      .setDescription('https://patreon.com/WildcowMC')
      // .addField('Field Name1', 'Field Value1', true)
      // .addField('Field Name2', 'Field Value2', true)
      // .addField('Field Name3', 'Field Value3', false)
      // .setAuthor('Tim Shenk', 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-1/p160x160/11226559_10153351803422980_5095261185894120077_n.jpg?_nc_cat=109&_nc_ht=scontent-dfw5-1.xx&oh=2368eb2c0f78f1df41962741df62e0a7&oe=5CD94B38')
      .setColor('#F16452')
    msg.channel.send(embed);
  }

  //gives YouTube link
  if (msg.content === 'w!youtube') {
    const embed = new Discord.RichEmbed()
      .setTitle('YouTube')
      .setDescription('https://www.youtube.com/channel/UC_5zHZ-rVXBwMUrQEkV9UBA')
      // .addField('Field Name1', 'Field Value1', true)
      // .addField('Field Name2', 'Field Value2', true)
      // .addField('Field Name3', 'Field Value3', false)
      // .setAuthor('Tim Shenk', 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-1/p160x160/11226559_10153351803422980_5095261185894120077_n.jpg?_nc_cat=109&_nc_ht=scontent-dfw5-1.xx&oh=2368eb2c0f78f1df41962741df62e0a7&oe=5CD94B38')
      .setColor('#FF0000')
    msg.channel.send(embed);
  }

  //gives Twitter link
  if (msg.content === 'w!twitter') {
    const embed = new Discord.RichEmbed()
      .setTitle('Twitter')
      .setDescription('https://twitter.com/WildcowMC')
      // .addField('Field Name1', 'Field Value1', true)
      // .addField('Field Name2', 'Field Value2', true)
      // .addField('Field Name3', 'Field Value3', false)
      // .setAuthor('Tim Shenk', 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-1/p160x160/11226559_10153351803422980_5095261185894120077_n.jpg?_nc_cat=109&_nc_ht=scontent-dfw5-1.xx&oh=2368eb2c0f78f1df41962741df62e0a7&oe=5CD94B38')
      .setColor('#1C9DEB')
    msg.channel.send(embed);
  }

  //gives subreddit link
  if (msg.content === 'w!subreddit') {
    const embed = new Discord.RichEmbed()
      .setTitle('Subreddit')
      .setDescription('https://www.reddit.com/r/Wildcow/')
      // .addField('Field Name1', 'Field Value1', true)
      // .addField('Field Name2', 'Field Value2', true)
      // .addField('Field Name3', 'Field Value3', false)
      // .setAuthor('Tim Shenk', 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-1/p160x160/11226559_10153351803422980_5095261185894120077_n.jpg?_nc_cat=109&_nc_ht=scontent-dfw5-1.xx&oh=2368eb2c0f78f1df41962741df62e0a7&oe=5CD94B38')
      .setColor('#FF3F18')
    msg.channel.send(embed);
  }

  //gives Reddit account
  if (msg.content === 'w!reddit') {
    const embed = new Discord.RichEmbed()
      .setTitle('Reddit')
      .setDescription('https://www.reddit.com/user/WildcowMC/')
      // .addField('Field Name1', 'Field Value1', true)
      // .addField('Field Name2', 'Field Value2', true)
      // .addField('Field Name3', 'Field Value3', false)
      // .setAuthor('Tim Shenk', 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-1/p160x160/11226559_10153351803422980_5095261185894120077_n.jpg?_nc_cat=109&_nc_ht=scontent-dfw5-1.xx&oh=2368eb2c0f78f1df41962741df62e0a7&oe=5CD94B38')
      .setColor('#FF3F18')
    msg.channel.send(embed);
  }
});

client.on('ready', () => {

  //sends 'Bot is now connected!' in console
  console.log('Bot is now connected!');

  //sends 'I'm now connected' in #bot-🤖
  client.channels.find(x => x.name === 'bot-🤖').send('I\'m now connected!');
});

client.login(token);
