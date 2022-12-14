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
npm i discordjs axios ascii-table fs ms chalk got@11.8.3 node-fetch@2.6.7
```

## Websites will help you
[discord js guide](https://discordjs.guide/#before-you-begin)

[discord developer portal](https://discord.com/developers/applications)




## some texts you might need 
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

let  link  = await fetch('https://api.otakugifs.xyz/gif?reaction=hug').then(response => response.json());
```


