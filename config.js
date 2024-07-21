const
  discord = require("discord.js-selfbot-v13");
 
function reloadPresence(client) {
    const activity = new discord.RichPresence()
      //more command https://discordjs-self-v13.netlify.app/#/docs/docs/main/class/RichPresence or https://github.com/aiko-chan-ai/discord.js-selfbot-v13/blob/main/Document/RichPresence.md
        .setApplicationId("1119170929747050506") //You can replace with your own bot application id
        .setType("PLAYING") //PLAYING, STREAMING, LISTENING
        .setName("Miaww") //name of your activity
        .setDetails("dying for her [afk]") //detail activity
        .setStartTimestamp(global.startTime)
        .setAssetsLargeImage("https://i.pinimg.com/originals/9e/f3/b6/9ef3b6489649dfe3f5b967044aa35c80.jpg")
        .setAssetsLargeText("Miawww")
        .setAssetsSmallImage("https://imageio.forbes.com/specials-images/imageserve/64421a10faabcf3a4aeb4797/Vector-Blue-Verified-Badge/960x0.jpg?format=jpg&width=960")
        .setAssetsSmallText("Astute-tra")
        .addButton('server1', "https://discord.gg/CKBVFUK6")
        .addButton('server2', "https://discord.gg/xJ4NuaAt")
    client.user.setActivity(activity.toJSON())
    client.user.setStatus("dnd")
};
module.exports = reloadPresence;
