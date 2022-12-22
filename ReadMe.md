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
npm i discord.js axios ascii-table fs ms chalk got@11.8.3 node-fetch@2.6.7
```

## Websites will help you
[discord js guide](https://discordjs.guide/#before-you-begin)

[discord developer portal](https://discord.com/developers/applications)

[GIPHY DEV DASHBOARD](https://developers.giphy.com/dashboard/?)





## some codes you might need 
for getting pics and vids from reddit
```javascript
const got = require('got');
got('https://www.reddit.com/r/thesubreddit/random/.json')
        .then(response => {
            const [list] = JSON.parse(response.body);
            const [post] = list.data.children;

            const permalink = post.data.permalink;
            const memeUrl = `https://reddit.com${permalink}`;
            const memeImage = post.data.url;
            const memeTitle = post.data.title;
            const memeUpvotes = post.data.ups;
            const memeNumComments = post.data.num_comments;
	    
	    // your embed here and the reply
	    })
```

for getting gifs

```javascript
const fetch = require("node-fetch");
        const url = `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${config.gifq}&limit=100`
        const respond = await fetch(url)
        const res = await respond.json()
        const randomIndex = Math.floor(Math.random() * res.data.length);
        // res.data[randomIndex].images.original.url (is the gif url)
```
**ALL FILES WILL BE UPLOADED HERE AFTER WE FINISH.**

**For any problems reach me YAJ**
