const { Client, GatewayIntentBits, Partials, ActivityType } = require("discord.js");
// ↑ ActivityType 追加!!

const client = new Client({ intents: [GatewayIntentBits.Guilds], partials: [Partials.Channel] });

const Config = require("./Config.json");

client.login(Config.TOKEN);

client.on('ready', () => {
    console.log(`login!!(${client.user.tag})`);

    client.user.setActivity("ここに表示するテキスト", {
        type: ActivityType.Streaming,
        url: "https://www.youtube.com/watch?v="//URL
    })
});