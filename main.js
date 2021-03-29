const Discord = require('discord.js');

const client = new Discord.Client();
const prefix = ","; 
const fs = require('fs')

client.commands = new Discord.Collection();


var myArray = [
    "https://www.calculator.net/img/dice1.png",
    "https://www.calculator.net/img/dice2.png",
    "https://www.calculator.net/img/dice3.png",
    "https://www.calculator.net/img/dice4.png",
    "https://www.calculator.net/img/dice5.png",
    "https://www.calculator.net/img/dice6.png",
    
  ];

  
  
  
  
  

client.commands = new Discord.Collection();

var memeArray = [
    "https://www.socialmediaexaminer.com/wp-content/uploads/2019/07/meme-template-batman-slaps-robin-800@2x.png",
    "https://i.ytimg.com/vi/JII3ZDhp4CA/maxresdefault.jpg",
    "https://i.pinimg.com/originals/25/85/51/2585516f065e2f5e6e42891d9c4e658b.jpg",
    "https://i2.wp.com/bestlifeonline.com/wp-content/uploads/2019/07/back-to-school-meme-funny-3.jpg?resize=1024%2C1051&ssl=1",
    "https://s.hdnux.com/photos/73/11/26/15504786/3/1200x0.jpg",
    "https://images-cdn.9gag.com/photo/agLmZ3r_700b.jpg",
    "https://i.ytimg.com/vi/F0BSMaC0mLg/maxresdefault.jpg",
    "https://parade.com/wp-content/uploads/2020/03/coronavirus-meme-watermark-gray.jpg",
    "https://cdn.someecards.com/posts/fictional-british-rapper-meme-thinking-89I.png",
    "https://i.redd.it/rv76erpdq4d41.jpg",
    "https://i.pinimg.com/564x/1d/62/f9/1d62f9c3c1713650e241cccb6a55a201.jpg",
    "https://static.clideo.com/files/content/506/twitter-meme-maker-1.png",
    "https://cnet4.cbsistatic.com/img/l-coyzrIAKHbP6FQMljXNOiF7Fg=/940x0/2020/03/24/6e0e3164-ff6b-40e1-adfa-69c57f1e7013/screen-shot-2020-03-24-at-12-47-07-pm.png",
    "https://s18670.pcdn.co/wp-content/uploads/Memes-About-School-Reopening.png",
    "https://images7.memedroid.com/images/UPLOADED742/5c472baef1da6.jpeg",
    "http://www.shutupandtakemymoney.com/wp-content/uploads/2020/06/sometimes-a-simple-kiss-can-change-ur-life-coronavirus-meme.jpg",
    "https://fox2now.com/wp-content/uploads/sites/14/2012/11/overly-attached-girlfriend.jpg?w=625",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmRFWmDsijzgeySR-1EEE-qUMnMnAZz6bCZA&usqp=CAU",
    "https://cdn.memes.com/up/55072601536456201/i/1615910789691.JPG"
    
];

var punArray = [
    "A crazy wife says to her husband that moose are falling from the sky. The husband says, it’s reindeer.",
    "I lost my mood ring and I don’t know how to feel about it!",
    "I was wondering why the ball was getting bigger. Then it hit me...",
    "Never trust an atom, they make up everything!",
    "I can’t believe I got fired from the calendar factory. All I did was take a day off!",
    "A cross-eyed teacher couldn’t control his pupils.",
    "There was a kidnapping at school yesterday. Don’t worry, though – he woke up!",
    "Apple is designing a new automatic car. But they’re having trouble installing Windows!",
    "The past, the present, and the future walk into a bar. It was tense!",
    "I asked a Frenchman if he played video games. He said Wii.",
    "What did the sushi say to the bee? Wasabee!"


]

var roastArray = [
    "If i had a face like yours, I'd sue my parents.",
    "Some day, you will go far, and I'd wish you stay there. ",
    "You must be born on a highway cause that's where most accidents happen.",
    "I'd agree with you, but we'd be both wrong.",
    "If I had a dollar to give you each time you said something dumb, I'd be broke."
]



client.once('ready', () => {
	console.log('Ready!');


})


client.once('ready', () => {
	console.log('Ready!');
});

client.login('Your Token here');

client.on('message', message => {
	if (message.content === ',ping') {
        client.commands.get('ping').execute(message, args);
    }if (message.content === ',avatar') {
        if (!message.mentions.users.size) {
            return message.channel.send(`This is your so-called avatar: <${message.author.displayAvatarURL({ format: "png", dynamic: true })}>`);
        }const avatarList = message.mentions.users.map(user => {
            return `${user.username}'s avatar: <${user.displayAvatarURL({ format: "png", dynamic: true })}>`;
        });
    
       
        message.channel.send(avatarList);
    }if (message.content === ',dice'){
        var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
        const diceEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Your die roll')
        .setDescription('Your totally realistic die roll beholds')
        .setImage(randomItem)
        .setTimestamp()
        .setFooter('imagine rolling a die')
        message.channel.send(diceEmbed);
    }if (message.content === ',meme'){
        var memecommand = memeArray[Math.floor(Math.random()*memeArray.length)];
        const memeEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Your meme')
    .setDescription('Your epic, cool meme')
    .setImage(memecommand)
    .setTimestamp()
	.setFooter('memer memer')

message.channel.send(memeEmbed);
    }if (message.content === ',dadjoke'){
        var dadcommand = punArray[Math.floor(Math.random()*punArray.length)];
        return message.reply (dadcommand);
    }if (message.content === ',comic'){
        message.channel.send('Here is your kewl comic for today: https://www.gocomics.com/garfield/2021/03/22')
    }if (message.content === ',help'){
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
    }if (message.content === ',roast'){
        var roastcommand = roastArray[Math.floor(Math.random()*roastArray.length)];
        const roastEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
    .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
    .setTitle('Yer Roast ')
	.setDescription('Haave fuan roasting peeps hear')
    .addField('(roastcommand)', true)
    .setTimestamp()
	.setFooter('join our support server or else');
    message.channel.send(roastEmbed);
    }
   
   
  

    

        
    
});






	
	




client.on("ready", () =>{
    client.user.setPresence({
        status: "dnd", 
        activity: {
            name: "Currently in Maintenence | UNSTABLE",  
            type: "PLAYING" 
        }
    });
});
