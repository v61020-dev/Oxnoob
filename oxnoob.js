// Requires
const Discord = require('discord.js')

// Create an instance of a Discord client
const client = new Discord.Client()

// The bot is ready
client.on('ready', () => {
  console.log('Bot is now running! c;')
})

// This code will run once the bot has disconnected from Discord.
bot.on("disconnected", function () {
	// alert the console
	console.log("Disconnected!");

	// exit node.js with an error
	process.exit(1);
});

// This code will run once the bot receives any message.
bot.on("message", function (msg) {
	// if message begins with "n!ping"
	if (msg.content.indexOf("n!ping") === 0) {
		// send a message to the channel the ping message was sent in.
		bot.sendMessage(msg.channel, "Pong! Thanks for using Oxnoob.");

		// alert the console
		console.log("pong-ed " + msg.author.username);
	}
});

client.login(process.env.BOT_TOKEN)
