module.exports = {
	name: 'help',
	description: 'Utilities',
	execute(message, args) {
		const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setURL('https://discord.gg/hUChNNF7jy')
    .setImage('https://i.imgur.com/NQahbjn.png')
    .setTitle('Help Command ')
	.setDescription('Need some help with the bot? Do not fret! The prefix of this bot is "," such as ,meme')
	.addFields(
		{ name: ',help', value: 'The help command, which you are reading now' },
		{ name: ',meme', value: 'Shows some cool, epic memes', inline: true },
        { name: ',dadjoke', value: 'Ready for some cringe? These dad jokes are for you!', inline: true },
        { name: ',dice', value: 'A totally realistic virtual die/dice roll', inline: true }
    )
    .addField(',comic', 'Are you a fan of Garfield? If so, try out this command :)', true)
    .addField(',avatar', 'Displays your avatar on discord, otherwise known as profile picture.', true)
	.setTimestamp()
	.setFooter('Our Help Command | Join our support server: https://discord.gg/uvzUXGhK7x');

message.channel.send(exampleEmbed);
	},
};



