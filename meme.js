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



module.exports = {
	name: 'meme',
	description: 'Fun',
	execute(message, args) {
        if (message.content === ',meme'){
            var memecommand = memeArray[Math.floor(Math.random()*memeArray.length)];
            const memeEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Your meme')
        .setDescription('Your epic, cool meme')
        .setImage(memecommand)
        .setTimestamp()
        .setFooter('memer memer')
        
        message.channel.send(memeEmbed);
        
        };
	},
};


