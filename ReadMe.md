# Discord JS v14 Files for GDSC

This this the file & links you need to start coding with us

## What you need to download:

[VS CODE](https://code.visualstudio.com/download)

[NODE JS](https://nodejs.org/en/download/)

## Commands you need to write in the termianl

```bash
npm init -y
```

```bash
npm i discordjs axios ascii-table fs ms chalk node-fetch@2.6.7
```

## Websites will help you
[discord js guide](https://discordjs.guide/#before-you-begin)

[discord developer portal](https://discord.com/developers/applications)




## some texts you might need 
for getting pics and vids from reddit
```bash
"http://meme-api.herokuapp.com/gimme/*subreddit you need*"
```

for getting gifs

```bash
"https://api.otakugifs.xyz/gif?reaction=*type of gif*"
```

for music main commands
``` javascript
// -----------------------------------------------------
const status = queue =>
  `Volume: \`${queue.volume}%\` | Filter: \`${queue.filters.names.join(', ') || 'Off'}\` | Loop: \`${
    queue.repeatMode ? (queue.repeatMode === 2 ? 'All Queue' : 'This Song') : 'Off'
  }\` | Autoplay: \`${queue.autoplay ? 'On' : 'Off'}\``
// -----------------------------------------------------
client.distube
  .on('playSong', (queue, song) =>
    queue.textChannel.send(
		{embeds: [
			new EmbedBuilder()
			.setColor("#FFBB33")
         	.setAuthor({name: "NOW PLAYING"})
			.setImage(song.thumbnail)
      		.setTitle(song.name)
			.setURL(song.url)
			.addFields([
				{ name: '📨 Requested By', value: `\`\`\`${song.user.tag}\`\`\``, inline: true },
				{ name: '↗ Uploader:', value: `\`\`\`${song.uploader.name}\`\`\``, inline: true },
				{ name: '⏳ Duration', value: `\`\`\`${song.formattedDuration}\`\`\``, inline: true},
				{ name: '🔊 Volume', value: `\`\`\`${queue.volume}%\`\`\``, inline: true},
				{ name: '💠 Filter', value: `\`\`\`${queue.filters.names.join(', ') || 'Off'}\`\`\``, inline: true},
				{ name: '🔁 Loop', value: `\`\`\`${queue.repeatMode ? (queue.repeatMode === 2 ? 'All Queue' : 'This Song') : 'Off'}\`\`\``, inline: true},
				{ name: '⏳Current Duration:', value: `Current Duration: \`[0:00 / ${song.formattedDuration}]\`\`\`\`🔴 | 🎶──────────────────────────────\`\`\``, inline: true},
				
				])
			.setTimestamp()
			]}))
// -----------------------------------------------------
  .on('addSong', (queue, song) =>
    queue.textChannel.send(
		{embeds: [
			new EmbedBuilder()
			.setColor("#FFBB33")
			.setAuthor({name: "ADDED TO QUEUE"})
			.setTitle(song.name)
			.setImage(song.thumbnail)
			.setDescription('✅ Successfully Added Song to Queue')
			.addFields([
			  { name: '💠 Requested By', value: `\`\`\`${song.user.tag}\`\`\``, inline: true },
			  { name: '💠 Duration', value: `\`\`\`${song.formattedDuration}\`\`\``, inline: true}
			])]}))
// -----------------------------------------------------
  .on('addList', (queue, playlist) =>
    queue.textChannel.send(
		{embeds: [
			new EmbedBuilder()
			.setColor("#FFBB33")
			.setAuthor({name: "ADDED TO QUEUE", })
			.setTitle(playlist.name)
			.setImage(playlist.thumbnail)
			.setDescription('✅ Successfully Added Playlist to Queue')
			.addFields([
			  { name: '📨 Requested By', value: `\`\`\`${playlist.user.tag}\`\`\``, inline: true },
			  { name: '⚪ Size', value: `\`\`\`${playlist.songs.length}\`\`\``, inline: true}
			])
		  ]}))
// -----------------------------------------------------
  .on('error', (channel, e) => {
    if (channel) channel.send(`${client.emotes.error} | An error encountered: ${e.toString().slice(0, 1974)}`)
    else console.error(e)
  })
  .on('empty', channel => queue.textChannel.send({embeds: [new EmbedBuilder().setColor("#FFBB33").setDescription('Voice channel is empty! Leaving the channel...')]}))
  .on('searchNoResult', (message, query) =>
    message.channel.send({embeds: [new EmbedBuilder().setColor("#FFBB33").setDescription(`❌ | No result found for \`${query}\`!`)]})
  )
  .on('finish', queue => queue.textChannel.send({embeds: [new EmbedBuilder().setColor("#FFBB33").setDescription("`✅ Finished!`")]}))
// -----------------------------------------------------
```