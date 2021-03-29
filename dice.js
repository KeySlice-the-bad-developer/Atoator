var myArray = [
    "https://www.calculator.net/img/dice1.png",
    "https://www.calculator.net/img/dice2.png",
    "https://www.calculator.net/img/dice3.png",
    "https://www.calculator.net/img/dice4.png",
    "https://www.calculator.net/img/dice5.png",
    "https://www.calculator.net/img/dice6.png",
    
  ];

module.exports = {
	name: 'dice',
	description: 'Fun',
	execute(message, args) {
		if (message.content === ',dice'){
            var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
            const diceEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Your die roll')
            .setDescription('Your totally realistic die roll beholds')
            .setImage(randomItem)
            .setTimestamp()
            .setFooter('imagine rolling a die')
            message.channel.send(diceEmbed);
        
        }
	},
};


