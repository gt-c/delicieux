module.exports = {
	run: async (bot, message) => {
		message.reply(`Pong! \`${bot.pings[0]}ms\`.`).catch(() => bot.safeSend(message, module.exports.help.name));
	},
	help: {
		name: "ping",
		category: "Information"
	}
};